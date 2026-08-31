import React, { ExoticComponent, FragmentProps, JSX } from 'react';

export type BaseComponentProps<Ref, Props = unknown> = {
    ref?: React.Ref<Ref>;
} & Props;

export type Component<Props> = { (props: Props): React.ReactElement | null };

export type ClassnameProps = { className?: string };

export type ArrayStringProps = string[] | string;

export type ElementTagsProps = keyof JSX.IntrinsicElements;

export type FragmentTagsProps = ExoticComponent<FragmentProps>;

export type BreakpointsProps = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
