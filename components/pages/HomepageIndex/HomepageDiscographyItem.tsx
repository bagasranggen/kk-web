import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { createPicsumImage, createPictureItem } from '@/libs/factories';

import Columns from '@/components/common/Columns';
import Picture from '@/components/common/Picture';
import Heading from '@/components/common/Heading';
import List from '@/components/common/List';

import { LIST_SOCIAL_MEDIA } from '@/components/common/List/SocialMedia/index.mock';

export type HomepageDiscographyItemProps = {
    size?: 'md' | 'lg';
};

const HomepageDiscographyItem = ({ size = 'md' }: HomepageDiscographyItemProps): React.ReactElement => {
    const isLarge = size === 'lg';

    let discographyClass: ArrayStringProps = ['discography'];
    if (size === 'md') discographyClass.push('discography--md');
    if (isLarge) discographyClass.push('discography--lg');
    discographyClass = joinArrayString(discographyClass);

    return (
        <Columns className={discographyClass}>
            <Columns.Column md={6}>
                <Picture items={[createPictureItem({ item: createPicsumImage({ width: 1000, height: 1000 }) })]} />
            </Columns.Column>

            <Columns.Column
                md={6}
                lg={isLarge ? 4 : 6}
                offset={{
                    lg: isLarge ? 1 : undefined,
                }}
                className="pt-2">
                <p className="discography__date">2026.7.4</p>

                <Heading
                    as="h3"
                    family="bodoni-moda"
                    className="discography__title">
                    Verhaal
                </Heading>

                {isLarge && (
                    <List
                        as="ol"
                        className="mt-2 discography__list"
                        items={[
                            {
                                children: 'Lala lalala',
                            },
                            {
                                children: 'Lala lalala',
                            },
                            {
                                children: 'Lala lalala',
                            },
                            {
                                children: 'Lala lalala',
                            },
                        ]}
                    />
                )}

                <List.SocialMedia
                    className={isLarge ? 'mt-2' : 'mt-1'}
                    size={isLarge ? 'md' : 'sm'}
                    items={LIST_SOCIAL_MEDIA}
                />
            </Columns.Column>
        </Columns>
    );
};

export default HomepageDiscographyItem;
