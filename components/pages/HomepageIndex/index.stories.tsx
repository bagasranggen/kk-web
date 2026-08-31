import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import HomepageIndex from './index';
import HomepageSchedule from '@/components/pages/HomepageIndex/HomepageSchedule';
import { LIST_SCHEDULE } from '@/components/pages/HomepageIndex/index.mock';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Pages/Homepage Index',
    component: HomepageIndex,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
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
        schedule: LIST_SCHEDULE,
    },
};

export const Schedule: StoryObj<typeof HomepageSchedule> = {
    args: {
        items: LIST_SCHEDULE,
    },
    render: (args) => {
        return <HomepageSchedule {...args} />;
    },
};
