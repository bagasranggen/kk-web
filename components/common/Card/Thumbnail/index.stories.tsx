import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Thumbnail from './index';
import {
    CARD_THUMBNAIL_3_ITEMS,
    CARD_THUMBNAIL_4_ITEMS,
    CARD_THUMBNAIL_8_ITEMS,
} from '@/components/common/Card/Thumbnail/index.mock';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Common/Card/Thumbnail',
    component: Thumbnail,
    decorators: [
        (Story) => {
            return (
                <Container>
                    <Story />
                </Container>
            );
        },
    ],
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
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        items: CARD_THUMBNAIL_4_ITEMS,
    },
};

export const Default2Rows: Story = {
    args: {
        items: CARD_THUMBNAIL_8_ITEMS,
    },
};

export const ExtraChildren: Story = {
    args: {
        items: CARD_THUMBNAIL_3_ITEMS,
        extra: {
            className: 'flex items-center justify-center',
            children: (
                <Button.Block
                    as="anchor"
                    href="#">
                    View More
                </Button.Block>
            ),
        },
    },
};
