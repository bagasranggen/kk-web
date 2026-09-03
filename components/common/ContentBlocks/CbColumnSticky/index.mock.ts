import { createPicsumImage, createPictureItem } from '@/libs/factories';
import { CbColumnStickyProps } from '@/components/common/ContentBlocks/CbColumnSticky/index';

export const CB_COLUMN_STICKY_16_9: NonNullable<CbColumnStickyProps['media']>[number][number] = [
    createPictureItem({
        item: createPicsumImage({ width: 700, height: 394 }),
        // sizes: '',
    }),
];

export const CB_COLUMN_STICKY_3_4: NonNullable<CbColumnStickyProps['media']>[number][number] = [
    createPictureItem({
        item: createPicsumImage({ width: 700, height: 933 }),
        // sizes: '',
    }),
];

export const CB_COLUMN_STICKY_4_3: NonNullable<CbColumnStickyProps['media']>[number][number] = [
    createPictureItem({
        item: createPicsumImage({ width: 700, height: 525 }),
        // sizes: '',
    }),
];

export const CB_COLUMN_STICKY_1_1: NonNullable<CbColumnStickyProps['media']>[number][number] = [
    createPictureItem({
        item: createPicsumImage({ width: 700, height: 700 }),
        // sizes: '',
    }),
];

export const CB_COLUMN_STICKY_MEDIA: CbColumnStickyProps['media'] = [
    [
        CB_COLUMN_STICKY_16_9,
        CB_COLUMN_STICKY_3_4,
        CB_COLUMN_STICKY_16_9,
        CB_COLUMN_STICKY_4_3,
        CB_COLUMN_STICKY_1_1,
        CB_COLUMN_STICKY_4_3,
    ],
    [
        CB_COLUMN_STICKY_4_3,
        CB_COLUMN_STICKY_1_1,
        CB_COLUMN_STICKY_4_3,
        CB_COLUMN_STICKY_16_9,
        CB_COLUMN_STICKY_3_4,
        CB_COLUMN_STICKY_16_9,
    ],
];
