import { ProductProps } from '@/components/common/Banner';
import parse from 'html-react-parser';
import { ProductFormFields } from '@/components/common/Banner/Product/ProductForm';
import { createArrayFromNumber } from '@/libs/factories';

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

export const SUBMIT_PRODUCT: ProductFormFields = {
    title: 'Korekayu Logo',
    price: 200000,
    qty: 1,
    cartItemId: 1789054379115,
    stock: 0,
    color: 'red',
    size: 's',
};

export const SUBMIT_PRODUCT_ITEMS: ProductFormFields[] = createArrayFromNumber(3).map((_, i) => {
    const isOdd = i % 2 === 0;

    return {
        cartItemId: new Date().getTime() + i,
        title: 'Korekayu Logo',
        price: 200000 * i,
        qty: 1,
        stock: 5,
        ...(i !== 0 && isOdd ? { color: 'red' } : { color: undefined }),
        ...(i !== 0 ? { size: 's' } : { size: undefined }),
    };
});
