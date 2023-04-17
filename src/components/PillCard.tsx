import { ComponentProps } from "react";
import { cx } from "class-variance-authority";

interface Props extends ComponentProps<'div'> {
    left: React.ReactNode
    right: React.ReactNode
}

export function PillCard({ left, right, className }: Props) {
    return (
        <div className={cx("flex rounded-lg bg-white h-28 shadow-card overflow-hidden", className)}>
            {left}
            {right}
        </div>
    )
}



{/* <div className="flex items-center justify-center">
</div>
<div className="flex-1 flex">
</div> */}