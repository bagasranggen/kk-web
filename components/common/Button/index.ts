import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/Button/Base';
import Arrow, { ArrowProps } from '@/components/common/Button/Arrow';
import Block, { BlockProps } from '@/components/common/Button/Block';
import Circle, { CircleProps } from '@/components/common/Button/Circle';
import Hamburger, { HamburgerProps } from '@/components/common/Button/Hamburger';

export type * from '@/components/common/Button/Base';
export type * from '@/components/common/Button/Arrow';
export type * from '@/components/common/Button/Block';
export type * from '@/components/common/Button/Circle';
export type * from '@/components/common/Button/Hamburger';

type ButtonComposition = {
    Arrow: Component<ArrowProps>;
    Block: Component<BlockProps>;
    Circle: Component<CircleProps>;
    Hamburger: Component<HamburgerProps>;
};

export default Object.assign<Component<BaseProps>, ButtonComposition>(Base, { Arrow, Block, Circle, Hamburger });
