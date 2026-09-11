'use client';

import React, { PropsWithChildren, useState } from 'react';

import { Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'react-use';

import Picture, { BaseProps } from '@/components/common/Picture';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import Quantity from '@/components/common/Quantity';

export const CART_ITEM_FORM_HANDLES = {
    CART_ITEM_ID: 'cartItemId',
    QTY: 'qty',
} as const;

export type CartItemFormFields = {
    [CART_ITEM_FORM_HANDLES.CART_ITEM_ID]: string;
    [CART_ITEM_FORM_HANDLES.QTY]: number;
};

export type CartItemProps = {
    withQuantity?: boolean;
    cartItemId: string;
    media?: BaseProps['items'];
    details?: PropsWithChildren['children'][];
    title?: BaseProps['children'];
    price?: number;
    priceLabel?: PropsWithChildren['children'];
    qty?: number;
    stock?: number;
    onSubmit?: (data: CartItemFormFields) => void;
    onRemove?: (data: CartItemFormFields) => void;
};

const minQty = 1;

const CartItem = ({
    cartItemId,
    title,
    media,
    details,
    priceLabel,
    qty,
    stock,
    withQuantity,
    onSubmit,
    onRemove,
}: CartItemProps): React.ReactElement => {
    const { register, handleSubmit, getValues, setValue } = useForm<CartItemFormFields>({
        defaultValues: { cartItemId, qty },
    });

    const [data, setData] = useState<CartItemFormFields>();

    type UpdateQuantityHandlerProps = {
        cartId: CartItemProps['cartItemId'];
        type: 'increment' | 'decrement' | 'delete';
    };

    const updateQuantityHandler = ({ cartId, type = 'increment' }: UpdateQuantityHandlerProps) => {
        if (!cartId) {
            console.warn('no cartId is provided');
            return;
        }

        let updatedValue = getValues(CART_ITEM_FORM_HANDLES.QTY);
        if (typeof updatedValue === 'number' && type === 'increment') updatedValue += 1;
        if (typeof updatedValue === 'number' && type === 'decrement') updatedValue -= 1;
        if (type === 'delete') updatedValue = 0;

        if (stock && updatedValue > stock) return;
        if (updatedValue < minQty) return;

        setValue(CART_ITEM_FORM_HANDLES.QTY, updatedValue, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    };

    useDebounce(
        () => {
            if (onSubmit && data) {
                onSubmit(data);
            }
        },
        500,
        [data]
    );

    return (
        <form
            className="cart"
            onSubmit={handleSubmit((data) => {
                setData(data);
            })}>
            <div className="cart__media">{media && media.length > 0 && <Picture items={media} />}</div>

            <div className="cart__content">
                {title && <Heading className="cart__title">{title}</Heading>}

                {details && details.length > 0 && (
                    <>
                        {details.map((item, idx) => {
                            return (
                                <p
                                    key={idx}
                                    className="cart__detail">
                                    {item}
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
                                    type: 'submit',
                                    disabled: !!(stock && qty && qty >= stock),
                                    onClick: () => {
                                        updateQuantityHandler({
                                            cartId: cartItemId,
                                            type: 'increment',
                                        });
                                    },
                                }}
                                decrement={{
                                    type: 'submit',
                                    disabled: !!(qty && qty === 1),
                                    onClick: () => {
                                        updateQuantityHandler({
                                            cartId: cartItemId,
                                            type: 'decrement',
                                        });
                                    },
                                }}
                                input={{
                                    type: 'number',
                                    min: minQty,
                                    max: stock ?? undefined,
                                    value: qty ?? 0,
                                    hook: {
                                        register,
                                        name: CART_ITEM_FORM_HANDLES.QTY,
                                        valueAsNumber: true,
                                    },
                                }}
                            />
                            <Button
                                as="button"
                                type="submit"
                                className="cart__delete"
                                onClick={() => {
                                    if (onRemove) onRemove({ cartItemId, qty: 0 });
                                }}>
                                <Trash />
                            </Button>
                        </div>
                    )}

                    {priceLabel && <p className="cart__price">{priceLabel}</p>}
                </div>
            </div>
        </form>
    );
};

export default CartItem;
