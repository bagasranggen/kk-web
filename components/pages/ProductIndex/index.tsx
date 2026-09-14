import React from 'react';

import { BaseIndexPageProps } from '@/libs/@types';

import Card, { ThumbnailProps } from '@/components/common/Card';
import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';
import Banner, { ProductProps } from '@/components/common/Banner';

export type ProductIndexProps = BaseIndexPageProps<
    'product',
    {
        banner?: Pick<
            ProductProps,
            'title' | 'description' | 'colors' | 'sizes' | 'price' | 'priceLabel' | 'onSubmit' | 'media'
        >;
        otherProducts?: ThumbnailProps['items'];
    }
>;

const ProductIndex = ({ entries }: ProductIndexProps): React.ReactElement => {
    return (
        <>
            {entries?.banner && (
                <Container>
                    <Banner.Product {...entries?.banner} />
                </Container>
            )}

            {entries?.otherProducts && entries.otherProducts.length > 0 && (
                <Container
                    as="section"
                    className="mt-10 lg:mt-15">
                    <Heading className="uppercase text-[2rem] md:text-[3rem] font-extrabold tracking-0.2 text-center mb-3">
                        You Might interest On
                    </Heading>

                    <Card.Thumbnail
                        className="justify-center"
                        columns={{
                            gutterX: 1,
                            gutterY: {
                                xs: 2,
                                md: 4,
                            },
                        }}
                        column={{
                            xs: 6,
                            md: 4,
                            // md: 3,
                            lg: 3,
                        }}
                        items={entries.otherProducts}
                    />
                </Container>
            )}
        </>
    );
};

export default ProductIndex;
