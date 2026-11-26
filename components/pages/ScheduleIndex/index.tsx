import React from 'react';

import { PageIndexProps } from '@/libs/@types';

import { cn } from 'cn';

import Container from '@/components/common/Container';
import Schedule, { ScheduleProps } from '@/components/common/Schedule';
import Heading, { BaseProps } from '@/components/common/Heading';

export type ScheduleIndexProps = PageIndexProps<
    'schedule',
    {
        schedule?: ({
            title?: BaseProps['children'];
        } & Pick<ScheduleProps, 'items'>)[];
    }
>;

const ScheduleIndex = ({ entries }: ScheduleIndexProps): React.ReactElement => {
    return (
        <>
            <Container className="mt-15">
                <Heading variant="page">Schedule</Heading>
            </Container>

            {entries?.schedule && entries.schedule.length > 0 && (
                <>
                    {entries.schedule.map((item, i, arr) => {
                        const sectionClass = cn('mt-10', arr.length - 1 === i ? 'mb-10 md:mb-15' : undefined);

                        return (
                            <section
                                key={i}
                                className={sectionClass}>
                                {item?.title && (
                                    <Container>
                                        <Heading variant="section">{item.title}</Heading>
                                    </Container>
                                )}

                                {item?.items && item.items.length > 0 && (
                                    <Schedule
                                        className="mt-2 md:mt-4"
                                        items={item.items}
                                    />
                                )}
                            </section>
                        );
                    })}
                </>
            )}
        </>
    );
};

export default ScheduleIndex;
