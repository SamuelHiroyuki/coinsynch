import { Coin } from "@/types/coinGecko/Coin";
import Table from "./table";

async function getTop10Coins() {
    try {
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
    } catch { }
}

async function TopCryptosTable() {
    const coins = await getTop10Coins()

    if (!coins?.length) return <></>

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
        <Table coins={formattedCoins} />
    )
}

export default TopCryptosTable