import AboutIndex from '@/components/pages/AboutIndex';
import { AboutData } from '@/components/pages/AboutIndex/data';

export default async function Page() {
    const { entries } = await AboutData();

    return <AboutIndex entries={entries} />;
}
