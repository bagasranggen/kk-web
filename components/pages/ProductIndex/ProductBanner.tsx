'use client';

import React from 'react';

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
    return (
        <Banner.Product
            title={title}
            description={description}
            colors={colors}
            sizes={sizes}
            price={price}
            priceLabel={priceLabel}
            media={media}

            onSubmit={() => {
                console.log('test');
            }}
        />
    );
};

export default ProductBanner;
