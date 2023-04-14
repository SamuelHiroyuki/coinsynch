import { cx } from 'class-variance-authority'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

export function Header({ hideShadow = false }: { hideShadow?: boolean }) {
    return (
        <header className={cx("h-16 sticky top-0 bg-white z-20", !hideShadow ? "shadow" : "")}>
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
                    <Link className="label" href="#about">About us</Link>
                    <Link className="label" href="#top-cryptos">Top Cryptos</Link>
                    <Link className="label ml-auto" href="/signin">Sign in</Link>
                    <Button size="sm" href="/signup">Sign up</Button>
                </nav>
                <Link href="#" className='md:hidden ml-auto'>
                    <Image
                        src="/icons/h-menu.svg"
                        alt="menu"
                        width={24}
                        height={24}
                    />
                </Link>
            </div>
        </header>
    )
}