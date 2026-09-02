import React from 'react';
import Banner, { ImageTextProps } from '@/components/common/Banner';

export type AboutIndexProps = {
    entries: {
        banner?: Pick<ImageTextProps, 'media' | 'heading' | 'subHeading' | 'children'>;
    };
};

const AboutIndex = ({ entries }: AboutIndexProps): React.ReactElement => {
    return <>{entries.banner && <Banner.ImageText {...entries.banner} />}</>;
};

export default AboutIndex;
