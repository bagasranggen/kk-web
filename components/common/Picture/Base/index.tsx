import React from 'react';

import { ArrayStringProps, BaseComponentProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import BaseSource, { BaseSourceProps } from '@/components/common/Picture/Base/BaseSource';
import BaseImage, { BaseImageProps } from '@/components/common/Picture/Base/BaseImage';

export type BaseItemProps = BaseSourceProps | BaseImageProps;

export type BaseProps = {
    imageClassName?: ClassnameProps['className'];
    items: BaseItemProps[];
} & (React.HTMLAttributes<HTMLPictureElement> & BaseComponentProps<HTMLPictureElement>);

const Base = ({ ref, className, imageClassName, items, style, ...props }: BaseProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    let pictureClass: ArrayStringProps = [];
    if (className) pictureClass.push(className);
    pictureClass = joinArrayString(pictureClass);

    let pictureProps = props;
    if (style) pictureProps = Object.assign(pictureProps, { style });

    return (
        <picture
            ref={ref}
            {...(pictureClass ? { className: pictureClass } : {})}
            {...pictureProps}>
            {items.map((item, i) => {
                const isLast = items.length - 1 === i;

                const Image = isLast ? BaseImage : BaseSource;

                let imgClass: ArrayStringProps = item?.className ? [item.className] : [];
                if (imageClassName) imgClass.push(imageClassName);
                imgClass = joinArrayString(imgClass);

                let props: any = item;
                if (imgClass && isLast) props = Object.assign(props, { className: imgClass });

                return (
                    <Image
                        key={i}
                        {...props}
                    />
                );
            })}
        </picture>
    );
};

export default Base;

export type { BaseSourceProps, BaseImageProps };
