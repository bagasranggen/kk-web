import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Icon from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Icon',
    // component: Icon,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/arg-types
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    // args: { onClick: fn() },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

type ArrowStory = StoryObj<typeof Icon.Arrow>;

const arrowArgsTypes: Meta<typeof Icon.Arrow>['argTypes'] = {
    size: {
        options: ['md', 'lg'],
        control: { type: 'select' },
    },
    color: {
        options: ['light', 'dark'],
        control: { type: 'select' },
    },
};

export const Arrow: ArrowStory = {
    args: {},
    argTypes: arrowArgsTypes,
    render: (args) => {
        return <Icon.Arrow {...args} />;
    },
};

export const ArrowDark: ArrowStory = {
    argTypes: arrowArgsTypes,
    args: {
        color: 'dark',
    },
    render: (args) => {
        return <Icon.Arrow {...args} />;
    },
};

export const ArrowDarkLarge: ArrowStory = {
    argTypes: arrowArgsTypes,
    args: {
        color: 'dark',
        size: 'lg',
    },
    render: (args) => {
        return <Icon.Arrow {...args} />;
    },
};
