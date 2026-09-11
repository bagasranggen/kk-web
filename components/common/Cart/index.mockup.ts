import { createArrayFromNumber, createPicsumImage, createPictureItem } from '@/libs/factories';

import { CartProps } from '@/components/common/Cart';

export const CART_ITEMS: CartProps['items'] = createArrayFromNumber(6).map((_, i) => {
    const isOdd = i % 2 === 0;

    const details: NonNullable<CartProps['items']>[number]['details'] = ['Size: M'];
    if (isOdd) details.push('Color: Black');

    let price: NonNullable<CartProps['items']>[number]['price'] = 2500000;
    if (isOdd) price = 125000;

    let priceLabel: NonNullable<CartProps['items']>[number]['priceLabel'] = 'IDR 2,500,000';
    if (isOdd) priceLabel = 'IDR 125,000';

    return {
        cartItemId: new Date().getTime(),
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
        priceLabel,
        qty: 1 + i,
        stock: 5,
    };
});
