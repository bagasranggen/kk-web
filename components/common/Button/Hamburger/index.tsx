import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/Button/Base';

const SHOW_HELPER = false;

export type HamburgerProps = {
    active?: boolean;
    color?: 'dark' | 'light';
    withBorder?: boolean;
} & BaseProps;

const Hamburger = ({
    className,
    color = 'dark',
    withBorder = true,
    active,
    ...props
}: HamburgerProps): React.ReactElement => {
    let btnClass: ArrayStringProps = ['btn btn--hamburger'];
    if (color === 'dark') btnClass.push('btn--dark');
    if (color === 'light') btnClass.push('btn--light');
    if (withBorder) btnClass.push('btn--border');
    if (active) btnClass.push('btn--active');
    if (className) btnClass.push(className);
    btnClass = joinArrayString(btnClass);

    const helper = (
        <>
            <div className="btn__icon btn__icon--helper" />
            <div className="btn__icon btn__icon--x-helper" />
        </>
    );

    return (
        <Base
            className={btnClass}
            {...props}>
            <div className="btn__icon" />
            {SHOW_HELPER && helper}
            <div className="btn__icon" />
            {SHOW_HELPER && helper}
            <div className="btn__icon" />
        </Base>
    );
};

export default Hamburger;
