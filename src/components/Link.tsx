import { cx } from "class-variance-authority";
import NextLink, { LinkProps } from "next/link";

interface Props extends LinkProps {
    children?: React.ReactNode
    className?: string
}

export function Link({ className, ...props }: Props) {
    return (
        <NextLink className={cx("label", className)} {...props} />
    )
}