"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { cx } from "class-variance-authority";
import { debounce } from "@/utils/debounce";
import { Icon, Icons } from "./Icon";

interface Props {
    items: Array<{
        image: string
        icons?: [Icons?, Icons?]
    }>
}

const GAP_SIZE = 112;
const CAROUSEL_SIZE = {
    width: 385,
    height: 500,
}
const MIN_DELAY = 4;
const MAX_DELAY = 6;

export const Carousel = ({ items }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const steps = useMemo(() => items.map((__, index) =>
        (CAROUSEL_SIZE.width + GAP_SIZE) * index
    ), [items])

    const scrollNext = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % items.length)
    }, [items.length])

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
        <div
            className="overflow-x-hidden pl-10"
            style={{ maxWidth: (CAROUSEL_SIZE.width * 1.55) + 40 }}
            ref={containerRef}
        >
            <div
                className="flex items-end gap-28 transition-[transform] ease-in-out duration-500"
                style={{ transform: `translateX(-${steps[currentIndex]}px)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className={cx("relative", currentIndex !== index ? "opacity-50" : "opacity-100")} style={CAROUSEL_SIZE}>
                        <Image
                            src={item.image}
                            alt=""
                            width={CAROUSEL_SIZE.width}
                            height={CAROUSEL_SIZE.height}
                            className="max-w-none"
                        />
                        {!!item.icons?.[0] && (
                            <div
                                className="animate-float flex items-center justify-center absolute w-20 h-20 bg-primary-100 rounded-lg top-20 -left-10"
                                style={{ animationDuration: `${Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY}s` }}
                            >
                                <Icon
                                    name={item.icons[0]}
                                    size="lg"
                                    className="fill-primary-500"
                                />
                            </div>
                        )}
                        {!!item.icons?.[1] && (
                            <div
                                className="animate-float animate flex items-center justify-center absolute w-20 h-20 bg-primary-100 rounded-lg top-80 -right-10"
                                style={{ animationDuration: `${Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY}s` }}
                            >
                                <Icon
                                    name={item.icons[1]}
                                    size="lg"
                                    className="fill-primary-500"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};