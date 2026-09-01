import React from 'react';

export type BaseSourceProps = React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;

const BaseSource = ({ media, src, srcSet, width, height, sizes }: BaseSourceProps): React.ReactElement => {
    const props: React.SourceHTMLAttributes<HTMLSourceElement> = {
        srcSet: srcSet ?? src,
        width,
        height,
        sizes,
        media,
    };

    return <source {...props} />;
};

export default BaseSource;
