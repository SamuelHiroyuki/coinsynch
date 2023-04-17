"use client"

import { PillCard } from "@/components/PillCard";
import { cx } from "class-variance-authority";
import Image from "next/image";
import { AreaChart, Area, CartesianGrid, ResponsiveContainer } from 'recharts';

const numberFormatter = new Intl.NumberFormat("en-US", {
    signDisplay: "exceptZero",
    maximumFractionDigits: 2
})

async function fetchCoin(crypto: string) {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${crypto}`, {
            next: {
                revalidate: 60
            }
        })
        const data = await response.json()
        return data
    } catch { }
}

async function fetchVariation(crypto: string) {
    try {
        const coin = await fetchCoin(crypto)
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=1`, {
            next: {
                revalidate: 60
            }
        })
        const data: { prices: Array<[any, number]> } = await response.json()


        const [[, firstPrice], ...middle] = data.prices;
        const [[, lastPrice]] = middle.slice(-1);
        const dailyVariation = ((lastPrice - firstPrice) / firstPrice) * 100;

        return {
            image: coin.image.small,
            symbol: coin.symbol,
            data: data.prices.map(([, price]) => ({ price })),
            isPositiveVariation: dailyVariation >= 0,
            formattedVariation: `${numberFormatter.format(dailyVariation)}%`
        }
    } catch { }

}

const DailyVariation = async ({ crypto }: { crypto: string }) => {
    const coin = await fetchVariation(crypto)

    return (
        <PillCard
            className="xl:col-span-3 md:col-span-4 sm:col-span-2 max-md:flex-col max-md:h-36"
            left={
                <div className="flex flex-col p-2 min-w-[100px] gap-4 max-md:h-1/2">
                    <p className="small-label md:text-center sm:text-start !text-secondary-500">Daily Variation</p>
                    <div className="flex gap-2 md:flex-col">
                        <div className="flex gap-2 items-center justify-center">
                            <Image
                                width={24}
                                height={24}
                                src={coin?.image}
                                alt={coin?.symbol}
                                className="!w-6 !h-6"
                            />
                            <p className="label">{coin?.symbol?.toUpperCase()}</p>
                        </div>

                        <p
                            className={cx(
                                "text-base leading-6 tracking-normal text-default text-center",
                                coin?.isPositiveVariation ? "text-tertiary-700" : "text-quartenary-500")
                            }
                        >
                            {coin?.formattedVariation}
                        </p>
                    </div>
                </div>
            }
            right={
                <div className="flex-1 max-md:h-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={coin?.data}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#F4CC8F" stopOpacity={1} />
                                    <stop offset="75%" stopColor="#FFF6E8" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            <CartesianGrid stroke="#F0F0F0" />
                            <Area type="monotone" dataKey="price" strokeOpacity={0} fill="url(#colorUv)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            }
        />
    );
}

export default DailyVariation