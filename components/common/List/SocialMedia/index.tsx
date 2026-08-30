import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/List/Base';
import Button, { BaseAnchorProps, CircleProps } from '@/components/common/Button';
import Icon from '@/components/common/Icon';

export type SocialMediaItemProps = {
    cta: Pick<BaseAnchorProps, 'href' | 'target'>;
};

export type SocialMediaProps = {
    items?: SocialMediaItemProps[];
    direction?: 'vertical' | 'horizontal';
    size?: 'sm' | 'md' | 'lg';
} & Omit<BaseProps, 'items'> &
    Pick<CircleProps, 'color'>;

const SocialMedia = ({
    className,
    direction = 'horizontal',
    size = 'md',
    color = 'dark',
    items,
    ...props
}: SocialMediaProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    let listClass: ArrayStringProps = ['list list--social-media'];
    if (direction === 'horizontal') listClass.push('list--horizontal');
    if (direction === 'vertical') listClass.push('list--vertical');
    if (size === 'sm') listClass.push('list--sm');
    if (size === 'md') listClass.push('list--md');
    if (size === 'lg') listClass.push('list--lg');
    if (className) listClass.push(className);
    listClass = joinArrayString(listClass);

    return (
        <Base
            className={listClass}
            items={items.map((item) => ({
                children: (
                    <Button.Circle
                        as="anchor"
                        color={color}
                        size={size === 'sm' ? 'sm' : 'md'}
                        {...item.cta}>
                        <Icon.AppleMusic color={color} />
                    </Button.Circle>
                ),
            }))}
            {...props}
        />
    );
};

export default SocialMedia;
