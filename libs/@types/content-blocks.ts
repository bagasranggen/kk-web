import { CbContainerProps } from '@/components/common/ContentBlocks/CbContainer';
import { ClassnameProps } from '@/libs/@types/common';

export type ContentBlocksBaseProps = {} & Pick<CbContainerProps, 'isNested'>;

export type ContentBlocksComponentProps<Type, Props> = {
    order?: number;
    typeHandle?: Type;
} & (Props & ClassnameProps & Pick<ContentBlocksBaseProps, 'isNested'>);
