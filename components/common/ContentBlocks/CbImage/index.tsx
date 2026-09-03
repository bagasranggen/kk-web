import React from 'react';

import { ContentBlocksComponentProps } from '@/libs/@types';

import { CB_HANDLES } from '@/components/common/ContentBlocks/handles';
import CbContainer from '@/components/common/ContentBlocks/CbContainer';
import Picture, { BaseProps } from '@/components/common/Picture';

export type CbImageProps = ContentBlocksComponentProps<typeof CB_HANDLES.IMAGE, Pick<BaseProps, 'items'>>;

const CbImage = ({ items, isNested, className }: CbImageProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <CbContainer
            hasContainer
            isNested={isNested}
            className="cb cb--image"
            spacing={className}>
            <Picture items={items} />
        </CbContainer>
    );
};

export default CbImage;
