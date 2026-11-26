import { MenuProps } from '@/components/layout/Menu';

export const MENU_ITEMS: MenuProps['items'] = [
    {
        href: '/',
        children: 'Home',
    },
    {
        href: '/about',
        children: 'About',
    },
    {
        href: '/schedule',
        children: 'Schedule',
    },
    {
        href: '/merchandise',
        children: 'Merchandise',
    },
];
