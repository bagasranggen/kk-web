import { Component } from '@/libs/@types';

import Arrow, { ArrowProps } from '@/components/common/Icon/Arrow';
import Logo, { LogoProps } from '@/components/common/Icon/Logo';

export type * from '@/components/common/Icon/Arrow';
export type * from '@/components/common/Icon/Logo';

type IconComposition = {
    Arrow: Component<ArrowProps>;
    Logo: Component<LogoProps>;
};

export default Object.assign<{}, IconComposition>({}, { Arrow, Logo });
