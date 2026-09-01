import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Picture/Base';

export type * from '@/components/common/Picture/Base';

export type PictureComposition = {};

export default Object.assign<Component<BaseProps>, PictureComposition>(Base, {});
