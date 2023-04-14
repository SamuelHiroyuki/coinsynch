"use client"

import { ComponentProps } from "react";
import { cva, VariantProps, cx } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { Icon, IconName } from "./Icon";

const styles = cva("px-6 label flex items-center justify-center gap-2 transition-colors", {
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
        },
        disabled: {
            true: "bg-secondary-500/50",
        },
        loading: {
            true: "bg-secondary-500/50",
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

interface Props extends ButtonOrLinkProps, Omit<VariantProps<typeof styles>, "loading" | "disabled"> {
    prefix?: IconName
    suffix?: IconName
    iconClassname?: string
    isLoading?: boolean
}

const Button = ({
    intent,
    variant,
    size,
    href,
    className,
    disabled,
    prefix,
    suffix,
    iconClassname = "w-3 h-3",
    isLoading = false,
    children,
    ...props
}: Props) => {
    const classes = styles({ variant, intent, size, className, disabled, loading: isLoading })

    const content = isLoading ?
        <Icon
            className={cx(
                iconStyles({ intent, variant, className: iconClassname }),
                "animate-spin w-5 h-5"
            )}
            name="loading"
        />
        :
        (
            <>
                {!!prefix && <Icon className={iconStyles({ intent, variant, className: iconClassname })} name={prefix} />}
                {children}
                {!!suffix && <Icon className={iconStyles({ intent, variant, className: iconClassname })} name={suffix} />}
            </>
        )

    return !!href ?
        <Link
            className={classes}
            href={href}
            {...props as Omit<LinkProps, "href">}
        >
            {content}
        </Link>
        :
        <button
            disabled={disabled || isLoading}
            className={classes}
            {...props}
        >
            {content}
        </button>
}

export default Button