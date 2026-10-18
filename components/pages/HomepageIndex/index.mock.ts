import { createArrayFromNumber, createBackgroundImage, createPicsumImage, createPictureItem } from '@/libs/factories';

import { HomepageScheduleProps } from '@/components/pages/HomepageIndex/HomepageSchedule';
import { HomepageBannerProps } from '@/components/pages/HomepageIndex/HomepageBanner';
import { HomepageDiscographyProps } from '@/components/pages/HomepageIndex/HomepageDiscography';

import { LIST_SOCIAL_MEDIA } from '@/components/common/List/SocialMedia/index.mock';

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
                createPicsumImage({
                    id: 239 + i,
                    width: 1440 * 2,
                    height: 768 * 2,
                })
            ),
            desktop: createBackgroundImage(
                createPicsumImage({
                    id: 239 + i,
                    width: 1440 * 2,
                    height: 768 * 2,
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

export const FEATURED_DISCOGRAPHY_ITEM: HomepageDiscographyProps['featured'] = {
    media: [
        createPictureItem({
            item: createPicsumImage({ width: 1000, height: 1000 }),
            sizes: '(min-width: 992px) 33.7958vw, (min-width: 768px) 39.5833vw',
        }),
    ],
    social: LIST_SOCIAL_MEDIA,
    title: 'Verhaal',
    date: '2026.7.4',
    playlist: [
        {
            children: 'Lala lalala',
        },
        {
            children: 'Lala lalala',
        },
        {
            children: 'Lala lalala',
        },
        {
            children: 'Lala lalala',
        },
    ],
};

export const DISCOGRAPHY_ITEMS: HomepageDiscographyProps['discographies'] = createArrayFromNumber(2).map((_, i) => {
    const isOdd = i % 2 === 0;

    let title = 'Retrorika Metropolitan';
    if (isOdd) title = 'Romansa';

    return {
        media: [
            createPictureItem({
                item: createPicsumImage({ width: 600, height: 600 }),
                sizes: '(min-width: 992px) 15.8562vw, (min-width: 768px) 19.1406vw',
            }),
        ],
        social: LIST_SOCIAL_MEDIA,
        title,
        date: '2026.7.4',
    };
});
