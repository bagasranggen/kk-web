import { getImageProps } from 'next/image';

import { BaseImageProps } from '@/components/common/Picture';

export type CreateBackgroundImage = BaseImageProps;

export const createBackgroundImage = (item: CreateBackgroundImage) => {
    let data: string | undefined = undefined;

    if (item?.src && item?.width && item?.height && item?.alt) {
        const {
            props: { srcSet },
        } = getImageProps({
            alt: item?.alt,
            width: item?.width as number,
            height: item?.height as number,
            src: item?.src as any,
        });

        if (srcSet) {
            const imageSet = srcSet
                .split(', ')
                .map((str) => {
                    const [url, dpi] = str.split(' ');
                    return `url("${url}") ${dpi}`;
                })
                .join(', ');

            data = `image-set(${imageSet})`;
        }
    }

    return data;
};
