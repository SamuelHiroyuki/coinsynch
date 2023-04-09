import { ComponentProps } from "react";
import { cva, VariantProps, cx } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { Icon, Icons } from "./Icon";

const styles = cva("px-6 label flex items-center justify-center gap-2", {
    variants: {
        intent: {
            primary: "",
            tertiary: "",
        },
        size: {
            sm: "py-2 label",
            md: "py-[12px] text-base leading-6 tracking-normal",
        },
        variant: {
            text: "bg-transparent",
            contained: "text-white rounded-3xl",
        }
    },
    compoundVariants: [
        { variant: "text", intent: "primary", class: "text-primary-500" },
        { variant: "text", intent: "tertiary", class: "text-tertiary-700" },
        { variant: "contained", intent: "primary", class: "bg-primary-500" },
        { variant: "contained", intent: "tertiary", class: "bg-tertiary-700" },
    ],
    defaultVariants: {
        variant: "contained",
        intent: "primary",
        size: "md"
    }
})

const iconStyles = cva("", {
    variants: {
        intent: {
            primary: "",
            tertiary: "",
        },
        variant: {
            text: "",
            contained: "fill-white",
        },
    },
    compoundVariants: [
        { variant: "text", intent: "primary", class: "fill-primary-500" },
        { variant: "text", intent: "tertiary", class: "fill-tertiary-700" },
    ],
    defaultVariants: {
        variant: "contained",
        intent: "primary",
    }
})

type ButtonOrLinkProps = ComponentProps<'button'> & Partial<LinkProps>;

interface Props extends ButtonOrLinkProps, VariantProps<typeof styles> {
    prefix?: Icons
    suffix?: Icons
}

export function Button({
    intent,
    variant,
    size,
    href,
    className,
    prefix,
    suffix,
    children,
    ...props
}: Props) {
    const classes = cx(styles({ variant, intent, size }), className)

    const content = (
        <>
            {!!prefix && <Icon size="xs" className={iconStyles({ intent, variant })} name={prefix} />}
            {children}
            {!!suffix && <Icon size="xs" className={iconStyles({ intent, variant })} name={suffix} />}
        </>
    )

    return !!href ?
        <Link className={classes} href={href} {...props as Omit<LinkProps, "href">}>{content}</Link>
        :
        <button className={classes} {...props}>{content}</button>
}