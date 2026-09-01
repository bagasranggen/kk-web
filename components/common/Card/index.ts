import { Component } from '@/libs/@types';

import Thumbnail, { ThumbnailProps } from '@/components/common/Card/Thumbnail';

export type * from '@/components/common/Card/Thumbnail';

type CardComposition = {
    Thumbnail: Component<ThumbnailProps>;
};

export default Object.assign<{}, CardComposition>({}, { Thumbnail });
