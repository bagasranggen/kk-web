import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import HomepageIndex from './index';
import HomepageDiscography from '@/components/pages/HomepageIndex/HomepageDiscography';
import HomepageDiscographyItem from '@/components/pages/HomepageIndex/HomepageDiscographyItem';
import HomepageBanner from '@/components/pages/HomepageIndex/HomepageBanner';
import Container from '@/components/common/Container';

import {
    BANNER_ITEMS,
    DISCOGRAPHY_ITEMS,
    FEATURED_DISCOGRAPHY_ITEM,
} from '@/components/pages/HomepageIndex/index.mock';
import { SCHEDULE_ITEMS_3 } from '@/components/common/Schedule/index.mockup';
import { CARD_THUMBNAIL_3_ITEMS } from '@/components/common/Card/Thumbnail/index.mock';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Pages/Homepage Index',
    component: HomepageIndex,
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
} satisfies Meta<typeof HomepageIndex>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        entries: {
            banner: BANNER_ITEMS,
            schedule: SCHEDULE_ITEMS_3,
            discography: {
                featured: FEATURED_DISCOGRAPHY_ITEM,
                discographies: DISCOGRAPHY_ITEMS,
            },
            merchandise: CARD_THUMBNAIL_3_ITEMS,
        },
    },
};

export const Banner: StoryObj<typeof HomepageBanner> = {
    args: {
        items: BANNER_ITEMS,
        cta: {
            href: '#',
            children: 'Scroll',
        },
    },
    render: (args) => {
        return <HomepageBanner {...args} />;
    },
};

export const DiscographyItemLarge: StoryObj<typeof HomepageDiscographyItem> = {
    args: {
        size: 'lg',
        ...FEATURED_DISCOGRAPHY_ITEM,
    },
    render: (args) => {
        return (
            <Container type="fluid">
                <HomepageDiscographyItem {...args} />
            </Container>
        );
    },
};

export const DiscographyItemRegular: StoryObj<typeof HomepageDiscographyItem> = {
    args: {
        size: 'md',
        ...FEATURED_DISCOGRAPHY_ITEM,
    },
    render: (args) => {
        return (
            <Container type="fluid">
                <HomepageDiscographyItem {...args} />
            </Container>
        );
    },
};

export const Discography: StoryObj<typeof HomepageDiscography> = {
    args: {
        featured: FEATURED_DISCOGRAPHY_ITEM,
        discographies: DISCOGRAPHY_ITEMS,
    },
    render: (args) => {
        return (
            <Container type="fluid">
                <HomepageDiscography {...args} />
            </Container>
        );
    },
};
