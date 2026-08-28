import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/Button/Base';

const SHOW_HELPER = false;

export type HamburgerProps = {
    active?: boolean;
} & BaseProps;

const Hamburger = ({ className, active, ...props }: HamburgerProps): React.ReactElement => {
    let btnClass: ArrayStringProps = ['btn btn--hamburger'];
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
