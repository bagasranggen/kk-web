import React, { PropsWithChildren } from 'react';

import { Trash } from 'lucide-react';

import Picture, { BaseProps } from '@/components/common/Picture';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import Quantity from '@/components/common/Quantity';

export type CartProps = {
    items?: {
        media?: BaseProps['items'];
        details?: PropsWithChildren['children'][];
        price?: PropsWithChildren['children'];
        qty?: number;
    }[];
};

const Cart = ({ items }: CartProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <>
            {items.map((item, i) => {
                return (
                    <div
                        className="cart"
                        key={i}>
                        <div className="cart__media">
                            {item?.media && item.media.length > 0 && <Picture items={item.media} />}
                        </div>

                        <div className="cart__content">
                            <Heading className="cart__title ">Korekayu Logo</Heading>

                            {item?.details && item.details.length > 0 && (
                                <>
                                    {item.details.map((itm, idx) => {
                                        return (
                                            <p
                                                key={idx}
                                                className="cart__detail">
                                                {itm}
                                            </p>
                                        );
                                    })}
                                </>
                            )}

                            <div className="cart__price-wrapper">
                                <div className="cart__quantity">
                                    <Quantity
                                        decrement={{ disabled: !!(item?.qty && item.qty === 1) }}
                                        input={{
                                            type: 'number',
                                            min: 1,
                                            defaultValue: item?.qty ?? 0,
                                        }}
                                    />
                                    <Button
                                        as="button"
                                        type="button"
                                        className="cart__delete">
                                        <Trash />
                                    </Button>
                                </div>

                                {item?.price && <p className="cart__price">{item.price}</p>}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Cart;
