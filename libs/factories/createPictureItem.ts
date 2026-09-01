import { getImageProps, ImageProps } from 'next/image';

import { BaseImageProps } from '@/components/common/Picture';

const NEXT_IMAGE_TOGGLE = process.env.NEXT_PUBLIC_NEXT_IMAGE_TOGGLE === '1';

export type CreatePictureItemProps = {
    item?: any;
    media?: number;
    nextImage?: boolean;
} & (Pick<BaseImageProps, 'loading'> & Pick<ImageProps, 'sizes'>);

export const createPictureItem = ({
    item,
    media,
    loading: loadingProps = 'lazy',
    sizes: sizesProps,
    nextImage = NEXT_IMAGE_TOGGLE,
}: CreatePictureItemProps) => {
    let data = undefined;

    if (media) data = Object.assign(data ?? {}, { media: `(min-width: ${media}px)` });

    if (!nextImage && item) data = Object.assign(data ?? {}, item);

    if (nextImage && item && item?.src && item?.width && item?.height) {
        const {
            props: { src, srcSet, width, height, alt, sizes, loading },
        } = getImageProps({
            src: item.src,
            width: item.width,
            height: item.height,
            loading: loadingProps,
            sizes: sizesProps,
            alt: item?.alt ?? item?.title ?? item?.filename,
        });

        data = Object.assign(data ?? {}, { src, srcSet, width, height, sizes, alt, loading });
    }

    return data;
};
