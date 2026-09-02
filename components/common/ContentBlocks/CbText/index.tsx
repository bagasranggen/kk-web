import React, { PropsWithChildren } from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import CbContainer, { CbContainerProps } from '@/components/common/ContentBlocks/CbContainer';

export type CbTextProps = {
    align?: 'left' | 'center' | 'right';
} & (Pick<CbContainerProps, 'isNested' | 'ref' | 'className'> & PropsWithChildren);

const CbText = ({ ref, isNested, className, align, children }: CbTextProps): React.ReactElement | null => {
    let textClass: ArrayStringProps = ['cb cb--text'];
    if (align === 'center') textClass.push('text-center');
    if (align === 'right') textClass.push('text-end');
    if (className) textClass.push(className);
    textClass = joinArrayString(textClass);

    if (!children) return null;

    return (
        <CbContainer
            ref={ref}
            hasContainer
            isNested={isNested}
            className={textClass}>
            {children}
        </CbContainer>
    );
};

export default CbText;
