import React, { PropsWithChildren } from 'react';

import { ArrayStringProps, ClassnameProps } from '@/libs/@types';
import { cn, joinArrayString } from '@/libs/utils';

export type ProductLabelProps = {
    title: PropsWithChildren['children'];
    subTitle?: {} & Pick<React.HTMLAttributes<HTMLParagraphElement>, 'onClick'> & PropsWithChildren;
} & (ClassnameProps & PropsWithChildren);

const ProductLabel = ({ className, title, subTitle, children }: ProductLabelProps): React.ReactElement | null => {
    if (!children) return null;

    let labelClass: ArrayStringProps = ['banner__label'];
    if (className) labelClass.push(className);
    labelClass = joinArrayString(labelClass);

    return (
        <div className={labelClass}>
            <div className="banner__label-heading">
                {title && <p className="banner__label-title">{title}</p>}

                {subTitle?.children && (
                    <p
                        className={cn(
                            'banner__label-title banner__label-title--sub',
                            subTitle?.onClick ? 'underline cursor-pointer' : undefined
                        )}
                        onClick={subTitle?.onClick}>
                        {subTitle.children}
                    </p>
                )}
            </div>

            {children}
        </div>
    );
};

export default ProductLabel;
