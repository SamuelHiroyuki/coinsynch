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

interface Props extends ComponentProps<'input'> {
    label?: string
    helperText?: string
}

export function Input({ label, helperText, className, ...props }: Props) {
    return (
        <div>
            <input
                className="p-4 rounded-md outline-primary-500 w-full"
                type="text"
                {...props}
            />
            <div className="h-6 flex items-end">
                {!!helperText && <small className="text-quartenary-500 mt-auto">{helperText}</small>}
            </div>
        </div>
    )
}