import Base, { BaseProps, BaseError } from '@/components/common/Input/Base';
import { Component } from '@/libs/@types';

export type * from '@/components/common/Input/Base';

type InputComposition = {};

export default Object.assign<Component<BaseProps>, InputComposition>(Base, {});

export { BaseError };
