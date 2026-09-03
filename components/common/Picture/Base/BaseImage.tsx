import React from 'react';

export type BaseImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

const BaseImage = ({
    className,
    src,
    srcSet,
    width,
    height,
    loading,
    sizes,
    alt,
}: BaseImageProps): React.ReactElement => {
    const props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> = {
        src,
        srcSet,
        width,
        height,
        loading,
        sizes,
        className,
    };

    return (
        <img
            {...props}
            alt={alt}
        />
    );
};

export default BaseImage;
