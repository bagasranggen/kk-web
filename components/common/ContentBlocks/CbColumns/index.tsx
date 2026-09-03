import React from 'react';

import { ContentBlocksComponentProps } from '@/libs/@types';

import { CB_HANDLES } from '@/components/common/ContentBlocks/handles';
import CbContainer from '@/components/common/ContentBlocks/CbContainer';
import ContentBlocks, { ContentBlocksProps } from '@/components/common/ContentBlocks';
import Columns, { ColumnProps } from '@/components/common/Columns';

const COLUMNS_VARIANT_HANDLES = {
    VARIANT_SLIM: 'slim',
    VARIANT_2_3: '2/3',
    VARIANT_3_2: '3/2',
} as const;

const COLUMNS_COLUMN_HANDLE: Partial<
    Record<
        (typeof COLUMNS_VARIANT_HANDLES)[keyof typeof COLUMNS_VARIANT_HANDLES],
        Pick<ColumnProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'>[]
    >
> = {
    [COLUMNS_VARIANT_HANDLES.VARIANT_SLIM]: [{ md: 10, lg: 9 }],
    [COLUMNS_VARIANT_HANDLES.VARIANT_2_3]: [{ lg: 5 }, { lg: 6 }],
    [COLUMNS_VARIANT_HANDLES.VARIANT_3_2]: [{ lg: 6 }, { lg: 5 }],
};

export type CbColumnsItemProps = { typeHandle: 'column'; items?: ContentBlocksProps['items'] };

export type CbColumnsProps = ContentBlocksComponentProps<
    typeof CB_HANDLES.COLUMNS,
    {
        items?: CbColumnsItemProps[];
        variant?: (typeof COLUMNS_VARIANT_HANDLES)[keyof typeof COLUMNS_VARIANT_HANDLES];
    }
>;

const CbColumns = ({ items, variant, isNested, className }: CbColumnsProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    let columnJustifyClass = undefined;
    if (variant === 'slim') columnJustifyClass = 'justify-center';
    if (variant === '2/3' || variant === '3/2') columnJustifyClass = 'justify-between';

    return (
        <CbContainer
            hasContainer
            isNested={isNested}
            className="cb cb--columns"
            spacing={className}>
            <Columns
                className={columnJustifyClass}
                gutterY={3}>
                {items.map((item, i) => {
                    let columnProps = {};
                    if (variant && COLUMNS_COLUMN_HANDLE?.[variant]?.[i]) {
                        columnProps = COLUMNS_COLUMN_HANDLE[variant][i];
                    }

                    return (
                        <Columns.Column
                            key={i}
                            {...columnProps}>
                            <ContentBlocks
                                isNested
                                items={item?.items ?? []}
                            />
                        </Columns.Column>
                    );
                })}
            </Columns>
        </CbContainer>
    );
};

export default CbColumns;
