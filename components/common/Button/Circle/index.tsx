import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/Button/Base';

export type CircleProps = {
    color?: 'dark' | 'light';
    size?: 'sm' | 'md';
} & BaseProps;

const Circle = ({ className, color = 'dark', size = 'md', ...props }: CircleProps): React.ReactElement => {
    let btnClass: ArrayStringProps = ['btn btn--circle'];
    if (color === 'dark') btnClass.push('btn--dark');
    if (color === 'light') btnClass.push('btn--light');
    if (size === 'md') btnClass.push('btn--md');
    if (size === 'sm') btnClass.push('btn--sm');
    if (className) btnClass.push(className);
    btnClass = joinArrayString(btnClass);

    return (
        <Base
            className={btnClass}
            {...props}
        />
    );
};

export default Circle;
