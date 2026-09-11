import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import CartDrawer from './index';
import { CART_ITEMS } from '@/components/common/Cart/index.mockup';
import { useState } from 'react';
import { useCartStateContext } from '@/store/context';

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
        items: CART_ITEMS,
        price: 'IDR 500,000',
    },
    render: (args) => {
        const [open, setOpen] = useState(true);
        const { items } = useCartStateContext();

        return (
            <CartDrawer
                {...args}
                open={open}
                onOpenChange={setOpen}
                items={items}
            />
        );
    },
};
