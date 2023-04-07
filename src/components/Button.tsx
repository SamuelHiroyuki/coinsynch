import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";

const styles = cva("rounded-3xl py-2 px-4 text-white label", {
    variants: {
        intent: {
            primary: "bg-primary-500",
            tertiary: "bg-tertiary-700",
        }
    }
})

type ButtonOrLinkProps = ComponentProps<'button'> & LinkProps;

interface Props extends ButtonOrLinkProps, VariantProps<typeof styles> { }

export function Button({ intent, href, ...props }: Props) {
    return Boolean(href) ?
        <Link className={styles({ intent })} href={href} {...props as Omit<LinkProps, "href">} />
        :
        <button className={styles({ intent })} {...props} />
}