import { createArrayFromNumber, createBackgroundImage, createPicsumImage, createPictureItem } from '@/libs/factories';

import { HomepageScheduleProps } from '@/components/pages/HomepageIndex/HomepageSchedule';
import { HomepageBannerProps } from '@/components/pages/HomepageIndex/HomepageBanner';

export const LIST_SCHEDULE: HomepageScheduleProps['items'] = createArrayFromNumber(4).map((_) => {
    return {};
});

export const BANNER_ITEMS: HomepageBannerProps['items'] = createArrayFromNumber(4).map((_, i) => {
    const isOdd = i % 2 === 0;

    let title = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ea nostrum veniam.';
    if (isOdd) title = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

    return {
        media: {
            mobile: createBackgroundImage(
                createPictureItem({
                    item: createPicsumImage({
                        id: 239 + i,
                        width: 768 * 2,
                        height: 1024 * 2,
                    }),
                })
            ),
            desktop: createBackgroundImage(
                createPictureItem({
                    item: createPicsumImage({
                        id: 239 + i,
                        width: 1440 * 2,
                        height: 768 * 2,
                    }),
                })
            ),
        },
        overlay: isOdd ? 2 : 6,
        title,
        cta: {
            href: '#',
            children: 'Read more',
        },
    };
});
