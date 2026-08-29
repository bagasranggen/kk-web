import React, { PropsWithChildren } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export type MainProps = {} & PropsWithChildren;

const Main = ({ children }: MainProps): React.ReactElement => {
    return (
        <>
            <Navigation className="fixed w-full top-0" />

            <main>{children}</main>

            <Footer />
        </>
    );
};

export default Main;
