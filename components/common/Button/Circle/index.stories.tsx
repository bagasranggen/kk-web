import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Circle from './index';
import Icon from '@/components/common/Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Button/Circle',
    component: Circle,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/arg-types
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    // args: { onClick: fn() },
} satisfies Meta<typeof Circle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        as: 'anchor',
        children: <Icon.AppleMusic />,
        href: '#',
    },
};

export const Small: Story = {
    args: {
        as: 'anchor',
        size: 'sm',
        children: <Icon.AppleMusic />,
        href: '#',
    },
};

export const Light: Story = {
    args: {
        as: 'anchor',
        color: 'light',
        children: <Icon.AppleMusic />,
        href: '#',
    },
};
