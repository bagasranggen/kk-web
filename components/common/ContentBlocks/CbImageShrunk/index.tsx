import React from 'react';
import CbContainer from '@/components/common/ContentBlocks/CbContainer';
import { ContentBlocksComponentProps } from '@/libs/@types';
import { CB_HANDLES } from '@/components/common/ContentBlocks/handles';
import Picture, { BaseProps } from '@/components/common/Picture';
import { createPicsumImage, createPictureItem } from '@/libs/factories';
import Columns from '@/components/common/Columns';
import CbText, { CbTextProps } from '@/components/common/ContentBlocks/CbText';
import Container from '@/components/common/Container';

export type CbImageShrunkProps = ContentBlocksComponentProps<
    typeof CB_HANDLES.IMAGE_SHRUNK,
    {
        media?: BaseProps['items'];
    } & Pick<CbTextProps, 'children'>
>;

const CbImageShrunk = ({ className, media, children }: CbImageShrunkProps): React.ReactElement => {
    return (
        <CbContainer
            className="cb cb--image-shrunk"
            spacing={className}>
            {media && media.length > 0 && <Picture items={media} />}

            {children && (
                <Container className="mt-6">
                    <Columns className="justify-center">
                        <Columns.Column
                            md={10}
                            lg={9}>
                            <CbText
                                isNested
                                align="center">
                                {children}
                            </CbText>
                        </Columns.Column>
                    </Columns>
                </Container>
            )}
        </CbContainer>
    );
};

export default CbImageShrunk;
