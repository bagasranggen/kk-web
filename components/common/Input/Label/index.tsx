'use client';

import React, { useState } from 'react';

import { cn } from 'cn';

import Base, { BaseProps, BaseError } from '@/components/common/Input/Base';

export type LabelProps = {} & (Omit<BaseProps, 'id' | 'placeholder'> & Required<Pick<BaseProps, 'id' | 'placeholder'>>);

const Label = ({ id, placeholder, onFocus, onBlurCapture, error, ...props }: LabelProps): React.ReactElement => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const inputGroupClass = cn(
        'input input--label',
        isFocus ? 'input--focus' : undefined,
        props?.value ? 'input--focus' : undefined
    );

    return (
        <>
            <div className={inputGroupClass}>
                <Base
                    id={id}
                    className="peer"
                    placeholder={placeholder}
                    onFocus={(e: any) => {
                        setIsFocus(true);
                        if (onFocus) onFocus(e);
                    }}
                    onBlurCapture={(e: any) => {
                        setIsFocus(false);
                        if (onBlurCapture) onBlurCapture(e);
                    }}
                    {...props}
                />

                <label htmlFor={id}>
                    {placeholder}
                    {(props?.required || props?.hook?.required) && <sup className="text-rose-500">*</sup>}
                </label>
            </div>

            {error && <BaseError className="mt-0.5">{error}</BaseError>}
        </>
    );
};

export default Label;
