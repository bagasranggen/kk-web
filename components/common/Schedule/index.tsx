'use client';

import React, { useState } from 'react';

import { useIsTouch } from '@/libs/hooks';

import { cn } from 'cn';
import { useWindowSize } from 'react-use';

import List, { BaseProps } from '@/components/common/List';
import ScheduleItem, { ScheduleItemProps } from '@/components/common/Schedule/ScheduleItem';

export type ScheduleProps = {
    items?: ScheduleItemProps[];
} & Pick<BaseProps, 'className'>;

const Schedule = ({ items, className }: ScheduleProps): React.ReactElement | null => {
    const isTouch = useIsTouch();
    const { width } = useWindowSize();
    const hasHover = width > 992 && !isTouch;
    const [previous, setPrevious] = useState<number | null>(null);
    const [current, setCurrent] = useState<number | null>(null);

    const listClass = cn(
        'list list--schedule',
        hasHover ? 'list--has-hover' : undefined,
        className ? className : undefined
    );

    let direction = 'down';
    if (typeof previous === 'number' && typeof current === 'number') {
        if (current < previous || (current === 0 && previous === 0)) direction = 'up';
    }

    if (!items || items.length === 0) return null;

    return (
        <List
            className={listClass}
            items={items.map((item, i: number) => {
                const listItemClass = cn(
                    'list__item',
                    current === i ? 'list__item--current' : undefined,
                    previous === i ? 'list__item--previous' : undefined,
                    direction === 'up' ? 'list__item--up' : undefined,
                    direction === 'down' ? 'list__item--down' : undefined
                );

                return {
                    onMouseEnter: () => setCurrent(i),
                    onMouseLeave: () => setPrevious(i),
                    className: listItemClass,
                    children: <ScheduleItem {...item} />,
                };
            })}
        />
    );
};

export default Schedule;
