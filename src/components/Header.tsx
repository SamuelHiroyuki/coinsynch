import Image from 'next/image'
import { Button } from './Button'
import { Link } from './Link'

export function Header() {
    return (
        <header className="shadow h-16">
            <div className="transition-[max-width] ease-out h-full container flex items-center gap-6 max-sm:px-6">
                <Image
                    src="/brand.svg"
                    alt="CoinSynch logo"
                    width={124}
                    height={21}
                    priority
                    className='mr-4'
                />
                <nav className='flex-1 items-center flex gap-6 max-md:hidden'>
                    <Link href="#about">About us</Link>
                    <Link href="#top-cryptos">Top Cryptos</Link>
                    <Link href="/signin" className='ml-auto'>Sign in</Link>
                    <Button size="sm" href="/signup">Sign up</Button>
                </nav>
                <Link href="#" className='md:hidden ml-auto'>
                    <Image
                        src="/h-menu.svg"
                        alt="menu"
                        width={24}
                        height={24}
                    />
                </Link>
            </div>
        </header>
    )
}