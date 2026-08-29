import React, { Ref } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { useScrollDirection } from '@/libs/hooks';

import { useMeasure } from 'react-use';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import Container from '@/components/common/Container';

export type NavigationProps = {} & ClassnameProps;

const Navigation = ({ className }: NavigationProps): React.ReactElement => {
    const [navRef, { height }] = useMeasure();
    const { y, direction } = useScrollDirection();
    const isCenter = y > height / 2;

    let navClass: ArrayStringProps = ['nav'];
    if (isCenter) navClass.push('nav--center');
    if (isCenter && direction === 'down') navClass.push('nav--hide');
    if (className) navClass.push(className);
    navClass = joinArrayString(navClass);

    return (
        <nav
            ref={navRef as Ref<HTMLDivElement>}
            className={navClass}>
            <Container className="nav__container">
                <Icon.Logo
                    color={isCenter ? 'light' : 'dark'}
                    className="nav__logo"
                />

                <Button.Hamburger
                    as="button"
                    color={isCenter ? 'light' : 'dark'}
                    className="nav__hamburger"
                />
            </Container>
        </nav>
    );
};

export default Navigation;
