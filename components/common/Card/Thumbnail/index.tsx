import React, { PropsWithChildren } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Columns, { BaseProps, ColumnProps } from '@/components/common/Columns';
import Picture, { BaseProps as BasePictureProps } from '@/components/common/Picture';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import DynamicWrapper from '@/components/common/DynamicWrapper';

export type ThumbnailProps = {
    items?: {
        cta?: Pick<BaseAnchorProps, 'href' | 'target'>;
        media?: BasePictureProps['items'];
        price?: React.ReactNode;
        salePrice?: React.ReactNode;
        title?: React.ReactNode;
        label?: React.ReactNode;
    }[];
    variant?: 'grid' | 'space';
    columns?: Pick<BaseProps, 'gutterX' | 'gutterY'>;
    column?: Pick<ColumnProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'>;
    extra?: ClassnameProps & PropsWithChildren & Pick<ThumbnailProps, 'column'>;
} & Pick<BaseProps, 'ref' | 'className'>;

const Thumbnail = ({
    ref,
    className,
    items,
    variant = 'space',
    columns = { gutterX: { md: 1 }, gutterY: { md: 2 } },
    column = { md: 3 },
    extra,
}: ThumbnailProps): React.ReactElement | null => {
    let cardClass: ArrayStringProps = ['card card--thumbnail'];
    if (variant === 'grid') cardClass.push('card--grid');
    if (variant === 'space') cardClass.push('card--space');
    if (className) cardClass.push(className);
    cardClass = joinArrayString(cardClass);

    if (!items || items.length === 0) return null;

    return (
        <Columns
            {...columns}
            ref={ref}
            className={cardClass}>
            {items.map((item: NonNullable<ThumbnailProps['items']>[number], i: number) => {
                if (!item?.cta?.href) return null;

                return (
                    <Columns.Column
                        key={i}
                        {...column}
                        className="card__item">
                        <Button
                            as="anchor"
                            className="card__btn"
                            {...item.cta}>
                            <DynamicWrapper
                                as={variant === 'grid' ? 'div' : undefined}
                                className="card__wrapper">
                                {item?.label && <div className="card__label">{item.label}</div>}

                                {item?.media && item.media.length > 0 && <Picture items={item.media} />}

                                {(item?.price || item?.title) && (
                                    <div className="mt-1">
                                        {item?.salePrice && (
                                            <s className="card__price card__price--regular">{item.salePrice}</s>
                                        )}
                                        {item?.price && <p className="card__price">{item.price}</p>}
                                        {item?.title && <p className="card__title">{item.title}</p>}
                                    </div>
                                )}
                            </DynamicWrapper>
                        </Button>
                    </Columns.Column>
                );
            })}

            {extra?.children && (
                <Columns.Column
                    {...column}
                    {...extra?.column}
                    className={extra?.className}>
                    {extra.children}
                </Columns.Column>
            )}
        </Columns>
    );
};

export default Thumbnail;
