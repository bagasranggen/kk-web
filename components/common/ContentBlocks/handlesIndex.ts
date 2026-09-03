import { CB_HANDLES } from '@/components/common/ContentBlocks/handles';

import CbColumns from '@/components/common/ContentBlocks/CbColumns';
import CbColumnSticky from '@/components/common/ContentBlocks/CbColumnSticky';
import CbImage from '@/components/common/ContentBlocks/CbImage';
import CbImageShrunk from '@/components/common/ContentBlocks/CbImageShrunk';
import CbImageText from '@/components/common/ContentBlocks/CbImageText';
import CbText from '@/components/common/ContentBlocks/CbText';

export const CB_COMPONENT_HANDLES = {
    [CB_HANDLES.COLUMNS]: CbColumns,
    [CB_HANDLES.COLUMN_STICKY]: CbColumnSticky,
    [CB_HANDLES.IMAGE]: CbImage,
    [CB_HANDLES.IMAGE_SHRUNK]: CbImageShrunk,
    [CB_HANDLES.IMAGE_TEXT]: CbImageText,
    [CB_HANDLES.TEXT]: CbText,
} as const;
