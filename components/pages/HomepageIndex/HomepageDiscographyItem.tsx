import React from 'react';

import { cn } from 'cn';

import Columns, { BaseProps as BaseColumnsProps } from '@/components/common/Columns';
import Picture, { BaseProps } from '@/components/common/Picture';
import Heading, { BaseProps as BaseHeadingProps } from '@/components/common/Heading';
import List, { BaseProps as BaseListProps, SocialMediaProps } from '@/components/common/List';

export type HomepageDiscographyItemProps = {
    size?: 'md' | 'lg';
    media?: BaseProps['items'];
    social?: SocialMediaProps['items'];
    title?: BaseHeadingProps['children'];
    date?: React.ReactNode;
    playlist?: BaseListProps['items'];
};

const HomepageDiscographyItem = ({
    size = 'md',
    media,
    social,
    title,
    date,
    playlist,
}: HomepageDiscographyItemProps): React.ReactElement => {
    const isLarge = size === 'lg';

    const discographyClass = cn(
        'discography',
        size === 'md' ? 'discography--md' : undefined,
        isLarge ? 'discography--lg' : undefined
    );

    const discographySocial = cn('discography__social', isLarge ? 'mt-2' : 'mt-1');

    let gutterX: BaseColumnsProps['gutterX'] = undefined;
    if (!isLarge) {
        gutterX = Object.assign(gutterX ?? {}, {
            md: 1,
            lg: 3,
        } as BaseColumnsProps['gutterX']);
    }

    return (
        <Columns
            className={discographyClass}
            gutterX={gutterX}>
            {media && media.length > 0 && (
                <Columns.Column md={6}>
                    <Picture items={media} />
                </Columns.Column>
            )}

            <Columns.Column
                md={6}
                lg={isLarge ? 4 : 6}
                offset={{
                    lg: isLarge ? 1 : undefined,
                }}
                className="pt-2">
                {date && <small className="discography__date">{date}</small>}

                {title && (
                    <Heading
                        as="h3"
                        family="bodoni-moda"
                        className="discography__title">
                        {title}
                    </Heading>
                )}

                {isLarge && playlist && playlist.length > 0 && (
                    <List
                        as="ol"
                        className="mt-2 discography__list"
                        items={playlist}
                    />
                )}

                {social && social.length > 0 && (
                    <List.SocialMedia
                        className={discographySocial}
                        size={isLarge ? 'md' : 'sm'}
                        items={social}
                    />
                )}
            </Columns.Column>
        </Columns>
    );
};

export default HomepageDiscographyItem;
