import { Coin } from "@/types/coinGecko/Coin";

async function getTop10Coins() {
    const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
        {
            next: {
                revalidate: 60
            }
        }
    )
    const data: Coin[] = await response.json()

    return data
}

function CarouselItem({ coin }: { coin: Coin }) {
    return (
        <div className="!label flex gap-2">
            <span className="text-secondary-800">{coin.symbol}</span>
            <span className="text-default">{coin.price}</span>
            <span
                className={coin.market_cap_change_percentage_24h >= 0 ?
                    "text-tertiary-500" : "text-quartenary-500"
                }
            >
                {coin.percentage_24h}
            </span>
        </div>
    )
}

export async function TopCoinsCarousel() {
    const coins = await getTop10Coins()

    const numberFormatter = new Intl.NumberFormat("en-US", {
        signDisplay: "exceptZero",
        maximumFractionDigits: 2
    })

    const formattedCoins = coins.map(coin => ({
        ...coin,
        symbol: coin.symbol.toLocaleUpperCase(),
        percentage_24h: `${numberFormatter.format(coin.market_cap_change_percentage_24h)}%`,
        price: coin.current_price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }))

    return (
        <div className="h-full max-w-sm w-full overflow-hidden flex items-center justify-center">
            <div className="flex gap-6">
                <div className="flex justify-around items-center gap-6 animate-scrolling">
                    {formattedCoins.map(coin => (
                        <CarouselItem key={coin.id} coin={coin} />
                    ))}
                </div>
                <div className="flex justify-around items-center gap-6 animate-scrolling">
                    {formattedCoins.map(coin => (
                        <CarouselItem key={coin.id} coin={coin} />
                    ))}
                </div>
            </div>
        </div>
    )
}