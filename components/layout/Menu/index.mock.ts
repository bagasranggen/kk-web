import { MenuProps } from '@/components/layout/Menu';
import { createArrayFromNumber } from '@/libs/factories';

export const LIST_MENU: MenuProps['items'] = createArrayFromNumber(4).map((_, i) => ({
    href: '#',
    target: i % 2 === 0 ? '_blank' : undefined,
    children: 'Menu ' + (i + 1),
}));
