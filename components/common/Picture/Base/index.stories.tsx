import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { createPicsumImage, createPictureItem } from '@/libs/factories';

import { fn } from 'storybook/test';

import Base from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Picture/Base',
    component: Base,
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
} satisfies Meta<typeof Base>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
    args: {
        items: [
            createPictureItem({
                item: createPicsumImage({ width: 2880, height: 2160 }),
                sizes: '100vw',
                loading: 'eager',
            }),
        ],
    },
};

export const DefaultRegular: Story = {
    args: {
        items: [
            createPictureItem({
                item: createPicsumImage({ width: 2880, height: 2160 }),
                sizes: '100vw',
                loading: 'eager',
                nextImage: false,
            }),
        ],
    },
};

export const CheckClassInput: Story = {
    args: {
        imageClassName: 'opacity-50',
        items: [
            createPictureItem({
                item: createPicsumImage({ width: 2880, height: 2160 }),
                sizes: '100vw',
                loading: 'eager',
            }),
        ],
    },
};

export const HalfOnDesktop: Story = {
    args: {
        items: [
            createPictureItem({
                item: createPicsumImage({ width: 2880, height: 2160 }),
                sizes: '(max-width: 767.98px) 50vw, 100vw',
            }),
        ],
        className: 'md:max-w-[50vw]',
    },
};

export const DifferentRatioOnDesktop: Story = {
    args: {
        items: [
            createPictureItem({
                item: createPicsumImage({ width: 2880, height: 2160 }),
                sizes: '(max-width: 767.98px) 50vw, 100vw',
                media: 768,
            }),
            createPictureItem({
                item: createPicsumImage({ width: 860, height: 1290 }),
                sizes: '100vw',
            }),
        ],
        className: 'md:max-w-[50vw]',
    },
};

export const DifferentRatioOnDesktopRegular: Story = {
    args: {
        items: [
            createPictureItem({
                item: createPicsumImage({ width: 2880, height: 2160 }),
                sizes: '(max-width: 767.98px) 50vw, 100vw',
                media: 768,
                nextImage: false,
            }),
            createPictureItem({
                item: createPicsumImage({ width: 860, height: 1290 }),
                sizes: '100vw',
                nextImage: false,
            }),
        ],
        className: 'md:max-w-[50vw]',
    },
};
