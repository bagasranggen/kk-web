import React, { PropsWithChildren } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { createPicsumImage } from '@/libs/factories';

import Columns, { BaseProps, ColumnProps } from '@/components/common/Columns';
import Picture from '@/components/common/Picture';
import Button from '@/components/common/Button';

export type ThumbnailProps = {
    items?: {}[];
    columns?: Pick<BaseProps, 'gutterX' | 'gutterY'>;
    column?: Pick<ColumnProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'>;
    extra?: ClassnameProps & PropsWithChildren & Pick<ThumbnailProps, 'column'>;
} & Pick<BaseProps, 'ref' | 'className'>;

const Thumbnail = ({
    ref,
    className,
    items,
    columns = { gutterX: { md: 1 }, gutterY: { md: 2 } },
    column = { md: 3 },
    extra,
}: ThumbnailProps): React.ReactElement | null => {
    let cardClass: ArrayStringProps = ['card card--thumbnail'];
    if (className) cardClass.push(className);
    cardClass = joinArrayString(cardClass);

    if (!items || items.length === 0) return null;

    return (
        <Columns
            {...columns}
            ref={ref}
            className={cardClass}>
            {items.map((item: NonNullable<ThumbnailProps['items']>[number], i: number) => {
                return (
                    <Columns.Column
                        key={i}
                        {...column}>
                        <Button
                            as="anchor"
                            href="#">
                            <Picture items={[createPicsumImage({ width: 800, height: 1151 })]} />

                            <div className="mt-1">
                                <p className="card__price">IDR 200,000</p>
                                <p className="card__title">Korekayu Logo</p>
                            </div>
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
