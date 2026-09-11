import React, { PropsWithChildren } from 'react';

import { Trash } from 'lucide-react';

import Picture, { BaseProps } from '@/components/common/Picture';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import Quantity, { QuantityProps } from '@/components/common/Quantity';

export type CartProps = {
    quantity?: {
        increment?: NonNullable<QuantityProps['increment']>['onClick'];
        decrement?: NonNullable<QuantityProps['decrement']>['onClick'];
    };
    withQuantity?: boolean;
    items?: {
        cartItemId: number;
        media?: BaseProps['items'];
        details?: PropsWithChildren['children'][];
        title?: BaseProps['children'];
        price?: number;
        priceLabel?: PropsWithChildren['children'];
        qty?: number;
        stock?: number;
    }[];
};

const Cart = ({ items, withQuantity = true, quantity }: CartProps): React.ReactElement | null => {
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
                            {item?.title && <Heading className="cart__title">{item.title}</Heading>}

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
                                {withQuantity && (
                                    <div className="cart__quantity">
                                        <Quantity
                                            increment={{
                                                disabled: !!(item?.stock && item?.qty && item.qty >= item.stock),
                                                onClick: quantity?.increment,
                                            }}
                                            decrement={{
                                                disabled: !!(item?.qty && item.qty === 1),
                                                onClick: quantity?.decrement,
                                            }}
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
                                )}

                                {item?.priceLabel && <p className="cart__price">{item.priceLabel}</p>}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Cart;
