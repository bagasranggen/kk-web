import { createPicsumImage, createPictureItem } from '@/libs/factories';

import parse from 'html-react-parser';

import { ImageTextProps } from '@/components/common/Banner';

export const IMAGE_TEXT_MEDIA: ImageTextProps['media'] = [
    createPictureItem({
        item: createPicsumImage({ width: 2000, height: 1100 }),
        sizes: '(max-width: 991.98px) 81.417vw, 100vw',
        loading: 'eager',
    }),
];

export const IMAGE_TEXT_HEADING: ImageTextProps['heading'] = 'Lorem ipsum dolor sit.';

export const IMAGE_TEXT_HEADING_LONGER: ImageTextProps['heading'] =
    'Lorem ipsum dolor sit. consectetur adipisicing elit.';

export const IMAGE_TEXT_SUB_HEADING: ImageTextProps['subHeading'] =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, officiis?';

export const IMAGE_TEXT_SUB_CHILDREN: ImageTextProps['children'] = parse(`<p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa esse nam sapiente totam,
                        velit. Dolorem iste nesciunt pariatur tempore voluptatem? Eligendi iste perferendis repellat
                        saepe sint temporibus unde voluptas!
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium error eveniet in maiores
                        quis? Aliquam eius expedita maiores molestiae nam non unde voluptas! Animi assumenda deleniti
                        eaque maxime nobis suscipit.
                    </p>`);

export const IMAGE_TEXT_SUB_CHILDREN_LONGER: ImageTextProps['children'] = parse(`<p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa esse nam sapiente totam,
                        velit. Dolorem iste nesciunt pariatur tempore voluptatem? Eligendi iste perferendis repellat
                        saepe sint temporibus unde voluptas!
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium error eveniet in maiores
                        quis? Aliquam eius expedita maiores molestiae nam non unde voluptas! Animi assumenda deleniti
                        eaque maxime nobis suscipit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa esse nam sapiente totam,
                        velit. Dolorem iste nesciunt pariatur tempore voluptatem? Eligendi iste perferendis repellat
                        saepe sint temporibus unde voluptas!
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium error eveniet in maiores
                        quis? Aliquam eius expedita maiores molestiae nam non unde voluptas! Animi assumenda deleniti
                        eaque maxime nobis suscipit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa esse nam sapiente totam,
                        velit. Dolorem iste nesciunt pariatur tempore voluptatem? Eligendi iste perferendis repellat
                        saepe sint temporibus unde voluptas!
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium error eveniet in maiores
                        quis? Aliquam eius expedita maiores molestiae nam non unde voluptas! Animi assumenda deleniti
                        eaque maxime nobis suscipit.
                    </p>`);
