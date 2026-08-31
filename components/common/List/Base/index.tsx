import React from 'react';

import { BaseComponentProps, ElementTagsProps } from '@/libs/@types';

export type BaseOListProps = {
    as?: Extract<ElementTagsProps, 'ol'>;
} & React.HTMLAttributes<HTMLOListElement>;

export type BaseUListProps = {
    as?: Extract<ElementTagsProps, 'ul'>;
} & React.HTMLAttributes<HTMLUListElement>;

export type BaseProps = {
    items?: React.HTMLAttributes<HTMLLIElement>[];
} & (BaseComponentProps<HTMLOListElement> & (BaseOListProps | BaseUListProps));

const Base = ({ as: List = 'ul', items, ...props }: BaseProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <List {...props}>
            {items.map(({ children, ...itemProps }: NonNullable<BaseProps['items']>[number], i: number) => {
                if (!children) return null;

                return (
                    <li
                        key={i}
                        {...itemProps}>
                        {children}
                    </li>
                );
            })}
        </List>
    );
};

export default Base;
