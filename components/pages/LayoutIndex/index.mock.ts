import { MenuProps } from '@/components/layout/Menu';

export const MENU_ITEMS: MenuProps['items'] = [
    {
        href: '/',
        children: 'Homepage',
    },
    {
        href: '/about',
        children: 'About',
    },
    {
        href: '/merchandise',
        children: 'Merchandise',
    },
];
