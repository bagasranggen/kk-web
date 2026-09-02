import React from 'react';
import CbContainer, { CbContainerProps } from '@/components/common/ContentBlocks/CbContainer';
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

export type CbColumnProps = {
    items?: { children: React.ReactNode }[];
    // variant?: 'slim' | '2/3' | '3/2';
    variant?: (typeof COLUMNS_VARIANT_HANDLES)[keyof typeof COLUMNS_VARIANT_HANDLES];
} & Pick<CbContainerProps, 'isNested'>;
// (typeof ANIMATION_VARIANTS)[keyof typeof ANIMATION_VARIANTS],

const CbColumn = ({ items, variant, isNested }: CbColumnProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    let columnJustifyClass = undefined;
    if (variant === 'slim') columnJustifyClass = 'justify-center';
    if (variant === '2/3' || variant === '3/2') columnJustifyClass = 'justify-between';

    return (
        <CbContainer
            hasContainer
            isNested={isNested}
            className="cb cb--columns">
            <Columns
                className={columnJustifyClass}
                gutterY={3}>
                {items.map((item, i) => {
                    if (!item?.children) return null;

                    let columnProps = {};
                    if (variant && COLUMNS_COLUMN_HANDLE?.[variant]?.[i])
                        columnProps = COLUMNS_COLUMN_HANDLE[variant][i];

                    return (
                        <Columns.Column
                            key={i}
                            {...columnProps}
                            // md={9}
                        >
                            {item.children}
                        </Columns.Column>
                    );
                })}
            </Columns>
        </CbContainer>
    );
};

export default CbColumn;
