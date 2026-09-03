import { CbImageShrunkProps } from '@/components/common/ContentBlocks/CbImageShrunk';
import { createPicsumImage, createPictureItem } from '@/libs/factories';

export const CB_IMAGE_SHRUNK_MEDIA: CbImageShrunkProps['media'] = [
    createPictureItem({ item: createPicsumImage({ width: 2800, height: 1575 }) }),
];
