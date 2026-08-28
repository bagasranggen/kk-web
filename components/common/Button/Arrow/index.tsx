import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/Button/Base';

export type ArrowProps = {
    color?: 'dark' | 'light';
} & BaseProps;

const Arrow = ({ children, className, color = 'dark', ...props }: ArrowProps): React.ReactElement => {
    let btnClass: ArrayStringProps = ['btn btn--arrow'];
    if (color === 'dark') btnClass.push('btn--dark');
    if (color === 'light') btnClass.push('btn--light');
    if (className) btnClass.push(className);
    btnClass = joinArrayString(btnClass);

    return (
        <Base
            className={btnClass}
            {...props}>
            <span className="btn__text">{children}</span>
        </Base>
    );
};

export default Arrow;
