import { cva, VariantProps, cx } from "class-variance-authority";
import NextLink, { LinkProps } from "next/link";

const styles = cva("label text-base")

interface Props extends LinkProps, VariantProps<typeof styles> {
    children?: React.ReactNode
    className?: string
}

export function Link({ className, ...props }: Props) {
    return (
        <NextLink className={cx(styles(), className)} {...props} />
    )
}