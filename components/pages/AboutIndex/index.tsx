import React from 'react';

import { PageIndexProps } from '@/libs/@types';

import Banner, { ImageTextProps } from '@/components/common/Banner';
import ContentBlocks, { ContentBlocksProps } from '@/components/common/ContentBlocks';

export type AboutIndexProps = PageIndexProps<
    'about',
    {
        banner?: Pick<ImageTextProps, 'media' | 'heading' | 'subHeading' | 'children'>;
        contentBlocks?: ContentBlocksProps['items'];
    }
>;

const AboutIndex = ({ entries }: AboutIndexProps): React.ReactElement => {
    return (
        <>
            {entries.banner && (
                <Banner.ImageText
                    className="mt-15"
                    {...entries.banner}
                />
            )}

            <ContentBlocks items={entries.contentBlocks} />
        </>
    );
};

export default AboutIndex;
