export type CreatePicsumImageProps = {
    alt?: string;
} & Partial<Record<'id' | 'width' | 'height', number>>;

export const createPicsumImage = ({ id = 239, width = 600, height = 450, alt }: CreatePicsumImageProps) => {
    return {
        src: `https://picsum.photos/id/${id}/${width}/${height}`,
        width,
        height,
        alt: alt ?? `image ${id}`,
    };
};
