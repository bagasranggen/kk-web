import React from 'react';

import { ContentBlocksComponentProps } from '@/libs/@types';

import { CB_HANDLES } from '@/components/common/ContentBlocks/handles';
import CbContainer from '@/components/common/ContentBlocks/CbContainer';
import CbText, { CbTextProps } from '@/components/common/ContentBlocks/CbText';
import Columns from '@/components/common/Columns';
import Picture, { BaseProps } from '@/components/common/Picture';

export type CbColumnStickyProps = ContentBlocksComponentProps<
    typeof CB_HANDLES.COLUMN_STICKY,
    { media?: BaseProps['items'][][] } & Pick<CbTextProps, 'children'>
>;

const CbColumnSticky = ({ isNested, className, media, children }: CbColumnStickyProps): React.ReactElement => {
    return (
        <CbContainer
            hasContainer
            isNested={isNested}
            className="cb cb--column-sticky"
            spacing={className}>
            <Columns gutterY={3}>
                <Columns.Column
                    lg={7}
                    className="pt-8">
                    {media && media.length > 0 && (
                        <Columns>
                            {media.map((item, i) => {
                                return (
                                    <Columns.Column
                                        key={i}
                                        className="flex flex-col gap-3">
                                        {item.map((itm, idx) => {
                                            return (
                                                <Picture
                                                    key={idx}
                                                    items={itm}
                                                />
                                            );
                                        })}
                                    </Columns.Column>
                                );
                            })}
                        </Columns>
                    )}
                </Columns.Column>

                <Columns.Column
                    lg={5}
                    className="">
                    <div className="bg-kk-accent-dark text-light h-full">
                        {children && (
                            <CbText
                                isNested
                                className="px-4 py-3 lg:sticky lg:top-0">
                                {children}
                            </CbText>
                        )}
                    </div>
                </Columns.Column>
            </Columns>
        </CbContainer>
    );
};

export default CbColumnSticky;
