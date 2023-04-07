import { ComponentProps } from "react";
import { cva, VariantProps, cx } from "class-variance-authority";
import Link, { LinkProps } from "next/link";

const styles = cva("rounded-3xl text-white label", {
    variants: {
        intent: {
            primary: "bg-primary-500",
            tertiary: "bg-tertiary-700",
        },
        size: {
            sm: "py-2 px-4",
            md: "py-[14px] px-6",
        }
    },
    defaultVariants: {
        intent: "primary",
        size: "md"
    }
})

type ButtonOrLinkProps = ComponentProps<'button'> & Partial<LinkProps>;

interface Props extends ButtonOrLinkProps, VariantProps<typeof styles> { }

export function Button({ intent, size, href, className, ...props }: Props) {
    const classes = cx(styles({ intent, size }), className)

    return !!href ?
        <Link className={classes} href={href} {...props as Omit<LinkProps, "href">} />
        :
        <button className={classes} {...props} />
}