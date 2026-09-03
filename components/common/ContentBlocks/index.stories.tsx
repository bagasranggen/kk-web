import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import ContentBlocks from './index';
import { CB_TEXT_CHILDREN } from '@/components/common/ContentBlocks/CbText/index.mock';
import {
    CB_IMAGE_TEXT_CHILDREN,
    CB_IMAGE_TEXT_MEDIA_MAIN,
    CB_IMAGE_TEXT_MEDIA_SECONDARY,
} from '@/components/common/ContentBlocks/CbImageText/index.mock';
import { CB_IMAGE_FULL, CB_IMAGE_HALF } from '@/components/common/ContentBlocks/CbImage/index.mock';
import { CB_COLUMN_STICKY_MEDIA } from '@/components/common/ContentBlocks/CbColumnSticky/index.mock';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Content Blocks',
    component: ContentBlocks,
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
} satisfies Meta<typeof ContentBlocks>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        items: [
            {
                typeHandle: 'imageText',
                mediaMain: CB_IMAGE_TEXT_MEDIA_MAIN,
                mediaSecondary: CB_IMAGE_TEXT_MEDIA_SECONDARY,
                children: CB_IMAGE_TEXT_CHILDREN,
            },
            {
                typeHandle: 'image',
                className: 'mt-15',
                items: CB_IMAGE_FULL,
            },
            {
                typeHandle: 'columns',
                variant: 'slim',
                className: 'mt-15',
                items: [
                    {
                        typeHandle: 'column',
                        items: [
                            {
                                typeHandle: 'text',
                                children: CB_TEXT_CHILDREN,
                            },
                            {
                                typeHandle: 'text',
                                className: 'mt-10',
                                children: CB_TEXT_CHILDREN,
                            },
                        ],
                    },
                ],
            },
            {
                typeHandle: 'columns',
                variant: '2/3',
                className: 'mt-15',
                items: [
                    {
                        typeHandle: 'column',
                        items: [
                            {
                                typeHandle: 'text',
                                children: CB_TEXT_CHILDREN,
                            },
                        ],
                    },
                    {
                        typeHandle: 'column',
                        items: [
                            {
                                typeHandle: 'image',
                                items: CB_IMAGE_HALF,
                            },
                        ],
                    },
                ],
            },
            {
                typeHandle: 'columns',
                variant: '3/2',
                className: 'mt-15',
                items: [
                    {
                        typeHandle: 'column',
                        items: [
                            {
                                typeHandle: 'image',
                                items: CB_IMAGE_HALF,
                            },
                        ],
                    },
                    {
                        typeHandle: 'column',
                        items: [
                            {
                                typeHandle: 'text',
                                children: CB_TEXT_CHILDREN,
                            },
                        ],
                    },
                ],
            },
            {
                typeHandle: 'columnSticky',
                className: 'mt-15',
                media: CB_COLUMN_STICKY_MEDIA,
                children: CB_TEXT_CHILDREN,
            },
        ],
    },
};
