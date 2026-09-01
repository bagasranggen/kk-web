'use client';

import React, { useState } from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { useIsTouch } from '@/libs/hooks';

import { useWindowSize } from 'react-use';
import { SquareArrowOutUpRight } from 'lucide-react';

import List, { BaseProps } from '@/components/common/List';
import Columns from '@/components/common/Columns';
import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

export type HomepageScheduleProps = {
    items?: {}[];
} & Pick<BaseProps, 'className'>;

const HomepageSchedule = ({ className, items }: HomepageScheduleProps): React.ReactElement | null => {
    const isTouch = useIsTouch();
    const { width } = useWindowSize();
    const hasHover = width > 992 && !isTouch;
    const [previous, setPrevious] = useState<number | null>(null);
    const [current, setCurrent] = useState<number | null>(null);

    let listClass: ArrayStringProps = ['list list--schedule'];
    if (hasHover) listClass.push('list--has-hover');
    if (className) listClass.push(className);
    listClass = joinArrayString(listClass);

    let direction = 'down';
    if (typeof previous === 'number' && typeof current === 'number') {
        if (current < previous || (current === 0 && previous === 0)) direction = 'up';
    }

    if (!items || items.length === 0) return null;

    return (
        <List
            className={listClass}
            items={items.map((item, i: number) => {
                let listItemClass: ArrayStringProps = ['list__item'];
                if (current === i) listItemClass.push('list__item--current');
                if (previous === i) listItemClass.push('list__item--previous');
                if (direction === 'up') listItemClass.push('list__item--up');
                if (direction === 'down') listItemClass.push('list__item--down');
                listItemClass = joinArrayString(listItemClass);

                return {
                    onMouseEnter: () => setCurrent(i),
                    onMouseLeave: () => setPrevious(i),
                    className: listItemClass,
                    children: (
                        <Container>
                            <Columns
                                className="items-center"
                                gutterY={1}>
                                <Columns.Column
                                    className="list__detail"
                                    sm={5}
                                    md={4}
                                    lg={3}>
                                    <Button
                                        as="anchor"
                                        href="#">
                                        <Heading
                                            as="h3"
                                            className="list__location">
                                            JNM Block{' '}
                                            <SquareArrowOutUpRight
                                                strokeWidth={3}
                                                className="w-[1.3rem] h-[1.3rem] md:w-[1.6rem] md:h-[1.6rem]"
                                            />
                                        </Heading>
                                    </Button>
                                    <p className="list__title">2 April 2026</p>
                                    <p className="list__title">09.00 WIB</p>
                                </Columns.Column>

                                <Columns.Column
                                    sm={7}
                                    md={8}
                                    lg={9}>
                                    <div>
                                        <span className="list__label">Public</span>
                                    </div>
                                    <Button
                                        as="anchor"
                                        href="#"
                                        className="mt-1 inline-block list__heading">
                                        <Heading
                                            as="h2"
                                            family="bodoni-moda">
                                            JNM Block
                                        </Heading>
                                    </Button>
                                </Columns.Column>
                            </Columns>
                        </Container>
                    ),
                };
            })}
        />
    );
};

export default HomepageSchedule;
