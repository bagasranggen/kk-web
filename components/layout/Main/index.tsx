'use client';

import React, { PropsWithChildren, Suspense, useState } from 'react';

import { NavigationEvents } from '@/libs/hooks';

import Navigation from '@/components/layout/Navigation';
import Footer, { FooterProps } from '@/components/layout/Footer';
import Menu, { MenuProps } from '@/components/layout/Menu';

export type MainProps = {
    footer?: FooterProps;
    menu?: Pick<MenuProps, 'items' | 'social'>;
} & PropsWithChildren;

const Main = ({ footer, menu, children }: MainProps): React.ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

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

            <Footer {...footer} />

            <Menu
                open={isOpen}
                onOpenChange={(open) => setIsOpen(open)}
                {...menu}
            />
        </>
    );
};

export default Main;
