import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Button/Base';
import Arrow, { ArrowProps } from '@/components/common/Button/Arrow';
import Block, { BlockProps } from '@/components/common/Button/Block';
import Hamburger, { HamburgerProps } from '@/components/common/Button/Hamburger';

export type * from '@/components/common/Button/Base';
export type * from '@/components/common/Button/Arrow';
export type * from '@/components/common/Button/Block';
export type * from '@/components/common/Button/Hamburger';

type ButtonComposition = {
    Arrow: Component<ArrowProps>;
    Block: Component<BlockProps>;
    Hamburger: Component<HamburgerProps>;
};

export default Object.assign<Component<BaseProps>, ButtonComposition>(Base, { Arrow, Block, Hamburger });
