import { AboutIndexProps } from '@/components/pages/AboutIndex';
import { ABOUT_BANNER, ABOUT_CONTENT_BLOCKS } from '@/components/pages/AboutIndex/index.mock';

export const AboutData = async (): Promise<AboutIndexProps> => {
    return {
        entries: {
            banner: ABOUT_BANNER,
            contentBlocks: ABOUT_CONTENT_BLOCKS,
        },
    };
};
