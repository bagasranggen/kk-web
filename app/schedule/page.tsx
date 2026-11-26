import ScheduleIndex from '@/components/pages/ScheduleIndex';
import { ScheduleData } from '@/components/pages/ScheduleIndex/data';

export default async function Page() {
    const { entries } = await ScheduleData();

    return <ScheduleIndex entries={entries} />;
}
