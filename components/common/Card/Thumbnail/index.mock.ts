import { ThumbnailProps } from '@/components/common/Card/Thumbnail';
import { createArrayFromNumber, createPicsumImage, createPictureItem } from '@/libs/factories';
import { convertIntToCurrency } from '@/libs/utils';

export const CARD_THUMBNAIL_3_ITEMS: ThumbnailProps['items'] = createArrayFromNumber(3).map((_, i) => {
    return {
        cta: {
            href: '/merchandise/' + (i + 1),
        },
        label: i === 1 ? 'sale' : undefined,
        media: [
            createPictureItem({
                item: createPicsumImage({ width: 800, height: 1151 }),
                sizes: '(min-width: 1900px) 23.1053vw, (min-width: 992px) 30.5549vw, (min-width: 768px) 44.7917vw)',
            }),
        ],
    };
});

export const CARD_THUMBNAIL_4_ITEMS: ThumbnailProps['items'] = createArrayFromNumber(4).map((_, i) => {
    return {
        cta: {
            href: '/merchandise/' + (i + 1),
        },
        label: i === 1 ? 'sale' : undefined,
        media: [
            createPictureItem({
                item: createPicsumImage({ width: 800, height: 1151 }),
                sizes: '(min-width: 1900px) 23.1053vw, (min-width: 992px) 30.5549vw, (min-width: 768px) 44.7917vw)',
            }),
        ],
        salePrice: i === 1 ? convertIntToCurrency(400000, true) : undefined,
        price: convertIntToCurrency(200000, true),
        title: 'Korekayu Logo ' + (i + 1),
    };
});

export const CARD_THUMBNAIL_8_ITEMS: ThumbnailProps['items'] = createArrayFromNumber(8).map((_, i) => {
    return {
        cta: {
            href: '/merchandise/' + (i + 1),
        },
        label: i === 1 ? 'sale' : undefined,
        media: [
            createPictureItem({
                item: createPicsumImage({ width: 800, height: 1151 }),
                sizes: '(min-width: 1900px) 23.1053vw, (min-width: 992px) 30.5549vw, (min-width: 768px) 44.7917vw)',
            }),
        ],
    };
});

export const CARD_THUMBNAIL_9_ITEMS: ThumbnailProps['items'] = createArrayFromNumber(9).map((_, i) => {
    return {
        cta: {
            href: '/merchandise/' + (i + 1),
        },
        label: i === 1 ? 'sale' : undefined,
        media: [
            createPictureItem({
                item: createPicsumImage({ width: 800, height: 1151 }),
                sizes: '(min-width: 1900px) 23.1053vw, (min-width: 992px) 30.5549vw, (min-width: 768px) 44.7917vw)',
            }),
        ],
        salePrice: i === 1 ? convertIntToCurrency(400000, true) : undefined,
        price: convertIntToCurrency(200000, true),
        title: 'Korekayu Logo ' + (i + 1),
    };
});
