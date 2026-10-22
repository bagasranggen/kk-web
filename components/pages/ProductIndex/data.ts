import { ProductIndexProps } from '@/components/pages/ProductIndex';
import {
    PRODUCT_COLORS_ITEMS,
    PRODUCT_DESCRIPTION,
    PRODUCT_MEDIA_ITEMS,
    PRODUCT_MEDIA_THUMBNAIL_ITEMS,
    PRODUCT_SIZES_ITEMS,
} from '@/components/common/Banner/Product/index.mockup';
import { CARD_THUMBNAIL_4_ITEMS } from '@/components/common/Card/Thumbnail/index.mock';

export const ProductData = async (): Promise<ProductIndexProps> => {
    return {
        entries: {
            banner: {
                title: 'Korekayu Logo',
                media: {
                    items: PRODUCT_MEDIA_ITEMS,
                    thumbnails: PRODUCT_MEDIA_THUMBNAIL_ITEMS,
                },
                description: PRODUCT_DESCRIPTION,
                colors: PRODUCT_COLORS_ITEMS,
                sizes: PRODUCT_SIZES_ITEMS,
                price: 200000,
                priceLabel: 'IDR 200,000',
            },
            otherProducts: CARD_THUMBNAIL_4_ITEMS,
        },
    };
};
