import { CbImageProps } from '@/components/common/ContentBlocks/CbImage/index';
import { createPicsumImage, createPictureItem } from '@/libs/factories';

export const CB_IMAGE_FULL: CbImageProps['items'] = [
    createPictureItem({
        item: createPicsumImage({ width: 2000, height: 1500 }),
        sizes: '(min-width: 992px) 84.0278vw, 93.0233vw',
    }),
];

export const CB_IMAGE_HALF: CbImageProps['items'] = [
    createPictureItem({
        item: createPicsumImage({ width: 1200, height: 900 }),
        sizes: '(min-width: 992px) 40.9722vw, (min-width: 768px) 83.0729vw, 93.0233vw',
    }),
];
