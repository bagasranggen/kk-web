import { Component } from '@/libs/@types';

import Base, { BaseProps } from '@/components/common/List/Base';
import SocialMedia, { SocialMediaProps } from '@/components/common/List/SocialMedia';

export type * from '@/components/common/List/Base';
export type * from '@/components/common/List/SocialMedia';

type ListComposition = {
    SocialMedia: Component<SocialMediaProps>;
};

export default Object.assign<Component<BaseProps>, ListComposition>(Base, { SocialMedia });
