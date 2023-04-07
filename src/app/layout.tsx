import './globals.css'

import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['400', '700']
})

export const metadata = {
  title: 'CoinSynch | One Wallet for All Your Cryptocurrency Needs',
  description: 'CoinSynch is a reliable and secure crypto wallet application that simplifies the management of your cryptocurrency portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
