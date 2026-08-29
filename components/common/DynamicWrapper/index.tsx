import React, { Fragment, PropsWithChildren } from 'react';

import { Component, ElementTagsProps, FragmentTagsProps } from '@/libs/@types';

export type DynamicWrapperProps<Props> = {
    as?: ElementTagsProps | Component<any>;
} & (PropsWithChildren & Props);

const DynamicWrapper = <Props,>({ as, children, ...props }: DynamicWrapperProps<Props>): React.ReactElement => {
    let Wrapper: FragmentTagsProps | ElementTagsProps | Component<any> = Fragment;
    if (as) Wrapper = as;

    let wrapperProps = {};
    if (as) wrapperProps = Object.assign(wrapperProps, props);

    return <Wrapper {...wrapperProps}>{children}</Wrapper>;
};

export default DynamicWrapper;
