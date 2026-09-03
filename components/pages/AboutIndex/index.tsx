import React from 'react';

import Banner, { ImageTextProps } from '@/components/common/Banner';
import ContentBlocks, { ContentBlocksProps } from '@/components/common/ContentBlocks';

export type AboutIndexProps = {
    entries: {
        banner?: Pick<ImageTextProps, 'media' | 'heading' | 'subHeading' | 'children'>;
        contentBlocks?: ContentBlocksProps['items'];
    };
};

const AboutIndex = ({ entries }: AboutIndexProps): React.ReactElement => {
    return (
        <>
            {entries.banner && <Banner.ImageText {...entries.banner} />}

            <ContentBlocks items={entries.contentBlocks} />
        </>
    );
};

export default AboutIndex;
