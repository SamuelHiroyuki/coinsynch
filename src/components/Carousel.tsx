"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { cx } from "class-variance-authority";
import { debounce } from "@/utils/debounce";
import { Icon, IconName } from "./Icon";

interface Items {
    image: string
    icons: [IconName, IconName]
}

const GAP_SIZE = 112;
const CAROUSEL_SIZE = {
    width: 215,
    height: 280,
    // width: 385,
    // height: 500,
}
const MIN_DELAY = 4;
const MAX_DELAY = 6;

const ITEMS: Items[] = [
    { image: "/woman.svg", icons: ["bitcoin", "increase-chart"] },
    { image: "/man.svg", icons: ["laptop-mobile", "crypto"] },
    { image: "/woman2.svg", icons: ["bitcoin", "increase-chart"] },
]

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const steps = useMemo(() => ITEMS.map((__, index) =>
        (CAROUSEL_SIZE.width + GAP_SIZE) * index
    ), [])

    const scrollNext = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % ITEMS.length)
    }, [])

    useEffect(() => {
        const container = containerRef.current;
        const debouncedScrollNext = debounce(scrollNext, 200)

        const listener = (event: WheelEvent) => {
            event.preventDefault();
            debouncedScrollNext()
        }

        container?.addEventListener('wheel', listener);
        return () => container?.removeEventListener('wheel', listener);
    }, [scrollNext]);


    return (
        <div className="absolute xl:top-32 md:top-36 right-0 xl:w-[640px] xl:h-[500px] md:w-[388px] md:h-[280px] max-md:hidden">
            <div
                className="overflow-x-hidden pl-10"
                ref={containerRef}
            >
                <div
                    className="flex items-end xl:gap-28 md:gap-16 transition-[transform] ease-in-out duration-500"
                    style={{ transform: `translateX(-${80 * currentIndex}%)` }}
                >
                    {ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className={cx(
                                "relative",
                                currentIndex !== index ? "opacity-50" : "opacity-100"
                            )}
                        >
                            <Image
                                src={item.image}
                                alt=""
                                width={0}
                                height={0}
                                className="max-w-none xl:w-[384px] xl:h-[499px] md:w-[215px] md:h-[278px]"
                            />
                            <div
                                className="animate-float flex items-center justify-center absolute xl:w-20 xl:h-20 md:w-10 md:h-10 bg-primary-100 rounded-lg xl:top-20 xl:-left-10 md:top-12 md:-left-6"
                                style={{ animationDuration: `${Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY}s` }}
                            >
                                <Icon
                                    name={item.icons[0]}
                                    className="fill-primary-500 xl:w-16 xl:h-16 md:w-8 md:h-8"
                                />
                            </div>
                            <div
                                className="animate-float animate flex items-center justify-center absolute xl:w-20 xl:h-20 md:w-10 md:h-10 bg-primary-100 rounded-lg xl:top-80 xl:-right-10 md:top-48 md:-right-6"
                                style={{ animationDuration: `${Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY}s` }}
                            >
                                <Icon
                                    name={item.icons[1]}
                                    className="fill-primary-500 xl:w-16 xl:h-16 md:w-8 md:h-8"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};