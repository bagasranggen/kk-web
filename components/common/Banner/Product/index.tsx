import React from 'react';

import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import ProductLabel, { ProductLabelProps } from '@/components/common/Banner/Product/ProductLabel';

export type ProductProps = {
    sizes?: {
        onClick?: NonNullable<ProductLabelProps['subTitle']>['onClick'];
    };
};

const Product = ({ sizes }: ProductProps): React.ReactElement => {
    return (
        <Columns className="banner banner--product">
            <Columns.Column lg={6}>lorem ipsum dolor sit amet, consetetur</Columns.Column>

            <Columns.Column
                lg={5}
                className="lg:pt-6">
                <Heading
                    as="h1"
                    family="bodoni-moda"
                    className="uppercase text-[4rem] tracking-0.3">
                    Korekayu Logo
                </Heading>

                <div className="mt-1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis cupiditate
                        doloremque, ducimus esse excepturi explicabo incidunt itaque libero minima odit provident rem,
                        reprehenderit saepe, ullam vel voluptates.
                    </p>
                    <p>
                        Accusantium assumenda culpa nam nulla pariatur placeat quidem quisquam repudiandae, sint sit
                        totam!
                    </p>
                </div>

                <ProductLabel
                    title="colors"
                    className="mt-3">
                    asdawd
                </ProductLabel>

                {/*{sizes && (*/}
                <ProductLabel
                    title="sizes"
                    subTitle={{
                        children: 'Size Guide',
                        onClick: sizes?.onClick,
                    }}
                    className="mt-3">
                    asdawd
                </ProductLabel>
                {/*)}*/}

                <Heading
                    as="h2"
                    className="mt-3 banner__price">
                    IDR 200,000
                </Heading>

                <Button.Block
                    as="button"
                    size="lg"
                    color="accent"
                    className="mt-1">
                    Add to Cart
                </Button.Block>
            </Columns.Column>
        </Columns>
    );
};

export default Product;
