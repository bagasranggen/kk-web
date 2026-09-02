'use client';

import React, { PropsWithChildren, Ref } from 'react';

import { useMeasure } from 'react-use';

import Container from '@/components/common/Container';
import Columns from '@/components/common/Columns';
import Picture, { BaseProps } from '@/components/common/Picture';

export type CbImageTextProps = {
    mediaMain?: BaseProps['items'];
    mediaSecondary?: BaseProps['items'];
} & PropsWithChildren;

const CbImageText = ({ mediaMain, mediaSecondary, children }: CbImageTextProps): React.ReactElement => {
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
        <Container>
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
                    {children && <div ref={contentRef as Ref<HTMLDivElement>}>{children}</div>}
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
        </Container>
    );
};

export default CbImageText;
