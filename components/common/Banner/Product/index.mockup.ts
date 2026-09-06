import { ProductProps } from '@/components/common/Banner';
import parse from 'html-react-parser';

export const PRODUCT_DESCRIPTION: ProductProps['description'] = parse(`
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis cupiditate
        doloremque, ducimus esse excepturi explicabo incidunt itaque libero minima odit provident rem,
        reprehenderit saepe, ullam vel voluptates.
    </p>
    <p>
        Accusantium assumenda culpa nam nulla pariatur placeat quidem quisquam repudiandae, sint sit
        totam!
    </p>
`);

export const PRODUCT_COLORS_ITEMS: ProductProps['colors'] = [
    { color: '#ff2056', value: 'red', label: 'Red', checked: true },
    // { color: '#ff2056', value: 'red', label: 'Red' },
    { color: '#000', value: 'black', label: 'Black' },
];

export const PRODUCT_SIZES_ITEMS: ProductProps['sizes'] = [
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S' },
];
