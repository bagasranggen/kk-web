import { ThumbnailProps } from '@/components/common/Card/Thumbnail';
import { createArrayFromNumber } from '@/libs/factories';

export const CARD_THUMBNAIL_3_ITEMS: ThumbnailProps['items'] = createArrayFromNumber(3).map((_) => {
    return {};
});

export const CARD_THUMBNAIL_4_ITEMS: ThumbnailProps['items'] = createArrayFromNumber(4).map((_) => {
    return {};
});

export const CARD_THUMBNAIL_8_ITEMS: ThumbnailProps['items'] = createArrayFromNumber(8).map((_) => {
    return {};
});
