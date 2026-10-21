import ProductListingIndex from '@/components/pages/ProductListingIndex';
import { ProductListingData } from '@/components/pages/ProductListingIndex/data';

export default async function Page() {
    const { entries } = await ProductListingData();

    return <ProductListingIndex entries={entries} />;
}
