'use client';

import React, { PropsWithChildren, Suspense, useState } from 'react';

import { NavigationEvents } from '@/libs/hooks';
import { useCartStateContext } from '@/store/context';

import Navigation from '@/components/layout/Navigation';
import Footer, { FooterProps } from '@/components/layout/Footer';
import Menu, { MenuProps } from '@/components/layout/Menu';
import CartButton from '@/components/layout/CartButton';
import CartDrawer from '@/components/layout/CartDrawer';

export type MainProps = {
    footer?: FooterProps;
    menu?: Pick<MenuProps, 'items' | 'social'>;
} & PropsWithChildren;

const Main = ({ footer, menu, children }: MainProps): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { items, count, totalPriceCurrency, isOpen: cartIsOpen, setIsOpen: setCartIsOpen } = useCartStateContext();

    return (
        <>
            <Suspense fallback={null}>
                <NavigationEvents endHandler={() => setIsOpen(false)} />
            </Suspense>

            <Navigation
                className="fixed w-full top-0"
                isOpen={isOpen}
                hamburger={{
                    onClick: () => setIsOpen((prevState) => !prevState),
                }}
            />

            <main>{children}</main>

            <CartButton
                className="fixed border bottom-1 left-1/2 -translate-x-1/2"
                count={count}
                onClick={() => setCartIsOpen(true)}>
                {totalPriceCurrency}
            </CartButton>

            <Footer {...footer} />

            <Menu
                open={isOpen}
                onOpenChange={(open) => setIsOpen(open)}
                {...menu}
            />

            <CartDrawer
                open={cartIsOpen}
                onOpenChange={setCartIsOpen}
                items={items}
                price={totalPriceCurrency}
            />
        </>
    );
};

export default Main;
