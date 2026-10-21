import { MainProps } from '@/components/layout/Main';
import { MENU_ITEMS } from '@/components/pages/LayoutIndex/index.mock';
import { LIST_SOCIAL_MEDIA } from '@/components/common/List/SocialMedia/index.mock';

export const LayoutData = async (): Promise<MainProps> => {
    return {
        menu: {
            items: MENU_ITEMS,
            social: LIST_SOCIAL_MEDIA,
        },
    };
};
