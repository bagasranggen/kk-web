import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import ImageText from './index';
import {
    IMAGE_TEXT_HEADING,
    IMAGE_TEXT_HEADING_LONGER,
    IMAGE_TEXT_MEDIA,
    IMAGE_TEXT_SUB_CHILDREN,
    IMAGE_TEXT_SUB_CHILDREN_LONGER,
    IMAGE_TEXT_SUB_HEADING,
} from '@/components/common/Banner/ImageText/index.mock';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Banner/Image Text',
    component: ImageText,
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
} satisfies Meta<typeof ImageText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        media: IMAGE_TEXT_MEDIA,
        heading: IMAGE_TEXT_HEADING,
        subHeading: IMAGE_TEXT_SUB_HEADING,
        children: IMAGE_TEXT_SUB_CHILDREN,
    },
};

export const LongText: Story = {
    args: {
        media: IMAGE_TEXT_MEDIA,
        heading: IMAGE_TEXT_HEADING,
        subHeading: IMAGE_TEXT_SUB_HEADING,
        children: IMAGE_TEXT_SUB_CHILDREN_LONGER,
    },
};

export const LongHeading: Story = {
    args: {
        media: IMAGE_TEXT_MEDIA,
        heading: IMAGE_TEXT_HEADING_LONGER,
        subHeading: IMAGE_TEXT_SUB_HEADING,
        children: IMAGE_TEXT_SUB_CHILDREN,
    },
};

export const EmptyContent: Story = {
    args: {
        media: IMAGE_TEXT_MEDIA,
    },
};

export const EmptyMedia: Story = {
    args: {
        heading: IMAGE_TEXT_HEADING,
        subHeading: IMAGE_TEXT_SUB_HEADING,
        children: IMAGE_TEXT_SUB_CHILDREN,
    },
};

export const Empty: Story = {
    args: {},
};
