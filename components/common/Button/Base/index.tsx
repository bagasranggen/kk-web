import React, { Ref } from 'react';

import { BaseComponentProps } from '@/libs/@types';

import Link, { LinkProps } from '@/components/common/Link';

export type BaseAnchorProps = {
    as: 'anchor';
    linkAs?: LinkProps['as'];
} & Omit<LinkProps, 'as'>;

export type BaseButtonProps = BaseComponentProps<
    HTMLButtonElement,
    { as: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export type BaseDivProps = BaseComponentProps<
    HTMLDivElement,
    { as: undefined } & React.ButtonHTMLAttributes<HTMLDivElement>
>;

export type BaseProps = BaseAnchorProps | BaseButtonProps | BaseDivProps;

const Base = ({ ref, as, ...props }: BaseProps): React.ReactElement => {
    if (as === 'anchor') {
        return (
            <Link
                {...(props as BaseAnchorProps)}
                ref={ref}
                as={(props as BaseAnchorProps)?.linkAs}
            />
        );
    }

    if (as === 'button') {
        return (
            <button
                {...(props as BaseButtonProps)}
                ref={ref}
                type={(props?.type as any) ?? 'button'}
            />
        );
    }

    return (
        <div
            ref={ref as Ref<HTMLDivElement>}
            {...(props as BaseDivProps)}
        />
    );
};

export default Base;
