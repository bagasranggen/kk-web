import { Component } from '@/libs/@types';

import ImageText, { ImageTextProps } from '@/components/common/Banner/ImageText';

export type * from '@/components/common/Banner/ImageText';

type BannerComposition = {
    ImageText: Component<ImageTextProps>;
};

export default Object.assign<{}, BannerComposition>({}, { ImageText });
