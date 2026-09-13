import { createArrayFromNumber, createPicsumImage, createPictureItem } from '@/libs/factories';

export const BASE_CAROUSEL_IMAGE = createArrayFromNumber(4).map((_, i) => {
    return {
        media: [createPictureItem({ item: createPicsumImage({ id: 239 + i, width: 1920, height: 1440 }) })],
    };
});
