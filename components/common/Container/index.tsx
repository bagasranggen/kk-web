import React, { PropsWithChildren } from 'react';

import { ArrayStringProps, BaseComponentProps, ElementTagsProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import DynamicWrapper from '@/components/common/DynamicWrapper';

export type ContainerProps = {
    as?: Extract<ElementTagsProps, 'section' | 'div'>;
    type?: 'fluid' | 'regular' | 'full-screen' | 'none';
} & (PropsWithChildren & React.HTMLAttributes<HTMLDivElement> & BaseComponentProps<HTMLDivElement>);

const Container = ({
    as = 'div',
    type = 'regular',
    className,
    children,
    ref,
    ...props
}: ContainerProps): React.ReactElement => {
    let containerClass: ArrayStringProps = [];
    if (type === 'regular') containerClass.push('container');
    if (type === 'fluid') containerClass.push('container-fluid');
    if (type === 'full-screen') containerClass.push('container-full');
    if (className) containerClass.push(className);
    containerClass = joinArrayString(containerClass);

    return (
        <DynamicWrapper
            as={as}
            ref={ref}
            className={containerClass}
            {...props}>
            {children}
        </DynamicWrapper>
    );
};

export default Container;
