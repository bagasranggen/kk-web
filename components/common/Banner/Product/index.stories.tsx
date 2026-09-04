import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Product from './index';
import Container from '@/components/common/Container';
import ProductLabel from '@/components/common/Banner/Product/ProductLabel';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Banner/Product',
    component: Product,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <Container>
                <Story />
            </Container>
        ),
    ],
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/arg-types
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    // args: { onClick: fn() },
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        sizes: {
            onClick: () => {
                console.log('click size guide');
            },
        },
    },
};

export const Label: StoryObj<typeof ProductLabel> = {
    args: {
        title: 'sizes',
        subTitle: {
            onClick: () => {
                console.log('click size guide');
            },
            children: 'Size Guide',
        },
        children: 'asdadawd',
    },
    render: (args) => {
        return (
            <Container>
                <ProductLabel {...args} />
            </Container>
        );
    },
};
