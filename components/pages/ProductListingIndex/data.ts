import { ProductListingIndexProps } from '@/components/pages/ProductListingIndex/index';
import { CARD_THUMBNAIL_9_ITEMS } from '@/components/common/Card/Thumbnail/index.mock';

export const ProductListingData = async (): Promise<ProductListingIndexProps> => {
    const categories: ProductListingIndexProps['entries']['categories'] = [
        {
            isActive: true,
            cta: {
                href: '#',
                children: 'All',
            },
        },
        {
            isActive: false,
            cta: {
                href: '#',
                children: 'T-Shirt',
            },
        },
    ];

    const products: ProductListingIndexProps['entries']['products'] = CARD_THUMBNAIL_9_ITEMS;

    return {
        entries: {
            categories,
            products,
        },
    };
};
