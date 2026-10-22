import ProductIndex from '@/components/pages/ProductIndex';
import { ProductData } from '@/components/pages/ProductIndex/data';

export default async function Page() {
    const { entries } = await ProductData();

    return <ProductIndex entries={entries} />;
}
