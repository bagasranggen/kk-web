import React from 'react';

import Container from '@/components/common/Container';
import Heading from '@/components/common/Heading';
import Card, { ThumbnailProps } from '@/components/common/Card';
import List from '@/components/common/List';
import Button, { BaseAnchorProps } from '@/components/common/Button';

export type ProductListingIndexProps = {
    entries?: {
        categories?: {
            isActive?: boolean;
            cta: Pick<BaseAnchorProps, 'href' | 'target' | 'children'>;
        }[];
        products?: ThumbnailProps['items'];
    };
};

const ProductListingIndex = ({ entries }: ProductListingIndexProps): React.ReactElement => {
    return (
        <>
            <Container>
                <Heading variant="page">Merchandise</Heading>
            </Container>

            {entries?.categories && entries.categories.length > 0 && (
                <div className="border-dark border-b border-t mt-10">
                    <Container>
                        <List
                            className="list list--product-listing"
                            items={entries.categories.map((item) => {
                                return {
                                    className: item?.isActive ? 'active' : undefined,
                                    children: (
                                        <Button
                                            as="anchor"
                                            {...item.cta}
                                        />
                                    ),
                                };
                            })}
                        />
                    </Container>
                </div>
            )}

            <Card.Thumbnail
                variant="grid"
                columns={{ gutterX: 0, gutterY: 0 }}
                column={{ md: 6, lg: 4 }}
                items={entries?.products ?? []}
            />
        </>
    );
};

export default ProductListingIndex;
