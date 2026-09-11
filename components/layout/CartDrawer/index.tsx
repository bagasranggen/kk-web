'use client';

import React, { CSSProperties, PropsWithChildren, Ref } from 'react';

import { useMeasure } from 'react-use';

import { Drawer, DrawerContent, DrawerRootProps } from '@/components/shadcn/Drawer';
import Cart, { CartProps } from '@/components/common/Cart';
import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';

export type CartDrawerProps = {
    items?: CartProps['items'];
    price?: PropsWithChildren['children'];
} & (Pick<DrawerRootProps, 'open' | 'onOpenChange'> & Pick<CartProps, 'onSubmit' | 'onRemove'>);

const CartDrawer = ({ open, onOpenChange, items, price, onSubmit, onRemove }: CartDrawerProps): React.ReactElement => {
    const [totalRef, { height, y }] = useMeasure();

    let style: undefined | CSSProperties = undefined;
    if (height > 0) {
        style = Object.assign(style ?? {}, {
            '--drawer-total-height': `${height + y * 2}px`,
        } as CSSProperties);
    }

    return (
        <Drawer
            open={open}
            onOpenChange={onOpenChange}
            swipeDirection="right">
            <DrawerContent
                className="drawer drawer--cart w-[85vw] md:w-[50vw] lg:w-[60vw] max-w-50"
                style={style}>
                <Button.Hamburger
                    as="button"
                    active
                    withBorder={false}
                    className="drawer__close"
                    onClick={() => {
                        if (onOpenChange) onOpenChange(false, {} as any);
                    }}
                />

                <div className="drawer__cart">
                    {items && items.length > 0 && (
                        <Cart
                            items={items}
                            onSubmit={onSubmit}
                            onRemove={onRemove}
                        />
                    )}
                    {(!items || items.length === 0) && <Heading className="text-center">No items in cart yet</Heading>}
                </div>

                <div
                    ref={totalRef as Ref<HTMLDivElement>}
                    className="drawer__total">
                    <div className="flex gap-x-3 justify-between items-center ">
                        <p className="uppercase mb-0 text-[1.4rem] font-light tracking-0.2">total</p>
                        {price && <p className="uppercase text-[2rem] font-bold tracking-0.1">{price}</p>}
                    </div>

                    <div className="mt-1 text-end">
                        <Button.Block
                            as="anchor"
                            href="#">
                            Checkout
                        </Button.Block>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default CartDrawer;
