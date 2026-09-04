import React from 'react';

import { BaseComponentProps, BaseRegularInputProps, InputRegularRef } from '@/libs/@types';
import { createInputHooks } from '@/libs/factories';

import { BaseInputHookProps } from '@/components/common/Input';

export type InputTextProps = BaseRegularInputProps & BaseInputHookProps & BaseComponentProps<InputRegularRef>;

const InputText = ({ ref, hook, value, ...props }: InputTextProps) => {
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
        <input
            {...props}
            {...inputHook}
            {...inputRef}
            {...(hook ? { defaultValue: value } : { value: value })}
        />
    );
};

export default InputText;
