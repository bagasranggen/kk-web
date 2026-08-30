import React, { PropsWithChildren } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer, { FooterProps } from '@/components/layout/Footer';

export type MainProps = {
    footer?: FooterProps;
} & PropsWithChildren;

const Main = ({ footer, children }: MainProps): React.ReactElement => {
    return (
        <>
            <Navigation className="fixed w-full top-0" />

            <main>{children}</main>

            <Footer {...footer} />
        </>
    );
};

export default Main;
