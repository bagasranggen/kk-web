import React from 'react';

import { BaseIndexPageProps } from '@/libs/@types';

import Card, { ThumbnailProps } from '@/components/common/Card';
import { CARD_THUMBNAIL_4_ITEMS } from '@/components/common/Card/Thumbnail/index.mock';
import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';

export type ProductIndexProps = BaseIndexPageProps<
    'product',
    {
        otherProducts?: ThumbnailProps['items'];
    }
>;

const ProductIndex = ({ entries }: ProductIndexProps): React.ReactElement => {
    return (
        <>
            {entries?.otherProducts && entries.otherProducts.length > 0 && (
                <Container
                    as="section"
                    className="mt-15">
                    <Heading className="uppercase text-[3rem] font-extrabold tracking-0.2 text-center mb-3">
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
                            md: 4,
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
