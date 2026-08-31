'use client';

import React, { Ref, useEffect } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { useScrollDirection } from '@/libs/hooks';
import { useLayoutStateContext } from '@/store/context';

import { useMeasure } from 'react-use';

import Button, { BaseButtonProps, HamburgerProps } from '@/components/common/Button';
import Icon, { LogoProps } from '@/components/common/Icon';
import Container from '@/components/common/Container';

export type NavigationProps = {
    isOpen?: HamburgerProps['active'];
    hamburger?: Pick<BaseButtonProps, 'onClick'>;
} & ClassnameProps;

const Navigation = ({ isOpen, className, hamburger }: NavigationProps): React.ReactElement => {
    const { setHeaderHeight } = useLayoutStateContext();
    const [navRef, { height, top }] = useMeasure();
    const { y, direction } = useScrollDirection();
    const isCenter = y > height / 2;

    let navClass: ArrayStringProps = ['nav'];
    if (isCenter && !isOpen) navClass.push('nav--center');
    if (isCenter && direction === 'down') navClass.push('nav--hide');
    if (className) navClass.push(className);
    navClass = joinArrayString(navClass);

    let color: LogoProps['color'] = 'dark';
    if (isOpen || (!isOpen && isCenter)) color = 'light';

    useEffect(() => {
        if (!height && height === 0) return;
        if (!top && top === 0) return;

        setHeaderHeight(height + top * 2);
    }, [height, top]);

    return (
        <nav
            ref={navRef as Ref<HTMLDivElement>}
            className={navClass}>
            <Container className="nav__container">
                <Icon.Logo
                    color={color}
                    className="nav__logo"
                />

                <Button.Hamburger
                    as="button"
                    active={isOpen}
                    color={color}
                    className="nav__hamburger"
                    onClick={hamburger?.onClick}
                />
            </Container>
        </nav>
    );
};

export default Navigation;
