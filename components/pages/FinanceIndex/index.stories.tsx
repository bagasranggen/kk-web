import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import FinanceIndex from './index';
import FinanceTable from '@/components/pages/FinanceIndex/FinanceTable';
import { CASH_FLOW_STATEMENTS, FINANCE_TABLE_ITEMS } from '@/components/pages/FinanceIndex/index.mockup';
import { createArrayFromNumber } from '@/libs/factories';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Pages/Finance Index',
    component: FinanceIndex,
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
} satisfies Meta<typeof FinanceIndex>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        entries: {
            cashFlows: CASH_FLOW_STATEMENTS,
        },
    },
};

export const Table: StoryObj<typeof FinanceTable> = {
    args: {
        items: FINANCE_TABLE_ITEMS,
    },
    render: (args) => <FinanceTable {...args} />,
};
