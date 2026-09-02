import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Block from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Button/Block',
    component: Block,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/arg-types
    argTypes: {
        color: {
            options: ['light', 'dark'],
            control: { type: 'select' },
        },
        size: {
            options: ['md', 'lg'],
            control: { type: 'select' },
        },
        active: {
            control: { type: 'boolean' },
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    // args: { onClick: fn() },
} satisfies Meta<typeof Block>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
    },
};

export const Large: Story = {
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        size: 'lg',
    },
};

export const Active: Story = {
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        active: true,
    },
};

export const Light: Story = {
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        color: 'light',
        active: false,
    },
};

export const LightActive: Story = {
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        color: 'light',
        active: true,
    },
};

export const Primary: Story = {
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        color: 'primary',
        active: false,
    },
};

export const PrimaryActive: Story = {
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        color: 'primary',
        active: true,
    },
};

export const Accent: Story = {
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        color: 'accent',
        active: false,
    },
};

export const AccentActive: Story = {
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        color: 'accent',
        active: true,
    },
};
