'use client';

import React, { PropsWithChildren, Ref } from 'react';

import { ArrayStringProps, BaseComponentProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { useMeasure } from 'react-use';

import Picture, { BaseProps as BasePictureProps } from '@/components/common/Picture';
import Heading, { BaseProps } from '@/components/common/Heading';

export type ImageTextProps = {
    heading?: BaseProps['children'];
    subHeading?: PropsWithChildren['children'];
    media?: BasePictureProps['items'];
} & (ClassnameProps & BaseComponentProps<HTMLDivElement> & PropsWithChildren);

const ImageText = ({
    ref,
    className,
    media,
    heading,
    subHeading,
    children,
}: ImageTextProps): React.ReactElement | null => {
    const [contentRef, { height: contentHeight }] = useMeasure();
    const [mediaRef, { height: mediaHeight }] = useMeasure();
    const contentHeightDifference = contentHeight - mediaHeight;
    const hasMedia = !!(media && media.length > 0);
    const hasContent = !!(heading || subHeading || children);

    let bannerClass: ArrayStringProps = ['banner banner--image-text'];
    if (!hasMedia) bannerClass.push('banner--no-image');
    if (contentHeightDifference > 0) bannerClass.push('banner--longer-content');
    if (className) bannerClass.push(className);
    bannerClass = joinArrayString(bannerClass);

    let style: React.CSSProperties | undefined = undefined;
    if (contentHeight > 0) {
        style = Object.assign(style ?? {}, { '--banner-content-height': `${contentHeight}px` } as React.CSSProperties);
    }
    if (contentHeightDifference > 0) {
        style = Object.assign(style ?? {}, {
            '--banner-content-difference-height': `${contentHeightDifference}px`,
        } as React.CSSProperties);
    }

    if (!hasMedia && !hasContent) return null;

    return (
        <section
            ref={ref}
            className={bannerClass}
            style={style}>
            {hasMedia && (
                <Picture
                    ref={mediaRef as Ref<HTMLPictureElement>}
                    items={media}
                    imageClassName="banner__media"
                    className="block"
                />
            )}

            {hasContent && (
                <div
                    ref={contentRef as Ref<HTMLDivElement>}
                    className="banner__content">
                    {heading && (
                        <Heading
                            family="bodoni-moda"
                            className="banner__heading">
                            {heading}
                        </Heading>
                    )}

                    {subHeading && <small className="mt-1.5 banner__sub-heading">{subHeading}</small>}

                    {children && <div className="mt-2.5 banner__description">{children}</div>}
                </div>
            )}
        </section>
    );
};

export default ImageText;
