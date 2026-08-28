import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Button from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Button',
    component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        as: 'anchor',
        children: 'anchor',
        href: '#',
    },
};

type BlockStory = StoryObj<typeof Button.Block>;

const blockArgsTypes: Meta<typeof Button.Block>['argTypes'] = {
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
};

export const Block: BlockStory = {
    argTypes: blockArgsTypes,
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
    },
    render: (args) => {
        return <Button.Block {...args} />;
    },
};
export const BlockLarge: BlockStory = {
    argTypes: blockArgsTypes,
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        size: 'lg',
    },
    render: (args) => {
        return <Button.Block {...args} />;
    },
};

export const BlockActive: BlockStory = {
    argTypes: blockArgsTypes,
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        active: true,
    },
    render: (args) => {
        return <Button.Block {...args} />;
    },
};

export const BlockLight: BlockStory = {
    argTypes: blockArgsTypes,
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        color: 'light',
        active: false,
    },
    render: (args) => {
        return <Button.Block {...args} />;
    },
};

export const BlockLightActive: BlockStory = {
    argTypes: blockArgsTypes,
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        color: 'light',
        active: true,
    },
    render: (args) => {
        return <Button.Block {...args} />;
    },
};

export const BlockPrimary: BlockStory = {
    argTypes: blockArgsTypes,
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        color: 'primary',
        active: false,
    },
    render: (args) => {
        return <Button.Block {...args} />;
    },
};

export const BlockPrimaryActive: BlockStory = {
    argTypes: blockArgsTypes,
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        color: 'primary',
        active: true,
    },
    render: (args) => {
        return <Button.Block {...args} />;
    },
};

export const BlockAccent: BlockStory = {
    argTypes: blockArgsTypes,
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        color: 'accent',
        active: false,
    },
    render: (args) => {
        return <Button.Block {...args} />;
    },
};

export const BlockAccentActive: BlockStory = {
    argTypes: blockArgsTypes,
    args: {
        as: 'anchor',
        children: 'Block Anchor',
        href: '#',
        color: 'accent',
        active: true,
    },
    render: (args) => {
        return <Button.Block {...args} />;
    },
};
