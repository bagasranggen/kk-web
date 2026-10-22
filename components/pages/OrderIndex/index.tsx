import React from 'react';

import { PageIndexProps } from '@/libs/@types';

import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';
import Container from '@/components/common/Container';
import OrderForm from '@/components/pages/OrderIndex/OrderForm';
import OrderCart from '@/components/pages/OrderIndex/OrderCart';

export type OrderIndexProps = PageIndexProps<'order', {}>;

const OrderIndex = ({}: OrderIndexProps): React.ReactElement => {
    return (
        <>
            <Container className="mt-15 mb-15">
                <Columns
                    gutterY={4}
                    className="justify-between">
                    <Columns.Column
                        lg={7}
                        xl={6}>
                        <Heading
                            as="h1"
                            family="bodoni-moda"
                            className="uppercase text-[4.5rem] tracking-0.5">
                            Order Detail
                        </Heading>

                        <OrderForm className="mt-3" />
                    </Columns.Column>

                    <Columns.Column
                        className="order-first lg:order-last"
                        lg={4}
                        xl={5}>
                        <OrderCart />
                    </Columns.Column>
                </Columns>
            </Container>
        </>
    );
};

export default OrderIndex;
