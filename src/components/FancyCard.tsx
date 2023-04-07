import { ComponentProps } from "react";
import { cx } from "class-variance-authority";
import Image from "next/image";

interface Props extends ComponentProps<'div'> {
    iconName?: string
    title: string
    subtitle: string
    text: string
}

export function FancyCard({ iconName, title, subtitle, text, className, ...props }: Props) {
    return (
        <div
            className={cx(
                "p-6 flex flex-col gap-4 bg-white rounded-md w-[280px] h-[268px] shadow-fancy",
                className
            )}
            {...props}
        >
            {!!iconName && (
                <Image
                    src={`/${iconName}.svg`}
                    alt={iconName}
                    width={64}
                    height={64}
                />
            )}

            <div className="flex-1">
                <p className="text-primary-500 font-bold mb-1">{title}</p>
                <h4 className="font-bold">{subtitle}</h4>
                <p className={cx(
                    "label-paragraph mt-2",
                    !!iconName ? "line-clamp-3" : "line-clamp-6"
                )}>
                    {text}
                </p>
            </div>
        </div>
    )
}