import { createArrayFromNumber } from '@/libs/factories';
import { SocialMediaProps } from '@/components/common/List/SocialMedia/index';

export const LIST_SOCIAL_MEDIA: SocialMediaProps['items'] = createArrayFromNumber(4).map((_, i) => {
    return {
        cta: {
            href: '#',
            target: i % 2 === 0 ? '_blank' : undefined,
        },
    };
});
