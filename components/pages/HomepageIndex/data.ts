import { HomepageIndexProps } from '@/components/pages/HomepageIndex';
import {
    BANNER_ITEMS,
    DISCOGRAPHY_ITEMS,
    FEATURED_DISCOGRAPHY_ITEM,
} from '@/components/pages/HomepageIndex/index.mock';
import { CARD_THUMBNAIL_3_ITEMS } from '@/components/common/Card/Thumbnail/index.mock';
import { LIST_SOCIAL_MEDIA } from '@/components/common/List/SocialMedia/index.mock';
import { SCHEDULE_ITEMS_3 } from '@/components/common/Schedule/index.mockup';

import parse from 'html-react-parser';

export const HomepageData = async (): Promise<HomepageIndexProps> => {
    const banner: HomepageIndexProps['entries']['banner'] = BANNER_ITEMS;

    const schedule: HomepageIndexProps['entries']['schedule'] = SCHEDULE_ITEMS_3;

    const discography: HomepageIndexProps['entries']['discography'] = {
        featured: FEATURED_DISCOGRAPHY_ITEM,
        discographies: DISCOGRAPHY_ITEMS,
    };

    const merchandise: HomepageIndexProps['entries']['merchandise'] = CARD_THUMBNAIL_3_ITEMS;

    const contact: HomepageIndexProps['entries']['contact'] = {
        description: parse(
            `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum eius eos et ipsum quas qui sapiente similique ut voluptas. A enim ex labore necessitatibus nesciunt pariatur quas quos soluta.</p>`
        ),
        social: LIST_SOCIAL_MEDIA,
        join: {
            description: parse(
                `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum eius eos et ipsum quas qui sapiente similique ut voluptas.</p>`
            ),
            cta: {
                href: '#',
                children: 'Join Our Group Chat',
            },
        },
    };

    return {
        entries: {
            banner,
            schedule,
            discography,
            merchandise,
            contact,
        },
    };
};
