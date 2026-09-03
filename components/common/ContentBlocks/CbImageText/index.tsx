'use client';

import React, { Ref } from 'react';

import { ContentBlocksComponentProps } from '@/libs/@types';

import { useMeasure } from 'react-use';

import { CB_HANDLES } from '@/components/common/ContentBlocks/handles';
import CbContainer from '@/components/common/ContentBlocks/CbContainer';
import CbText, { CbTextProps } from '@/components/common/ContentBlocks/CbText';
import Columns from '@/components/common/Columns';
import Picture, { BaseProps } from '@/components/common/Picture';

export type CbImageTextProps = ContentBlocksComponentProps<
    typeof CB_HANDLES.IMAGE_TEXT,
    {
        mediaMain?: BaseProps['items'];
        mediaSecondary?: BaseProps['items'];
        children?: CbTextProps['children'];
    }
>;

const CbImageText = ({
    isNested,
    className,
    mediaMain,
    mediaSecondary,
    children,
}: CbImageTextProps): React.ReactElement => {
    const [contentWrapperRef, { height: contentWrapperHeight }] = useMeasure();
    const [contentRef, { height: contentHeight }] = useMeasure();
    const [mediaRef, { height: mediaHeight }] = useMeasure();

    let style: React.CSSProperties | undefined = undefined;
    if (mediaHeight > 0 && contentHeight > 0 && contentWrapperHeight > 0) {
        style = Object.assign(style ?? {}, {
            '--image-text-content-height-difference': `${mediaHeight - (contentWrapperHeight - contentHeight - 80)}px`,
        } as React.CSSProperties);
    }

    return (
        <CbContainer
            hasContainer
            isNested={isNested}
            className="cb cb--text-image"
            spacing={className}>
            <Columns
                className="relative max-lg:items-end lg:pb-(--image-text-content-height-difference,0)"
                gutterX={{
                    xs: 0,
                    lg: 3,
                }}
                gutterY={{
                    xs: 3,
                    lg: 0,
                }}
                style={style}>
                <Columns.Column
                    xs={6}
                    lg={5}
                    className="lg:pt-8">
                    {mediaMain && mediaMain.length > 0 && <Picture items={mediaMain} />}
                </Columns.Column>

                <Columns.Column
                    ref={contentWrapperRef as Ref<HTMLDivElement>}
                    className="order-last lg:order-2"
                    md={10}
                    lg={5}
                    offset={{ md: 1 }}>
                    {children && (
                        <CbText
                            ref={contentRef as Ref<HTMLDivElement>}
                            isNested>
                            {children}
                        </CbText>
                    )}
                </Columns.Column>

                {mediaSecondary && mediaSecondary.length > 0 && (
                    <Columns.Column
                        ref={mediaRef as Ref<HTMLDivElement>}
                        xs={6}
                        lg={8}
                        className="lg:absolute lg:right-0 lg:bottom-0">
                        <Picture items={mediaSecondary} />
                    </Columns.Column>
                )}
            </Columns>
        </CbContainer>
    );
};

export default CbImageText;
