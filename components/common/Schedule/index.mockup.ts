import { createArrayFromNumber } from '@/libs/factories/createArrayFromNumber';
import { ScheduleProps } from '@/components/common/Schedule';

export const SCHEDULE_ITEMS_3: ScheduleProps['items'] = createArrayFromNumber(3).map((_, i) => {
    const isOdd = i % 2 === 0;

    return {
        location: {
            href: !isOdd ? '#' : undefined,
            children: 'JNM Block',
        },
        event: {
            href: !isOdd ? '#' : undefined,
            children: 'ARTJOG 2027',
        },
        date: `${2 + i} April 2026`,
        time: '09.00 WIB',
        note: isOdd ? 'private' : 'public',
    };
});

export const SCHEDULE_ITEMS_6: ScheduleProps['items'] = createArrayFromNumber(6).map((_, i) => {
    const isOdd = i % 2 === 0;

    return {
        location: {
            href: !isOdd ? '#' : undefined,
            children: 'JNM Block',
        },
        event: {
            href: !isOdd ? '#' : undefined,
            children: 'ARTJOG 2027',
        },
        date: `${2 + i} April 2026`,
        time: '09.00 WIB',
        note: isOdd ? 'private' : 'public',
    };
});
