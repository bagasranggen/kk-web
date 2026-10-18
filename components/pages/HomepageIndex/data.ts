import { HomepageIndexProps } from '@/components/pages/HomepageIndex/index';
import {
    BANNER_ITEMS,
    DISCOGRAPHY_ITEMS,
    FEATURED_DISCOGRAPHY_ITEM,
    LIST_SCHEDULE,
} from '@/components/pages/HomepageIndex/index.mock';
import { CARD_THUMBNAIL_3_ITEMS } from '@/components/common/Card/Thumbnail/index.mock';
import { LIST_SOCIAL_MEDIA } from '@/components/common/List/SocialMedia/index.mock';
import parse from 'html-react-parser';

export const HomepageData = async (): Promise<HomepageIndexProps> => {
    const banner: HomepageIndexProps['entries']['banner'] = BANNER_ITEMS;

    const schedule: HomepageIndexProps['entries']['schedule'] = LIST_SCHEDULE;

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
