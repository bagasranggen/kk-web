'use client';

import React, { PropsWithChildren } from 'react';

import { SwiperModule, SwiperOptions } from 'swiper/types';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export type BaseVariantProps = {
    // modules?: SwiperModule | SwiperModule[];
    modules?: SwiperProps['modules'];
    options?: SwiperOptions;
    element?: React.ReactElement;
};

export type BaseItemProps = PropsWithChildren;

export type BaseProps = {
    items?: BaseItemProps[];
    modulesVariant?: BaseVariantProps;
} & SwiperProps;

const Base = ({ items, modulesVariant, modules: moduleProps, ...props }: BaseProps): React.ReactElement | null => {
    const modules: SwiperModule[] = [];
    if (modulesVariant?.modules && Array.isArray(modulesVariant.modules)) modules.push(...modulesVariant.modules);
    if (modulesVariant?.modules && !Array.isArray(modulesVariant.modules)) modules.push(modulesVariant.modules);
    if (moduleProps && Array.isArray(moduleProps)) modules.push(...moduleProps);
    if (moduleProps && !Array.isArray(moduleProps)) modules.push(moduleProps);

    let swiperProps: SwiperProps = props;
    if (modulesVariant?.options) swiperProps = { ...swiperProps, ...modulesVariant.options };

    if (!items || items.length === 0) return null;

    return (
        <Swiper
            modules={modules}
            {...swiperProps}>
            {items.map((item: BaseItemProps, i: number) => (
                <SwiperSlide key={i}>{item.children}</SwiperSlide>
            ))}

            {modulesVariant?.element && modulesVariant.element}
        </Swiper>
    );
};

export default Base;
