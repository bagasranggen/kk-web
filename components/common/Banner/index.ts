import { Component } from '@/libs/@types';

import ImageText, { ImageTextProps } from '@/components/common/Banner/ImageText';
import Product, { ProductProps } from '@/components/common/Banner/Product';

export type * from '@/components/common/Banner/ImageText';
export type * from '@/components/common/Banner/Product';

type BannerComposition = {
    ImageText: Component<ImageTextProps>;
    Product: Component<ProductProps>;
};

export default Object.assign<{}, BannerComposition>({}, { ImageText, Product });
