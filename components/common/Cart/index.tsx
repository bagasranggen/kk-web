import React from 'react';

import CartItem, { CartItemProps } from '@/components/common/Cart/CartItem';

export type CartProps = {
    items?: Omit<CartItemProps, 'withQuantity' | 'onRemove' | 'onSubmit'>[];
} & Pick<CartItemProps, 'withQuantity' | 'onRemove' | 'onSubmit'>;

const Cart = ({ items, withQuantity = true, onSubmit, onRemove }: CartProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <>
            {items.map((item, i) => {
                return (
                    <CartItem
                        key={item?.cartItemId ?? i}
                        withQuantity={withQuantity}
                        onRemove={onRemove}
                        onSubmit={onSubmit}
                        {...item}
                    />
                );
            })}
        </>
    );
};

export default Cart;
