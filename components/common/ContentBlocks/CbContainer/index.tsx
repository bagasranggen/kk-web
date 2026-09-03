import React, { PropsWithChildren } from 'react';

import { ArrayStringProps, BaseComponentProps, ClassnameProps } from '@/libs/@types';

import DynamicWrapper from '@/components/common/DynamicWrapper';
import Container, { ContainerProps } from '@/components/common/Container';
import { joinArrayString } from '@/libs/utils';

export type CbContainerProps = {
    isNested?: boolean;
    hasContainer?: boolean;
    spacing?: ClassnameProps['className'];
} & (PropsWithChildren & Pick<ContainerProps, 'className'> & BaseComponentProps<HTMLDivElement>);

const CbContainer = ({
    ref,
    isNested,
    hasContainer,
    className,
    spacing,
    children,
}: CbContainerProps): React.ReactElement => {
    let wrapperClassName: ArrayStringProps = className ? [className] : [];
    if (spacing) wrapperClassName.push(spacing);
    wrapperClassName = joinArrayString(wrapperClassName);

    return (
        <DynamicWrapper
            ref={ref}
            as={!isNested && hasContainer ? Container : 'div'}
            className={wrapperClassName}>
            {children}
        </DynamicWrapper>
    );
};

export default CbContainer;
