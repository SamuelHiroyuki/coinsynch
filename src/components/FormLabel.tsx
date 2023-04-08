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

interface Props extends ComponentProps<'fieldset'> {
    label: string
    twColor?: string
}

export function FormLabel({ label, children, className, twColor = "", ...props }: Props) {
    return (
        <fieldset className={cx("flex flex-col", className)} {...props}>
            <legend className={cx("label mb-2", twColor)}>{label}</legend>
            {children}
        </fieldset>
    )
}