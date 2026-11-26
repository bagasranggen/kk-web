import React, { Fragment } from 'react';

import { SquareArrowOutUpRight } from 'lucide-react';

import Container from '@/components/common/Container';
import DynamicElement from '@/components/common/DynamicElement';
import Columns from '@/components/common/Columns';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Heading, { BaseProps as BaseHeadingProps } from '@/components/common/Heading';

export type ScheduleItemProps = {
    location?: Pick<BaseHeadingProps, 'children'> & Partial<Pick<BaseAnchorProps, 'href'>>;
    event?: Pick<BaseHeadingProps, 'children'> & Partial<Pick<BaseAnchorProps, 'href'>>;
    date?: React.ReactNode;
    time?: React.ReactNode;
    note?: React.ReactNode;
};

const ScheduleItem = ({ location, event, date, time, note }: ScheduleItemProps): React.ReactElement => {
    const hasLocationCta = !!location?.href;

    let locationBtnProps: BaseAnchorProps | undefined = undefined;
    if (location?.href) {
        locationBtnProps = {
            as: 'anchor',
            target: '_blank',
            href: location?.href,
        };
    }

    let eventBtnProps: BaseAnchorProps | undefined = undefined;
    if (event?.href) {
        eventBtnProps = {
            as: 'anchor',
            href: event?.href,
            target: '_blank',
            className: 'mt-1 inline-block',
        };
    }

    return (
        <Container>
            <Columns
                className="items-center"
                gutterY={1}>
                <Columns.Column
                    className="list__detail"
                    sm={5}
                    md={4}
                    lg={3}>
                    {location?.children && (
                        <DynamicElement
                            component={hasLocationCta ? Button : Fragment}
                            props={locationBtnProps}>
                            <Heading
                                as="h3"
                                className="list__location">
                                {location.children}

                                {/*{hasLocationCta && (*/}
                                {/*    <>*/}
                                {/*        {' '}*/}
                                {/*        <SquareArrowOutUpRight*/}
                                {/*            strokeWidth={3}*/}
                                {/*            className="w-[1.3rem] h-[1.3rem] md:w-[1.6rem] md:h-[1.6rem]"*/}
                                {/*        />*/}
                                {/*    </>*/}
                                {/*)}*/}
                            </Heading>
                        </DynamicElement>
                    )}

                    {date && <p className="list__title">{date}</p>}

                    {time && <p className="list__title">{time}</p>}
                </Columns.Column>

                <Columns.Column
                    sm={7}
                    md={8}
                    lg={9}>
                    {note && (
                        <div>
                            <span className="list__label">{note}</span>
                        </div>
                    )}

                    {event?.children && (
                        <DynamicElement
                            component={event?.href ? Button : Fragment}
                            props={eventBtnProps}>
                            <Heading
                                as="h2"
                                family="bodoni-moda"
                                className="list__heading">
                                {event.children}
                            </Heading>
                        </DynamicElement>
                    )}
                </Columns.Column>
            </Columns>
        </Container>
    );
};

export default ScheduleItem;
