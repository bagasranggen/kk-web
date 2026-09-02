import React, { PropsWithChildren } from 'react';

import { BaseComponentProps } from '@/libs/@types';

import DynamicWrapper from '@/components/common/DynamicWrapper';
import Container, { ContainerProps } from '@/components/common/Container';

export type CbContainerProps = {
    isNested?: boolean;
    hasContainer?: boolean;
} & (PropsWithChildren & Pick<ContainerProps, 'className'> & BaseComponentProps<HTMLDivElement>);

const CbContainer = ({ ref, isNested, hasContainer, className, children }: CbContainerProps): React.ReactElement => {
    return (
        <DynamicWrapper
            ref={ref}
            as={!isNested && hasContainer ? Container : 'div'}
            className={className}>
            {children}
        </DynamicWrapper>
    );
};

export default CbContainer;
