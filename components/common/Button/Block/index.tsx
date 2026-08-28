import React from 'react';

import { ArrayStringProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/Button/Base';
import Icon from '@/components/common/Icon';

export type BlockProps = {} & BaseProps;

const Block = ({ className, children, ...props }: BlockProps): React.ReactElement => {
    let btnClass: ArrayStringProps = ['btn btn--block'];
    if (className) btnClass.push(className);
    btnClass = joinArrayString(btnClass);

    return (
        <>
            <Base
                className={btnClass}
                {...props}>
                {children}

                <div className='btn__icon'>
                    <Icon.Arrow />
                </div>
            </Base>
        </>
    );
};

export default Block;
