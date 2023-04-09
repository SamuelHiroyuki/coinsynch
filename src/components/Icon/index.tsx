import { SVGProps } from "react";
import { cva, VariantProps, cx } from "class-variance-authority";
import icons from "./icons";

export type Icons = keyof typeof icons

const sizes = {
    xs: { width: 12, height: 12 },
    sm: { width: 16, height: 16 },
    md: { width: 32, height: 32 },
    lg: { width: 64, height: 64 },
}

interface Props extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
    name: Icons
    size: keyof typeof sizes
}

export function Icon({ name, size, className, ...props }: Props) {
    const Svg = icons[name];

    return <Svg className={className} {...sizes[size]} {...props} />
}
