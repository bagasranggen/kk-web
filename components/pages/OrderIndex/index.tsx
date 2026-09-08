import React from 'react';

import { BaseIndexPageProps } from '@/libs/@types';

import Container from '@/components/common/Container';
import Columns from '@/components/common/Columns';
import Cart from '@/components/common/Cart';
import { CART_ITEMS } from '@/components/common/Cart/index.mockup';

export type OrderIndexProps = BaseIndexPageProps<'order', {}>;

const OrderIndex = ({}: OrderIndexProps): React.ReactElement => {
    return (
        <>
            <Container>
                <Columns
                    gutterY={3}
                    className="justify-between">
                    <Columns.Column lg={7}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur aut culpa ea, earum
                        eveniet fuga impedit ipsa laboriosam nam nobis, non odio perspiciatis quaerat quas quidem quos
                        reprehenderit saepe.
                    </Columns.Column>

                    <Columns.Column
                        className="order-first lg:order-last"
                        lg={4}>
                        <Cart items={CART_ITEMS} />
                    </Columns.Column>
                </Columns>
            </Container>
        </>
    );
};

export default OrderIndex;
