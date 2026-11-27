import FinanceIndex from '@/components/pages/FinanceIndex';
import { FinanceData } from '@/components/pages/FinanceIndex/data';

export default async function Page() {
    const { entries } = await FinanceData();

    return <FinanceIndex entries={entries} />;
}
