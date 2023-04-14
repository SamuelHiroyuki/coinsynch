"use client"

import { ComponentProps, forwardRef, useMemo, useState } from "react";
import { cva, VariantProps, cx } from "class-variance-authority";
import { Icon, IconName } from "./Icon";
import Button from "./Button";

const styles = cva("rounded-md outline-primary-500 w-full border-secondary-300 border", {
    variants: {
        variant: {
            sm: "py-3 px-4",
            md: "p-4",
        },
        errored: {
            true: "outline-quartenary-500 !border-quartenary-500",
        }
    },
    defaultVariants: {
        variant: "md"
    }
})

interface Props extends ComponentProps<'input'>, VariantProps<typeof styles> {
    label?: string
    errorText?: string
    prefix?: IconName
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, Props>(({
    label,
    type = "text",
    prefix,
    errorText,
    variant,
    className,
    ...props
}, ref) => {
    const [isShowingPass, setIsShowingPass] = useState(false)

    const inputType = useMemo(() => {
        if (type === "password") {
            return isShowingPass ? "text" : "password"
        }

        return type
    }, [type, isShowingPass])

    return (
        <div>
            <div className="relative">
                {!!prefix && (
                    <Icon name={prefix} className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" />
                )}
                <input
                    ref={ref}
                    className={cx(styles({ variant, className, errored: !!errorText }),
                        !!prefix ? "pl-10" : "",
                        type === "password" ? "pr-10" : "",
                    )}
                    type={inputType}
                    {...props}
                />
                {type === "password" && (
                    <Button
                        className="absolute right-4 top-1/2 -translate-y-1/2 !p-0"
                        variant="text"
                        suffix={isShowingPass ? "eye-not" : "eye"}
                        iconClassname="w-4 h-4"
                        onClick={() => setIsShowingPass(p => !p)}
                    />
                )}
            </div>

            <div className="h-6 flex items-end">
                {!!errorText && <p className="small-label text-quartenary-500 mt-1 mb-auto">{errorText}</p>}
            </div>
        </div>
    )
})

export default Input