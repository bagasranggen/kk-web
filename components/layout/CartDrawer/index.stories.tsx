import { Suspense, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { useCartStateContext } from '@/store/context';
import { NavigationEvents } from '@/libs/hooks';

import CartDrawer from './index';
import { SUBMIT_PRODUCT_ITEMS } from '@/components/common/Banner/Product/index.mockup';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Layout/Cart',
    component: CartDrawer,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/arg-types
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    // args: { onClick: fn() },
} satisfies Meta<typeof CartDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        open: true,
        onSubmit: (data) => {
            console.log('submit');
        },
    },
    render: (args) => {
        const [open, setOpen] = useState(true);
        const { items, setItems, totalPriceCurrency, updateCartQuantityHandler } = useCartStateContext();

        return (
            <>
                <Suspense fallback={null}>
                    <NavigationEvents
                        endHandler={() => {
                            setItems(SUBMIT_PRODUCT_ITEMS);
                        }}
                    />
                </Suspense>

                <CartDrawer
                    {...args}
                    open={open}
                    onOpenChange={setOpen}
                    items={items}
                    price={totalPriceCurrency}
                    onRemove={(data) => {
                        console.log('remove');
                        updateCartQuantityHandler(data);
                    }}
                    onSubmit={(data) => {
                        console.log('submit');
                        updateCartQuantityHandler(data);
                    }}
                />
            </>
        );
    },
};
