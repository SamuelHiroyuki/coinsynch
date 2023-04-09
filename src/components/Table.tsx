import { ComponentProps } from "react";
import { cx } from "class-variance-authority";

interface Props extends ComponentProps<"table"> {
    header: React.ReactNode
    rows: React.ReactNode
}

export function Table({ header, rows, className, ...props }: Props) {
    return (
        <table className={className} {...props}>
            <thead className="after:content-['\200C'] after:leading-[8px] after:block">
                <tr>
                    {header}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}


interface TableHeaderCellProps extends ComponentProps<"th"> {
    width?: string
}

export function TableHeaderCell({ width = "auto", className, ...props }: TableHeaderCellProps) {
    return <th className={cx("label text-left pl-4 font-normal", className)} {...props} style={{ width }} />
}

export function TableRow({ className, ...props }: ComponentProps<"tr">) {
    return <tr className={cx("odd:bg-white even:bg-secondary-100", className)} {...props} />
}

export function TableCell({ className, ...props }: ComponentProps<"td">) {
    return <td className={cx("p-4 text-base leading-6 tracking-normal text-default", className)} {...props} />
}