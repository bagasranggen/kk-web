'use client';

import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString, mergeRefs } from '@/libs/utils';
import { useIsTouch } from '@/libs/hooks';

import { useMeasure, useWindowSize } from 'react-use';

import Base, { BaseProps } from '@/components/common/Button/Base';
import Icon, { ArrowProps } from '@/components/common/Icon';

export type BlockProps = {
    color?: NonNullable<ArrowProps['color']> | 'primary' | 'accent';
    active?: boolean;
} & (BaseProps & Pick<ArrowProps, 'size'>);

const Block = ({
    className,
    children,
    color = 'dark',
    size,
    active,
    ref,
    style: styleProps,
    ...props
}: BlockProps): React.ReactElement => {
    const isTouch = useIsTouch();
    const { width: windowWidth } = useWindowSize();
    const hasAnimation = !isTouch && windowWidth > 992 && !active;
    const [buttonRef, { width: buttonWidth }] = useMeasure();
    const [iconRef, { width: iconWidth }] = useMeasure();

    let btnClass: ArrayStringProps = ['btn btn--block'];
    if (color === 'dark') btnClass.push('btn--dark');
    if (color === 'light') btnClass.push('btn--light');
    if (color === 'primary') btnClass.push('btn--primary');
    if (color === 'accent') btnClass.push('btn--accent');
    if (size === 'lg') btnClass.push('btn--lg');
    if (active) btnClass.push('btn--active');
    if (hasAnimation) btnClass.push('btn--animate');
    if (className) btnClass.push(className);
    btnClass = joinArrayString(btnClass);

    let style: React.CSSProperties | undefined = undefined;
    if (hasAnimation && iconWidth > 0 && buttonWidth > 0) {
        style = Object.assign(style ?? {}, {
            '--btn-block-scale': (buttonWidth * 2) / iconWidth,
        } as React.CSSProperties);
    }
    if (styleProps) style = Object.assign(style ?? {}, styleProps);

    return (
        <Base
            className={btnClass}
            ref={mergeRefs(buttonRef, ref)}
            style={style}
            {...props}>
            <span className="btn__text">{children}</span>

            <div
                ref={iconRef as React.Ref<HTMLDivElement>}
                className="btn__icon">
                <Icon.Arrow
                    color={color === 'light' ? 'dark' : 'light'}
                    size={size}
                />
            </div>
        </Base>
    );
};

export default Block;
