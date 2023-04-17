import Image, { ImageProps } from "next/image";

export type IconName =
    "arrow-right" |
    "bitcoin" |
    "close" |
    "crypto" |
    "increase-chart" |
    "laptop-mobile" |
    "legal-scale" |
    "plus" |
    "arrow-down" |
    "user" |
    "lock" |
    "email" |
    "eye" |
    "h-menu" |
    "exchange" |
    "eye-not" |
    "loading" |
    "minus" |
    "door-out" |
    "arrow-up" |
    "arrow-back" |
    "wallet"

interface Props extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
    name: IconName
}

export function Icon({ name, ...props }: Props) {
    return (
        <Image
            {...props}
            width={0}
            height={0}
            src={`/icons/${name}.svg`}
            alt={name}
        />
    )
}
