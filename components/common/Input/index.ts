import { Component } from '@/libs/@types';

import Base, { BaseProps, BaseError } from '@/components/common/Input/Base';
import Label, { LabelProps } from '@/components/common/Input/Label';

export type * from '@/components/common/Input/Base';
export type * from '@/components/common/Input/Label';

type InputComposition = {
    Label: Component<LabelProps>;
};

export default Object.assign<Component<BaseProps>, InputComposition>(Base, { Label });

export { BaseError };
