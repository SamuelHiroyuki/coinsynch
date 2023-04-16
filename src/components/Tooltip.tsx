import * as RadixTooltip from '@radix-ui/react-tooltip';

interface Props extends RadixTooltip.TooltipContentProps {
    children: React.ReactNode
    label: string
}

const Tooltip = ({ label, children, ...props }: Props) => {
    return (
        <RadixTooltip.Provider delayDuration={300}>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger>
                    {children}
                </RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content className="label py-2 px-6 bg-primary-500 text-white rounded-[4px]" {...props}>
                        {label}
                        <RadixTooltip.Arrow className="fill-primary-500" />
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    );
};

export default Tooltip;