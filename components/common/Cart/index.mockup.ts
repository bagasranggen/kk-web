import { createArrayFromNumber, createPicsumImage, createPictureItem } from '@/libs/factories';

import { CartProps } from '@/components/common/Cart';

export const CART_ITEMS: CartProps['items'] = createArrayFromNumber(6).map((_, i) => {
    const isOdd = i % 2 === 0;

    const details: NonNullable<CartProps['items']>[number]['details'] = ['Size: M'];
    if (isOdd) details.push('Color: Black');

    let price: NonNullable<CartProps['items']>[number]['price'] = 'IDR 2,500,000';
    if (isOdd) price = 'IDR 125,000';

    return {
        media: [
            createPictureItem({
                item: createPicsumImage({
                    id: 239 + i,
                    width: 200,
                    height: 266,
                }),
            }),
        ],
        details,
        price,
        qty: 99 + i,
    };
});
