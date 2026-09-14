import React from 'react';

import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';
import ProductForm, { ProductFormProps, ProductFormFields } from '@/components/common/Banner/Product/ProductForm';
import ProductMedia, { ProductMediaProps } from '@/components/common/Banner/Product/ProductMedia';

export type ProductProps = {
    title?: string;
    description?: React.ReactNode;
    media?: Pick<ProductMediaProps, 'items' | 'thumbnails'>;
} & Pick<ProductFormProps, 'colors' | 'sizes' | 'sizesGuideOnClick' | 'price' | 'priceLabel' | 'onSubmit'>;

const Product = ({
    sizes,
    colors,
    title,
    media,
    description,
    price,
    priceLabel,
    onSubmit,
}: ProductProps): React.ReactElement => {
    return (
        <Columns
            gutterY={3}
            className="banner banner--product">
            <Columns.Column
                // md={6}
                lg={6}
                className="max-md:px-0">
                {media && <ProductMedia {...media} />}
            </Columns.Column>

            <Columns.Column
                // md={6}
                lg={6}
                xl={5}
                className="lg:pt-3 xl:pt-6">
                <Heading
                    as="h1"
                    family="bodoni-moda"
                    className="uppercase text-[4rem] tracking-0.3">
                    {title}
                </Heading>

                {description && <div className="mt-1">{description}</div>}

                <ProductForm
                    title={title}
                    colors={colors}
                    sizes={sizes}
                    price={price}
                    priceLabel={priceLabel}
                    onSubmit={onSubmit}
                />
            </Columns.Column>
        </Columns>
    );
};

export default Product;

export type { ProductFormFields };
