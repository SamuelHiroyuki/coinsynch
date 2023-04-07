import { ComponentProps } from "react";
import { cx } from "class-variance-authority";

const defaultStyles = cx(
    "container grid",
    "xl:grid-cols-12 xl:gap-8",
    "md:grid-cols-8 md:gap-8",
    "max-sm:grid-cols-4 max-sm:gap-4 sm:grid-cols-4 sm:gap-4 max-sm:px-6",
)

export function Container({ className, ...props }: ComponentProps<"section">) {
    return <section className={cx(defaultStyles, className)} {...props} />
}