import React from 'react';

import { ContentBlocksBaseProps } from '@/libs/@types';

import DynamicElement from '@/components/common/DynamicElement';
import { CB_COMPONENT_HANDLES } from '@/components/common/ContentBlocks/handlesIndex';
import { CbColumnsProps } from '@/components/common/ContentBlocks/CbColumns';
import { CbColumnStickyProps } from '@/components/common/ContentBlocks/CbColumnSticky';
import { CbImageProps } from '@/components/common/ContentBlocks/CbImage';
import { CbImageTextProps } from '@/components/common/ContentBlocks/CbImageText';
import { CbTextProps } from '@/components/common/ContentBlocks/CbText';

export type ContentBlocksItemProps =
    CbColumnsProps | CbColumnStickyProps | CbImageProps | CbImageTextProps | CbTextProps;

export type ContentBlocksProps = {
    items?: ContentBlocksItemProps[];
} & Pick<ContentBlocksBaseProps, 'isNested'>;

const ContentBlocks = ({ items, isNested }: ContentBlocksProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    return (
        <>
            {items.map((item, i) => {
                const component = item?.typeHandle ? CB_COMPONENT_HANDLES?.[item?.typeHandle] : undefined;

                let props = item;
                if (isNested) props = Object.assign(props, { isNested });

                return (
                    <DynamicElement
                        key={i}
                        handles={item?.typeHandle}
                        component={component as any}
                        props={props}>
                        {'children' in item && item?.children}
                    </DynamicElement>
                );
            })}
        </>
    );
};

export default ContentBlocks;
