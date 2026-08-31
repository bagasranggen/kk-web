import { HomepageScheduleProps } from '@/components/pages/HomepageIndex/HomepageSchedule';
import { createArrayFromNumber } from '@/libs/factories';

export const LIST_SCHEDULE: HomepageScheduleProps['items'] = createArrayFromNumber(4).map((_) => {
    return {};
});
