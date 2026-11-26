import { SCHEDULE_ITEMS_3, SCHEDULE_ITEMS_6 } from '@/components/common/Schedule/index.mockup';

import { ScheduleIndexProps } from '@/components/pages/ScheduleIndex';

export const ScheduleData = async (): Promise<ScheduleIndexProps> => {
    const schedule: ScheduleIndexProps['entries']['schedule'] = [
        {
            title: 'February 2027',
            items: SCHEDULE_ITEMS_3,
        },
        {
            title: 'January 2027',
            items: SCHEDULE_ITEMS_6,
        },
    ];

    return {
        entries: {
            schedule,
        },
    };
};
