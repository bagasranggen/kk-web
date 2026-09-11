import React from 'react';

import { BaseIndexPageProps } from '@/libs/@types';

import { CART_ITEMS } from '@/components/common/Cart/index.mockup';

import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';
import Container from '@/components/common/Container';
import Cart from '@/components/common/Cart';
import OrderForm from '@/components/pages/OrderIndex/OrderForm';

export type OrderIndexProps = BaseIndexPageProps<'order', {}>;

const OrderIndex = ({}: OrderIndexProps): React.ReactElement => {
    return (
        <>
            <Container>
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

                        <OrderForm
                            className="mt-3"
                            onSubmit={() => {
                                console.log('submit');
                            }}
                        />
                    </Columns.Column>

                    <Columns.Column
                        className="order-first lg:order-last"
                        lg={4}
                        xl={5}>
                        <Cart
                            withQuantity={false}
                            items={CART_ITEMS}
                        />
                    </Columns.Column>
                </Columns>
            </Container>
        </>
    );
};

export default OrderIndex;
