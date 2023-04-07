import Image from 'next/image'

interface Props {
    hideLogo?: boolean
}

export function Footer({ hideLogo = false }: Props) {
    return (
        <footer className="shadow-top h-16">
            <div className="transition-[max-width] ease-out h-full container flex justify-between max-md:justify-center items-center gap-6 max-sm:px-6">
                <p className='max-md:hidden'>Copyright © 2022 -  All rights reserved</p>
                {!hideLogo && (
                    <Image
                        src="/brand.svg"
                        alt="CoinSynch logo"
                        width={95}
                        height={16}
                        priority
                    />
                )}
            </div>
        </footer>
    )
}