import { FinanceIndexProps } from '@/components/pages/FinanceIndex/index';
import { CASH_FLOW_STATEMENTS } from '@/components/pages/FinanceIndex/index.mockup';

export const FinanceData = async (): Promise<FinanceIndexProps> => {
    const cashFlows: FinanceIndexProps['entries']['cashFlows'] = CASH_FLOW_STATEMENTS;

    return {
        entries: {
            cashFlows,
        },
    };
};
