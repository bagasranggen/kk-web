import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Button/Base';
import Block, { BlockProps } from '@/components/common/Button/Block';

export type * from '@/components/common/Button/Base';
export type * from '@/components/common/Button/Block';

type ButtonComposition = {
    Block: Component<BlockProps>;
};

export default Object.assign<Component<BaseProps>, ButtonComposition>(Base, { Block });
