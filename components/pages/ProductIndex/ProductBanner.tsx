'use client';

import React from 'react';

import { useCartStateContext } from '@/store/context';

import Banner, { ProductProps } from '@/components/common/Banner';

export type ProductBannerProps = Pick<
    ProductProps,
    'title' | 'description' | 'colors' | 'sizes' | 'price' | 'priceLabel' | 'media'
>;

const ProductBanner = ({
    title,
    description,
    colors,
    sizes,
    price,
    priceLabel,
    media,
}: ProductBannerProps): React.ReactElement => {
    const { setIsOpen, addCartItemHandler } = useCartStateContext();

    return (
        <Banner.Product
            title={title}
            description={description}
            colors={colors}
            sizes={sizes}
            price={price}
            priceLabel={priceLabel}
            media={media}
            onSubmit={(data) => {
                addCartItemHandler({
                    ...data,
                    cartItemId: new Date().getTime().toString(),
                });
                setIsOpen(true);
            }}
        />
    );
};

export default ProductBanner;
