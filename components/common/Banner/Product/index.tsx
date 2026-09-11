import React from 'react';

import { createPicsumImage, createPictureItem } from '@/libs/factories';

import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';
import ProductForm, { ProductFormProps, ProductFormFields } from '@/components/common/Banner/Product/ProductForm';
import Picture from '@/components/common/Picture';

export type ProductProps = {
    title?: string;
    description?: React.ReactNode;
} & Pick<ProductFormProps, 'colors' | 'sizes' | 'sizesGuideOnClick' | 'price' | 'priceLabel' | 'onSubmit'>;

const Product = ({
    sizes,
    colors,
    title,
    description,
    price,
    priceLabel,
    onSubmit,
}: ProductProps): React.ReactElement => {
    return (
        <Columns className="banner banner--product">
            <Columns.Column lg={6}>
                <Picture items={[createPictureItem({ item: createPicsumImage({ width: 1200, height: 1600 }) })]} />
            </Columns.Column>

            <Columns.Column
                lg={5}
                className="lg:pt-6">
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
