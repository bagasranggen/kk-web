import React from 'react';

export type MergeRefProps<T> = (React.Ref<T> | undefined)[];

export const mergeRefs = <T>(...refs: MergeRefProps<T>) => {
    return (value: T | null) => {
        refs.forEach((ref) => {
            if (!ref) return;

            if (typeof ref === 'function') {
                ref(value);
            } else if (ref) {
                ref.current = value;
            }
        });
    };
};
