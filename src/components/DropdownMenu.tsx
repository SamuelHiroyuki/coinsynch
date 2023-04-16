import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { Icon } from './Icon';

interface Props {
    children: React.ReactNode
    options: React.ReactNode
}

export const Item = RadixDropdownMenu.Item

const DropdownMenu = ({ children, options }: Props) => {
    return (
        <RadixDropdownMenu.Root>
            <RadixDropdownMenu.Trigger asChild>
                {children}
            </RadixDropdownMenu.Trigger>

            <RadixDropdownMenu.Portal>
                <RadixDropdownMenu.Content
                    className="dropsown--menu__content bg-white p-4 rounded shadow-menu"
                    sideOffset={5}
                    side='bottom'
                    align='end'
                >
                    {options}

                    <RadixDropdownMenu.Arrow height={10} width={20} className="fill-white" />
                </RadixDropdownMenu.Content>
            </RadixDropdownMenu.Portal>
        </RadixDropdownMenu.Root>
    );
};

export default DropdownMenu;