export type BaseComponentProps<Ref, Props = unknown> = {
    ref?: React.Ref<Ref>;
} & Props;

export type Component<Props> = { (props: Props): React.ReactElement | null };

export type ArrayStringProps = string[] | string;
