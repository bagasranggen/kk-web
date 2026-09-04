import React from 'react';

import { BaseComponentProps, InputSelectRef } from '@/libs/@types';
import { createInputHooks } from '@/libs/factories';

import { BaseInputHookProps } from '@/components/common/Input';

export type InputSelectItemProps = React.OptionHTMLAttributes<HTMLOptionElement>;

export type BaseInputSelectProps = {
    items?: InputSelectItemProps[];
} & React.SelectHTMLAttributes<InputSelectRef>;

export type InputSelectProps = BaseInputSelectProps & BaseInputHookProps & BaseComponentProps<InputSelectRef>;

const InputSelect = ({ ref, hook, items, ...props }: InputSelectProps) => {
    if (!items || items.length === 0) return null;

    const inputHook = createInputHooks(hook, props);

    let inputRef = { ref: ref };
    if (hook && inputHook) {
        inputRef = {
            ref: (e) => {
                inputHook?.ref(e);

                if (ref && 'current' in ref && e) (ref as any).current = e;
            },
        };
    }

    return (
        <select
            {...props}
            {...inputHook}
            {...inputRef}>
            {items.map((item: InputSelectItemProps, i: number) => {
                return (
                    <option
                        key={i}
                        {...item}
                    />
                );
            })}
        </select>
    );
};

export default InputSelect;
