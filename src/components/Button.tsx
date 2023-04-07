import { ComponentProps } from "react";
import { cva, VariantProps, cx } from "class-variance-authority";
import Link, { LinkProps } from "next/link";

const styles = cva("rounded-3xl py-2 px-4 text-white label", {
    variants: {
        intent: {
            primary: "bg-primary-500",
            tertiary: "bg-tertiary-700",
        }
    },
    defaultVariants: {
        intent: "primary"
    }
})

type ButtonOrLinkProps = ComponentProps<'button'> & LinkProps;

interface Props extends ButtonOrLinkProps, VariantProps<typeof styles> { }

export function Button({ intent, href, className, ...props }: Props) {
    return Boolean(href) ?
        <Link className={cx(styles({ intent }), className)} href={href} {...props as Omit<LinkProps, "href">} />
        :
        <button className={cx(styles({ intent }), className)} {...props} />
}