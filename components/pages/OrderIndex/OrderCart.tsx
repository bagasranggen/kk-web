'use client';

import React from 'react';

import { useCartStateContext } from '@/store/context';

import Cart from '@/components/common/Cart';
import Heading from '@/components/common/Heading';

export type OrderCartProps = {};

const OrderCart = ({}: OrderCartProps): React.ReactElement => {
    const { items } = useCartStateContext();

    if (!items || items.length === 0) {
        return <Heading className="text-center">No items in cart yet</Heading>;
    }

    return (
        <Cart
            withQuantity={false}
            items={items}
        />
    );
};

export default OrderCart;
