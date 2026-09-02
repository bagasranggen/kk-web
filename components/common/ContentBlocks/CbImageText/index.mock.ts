import { CbImageTextProps } from '@/components/common/ContentBlocks/CbImageText';
import { createPicsumImage, createPictureItem } from '@/libs/factories';
import parse from 'html-react-parser';

export const CB_IMAGE_TEXT_MEDIA_MAIN: CbImageTextProps['mediaMain'] = [
    createPictureItem({
        item: createPicsumImage({ width: 540 * 2, height: 718 * 2 }),
        sizes: '(min-width: 992px) 33.75vw, (min-width: 768px) 41.536vw, 50vw',
    }),
];

export const CB_IMAGE_TEXT_MEDIA_SECONDARY: CbImageTextProps['mediaSecondary'] = [
    createPictureItem({
        item: createPicsumImage({ width: 882 * 2, height: 495 * 2 }),
        media: 992,
        sizes: '55.278vw',
    }),
    createPictureItem({
        item: createPicsumImage({ width: 800, height: 600 }),
        sizes: '(min-width: 992px) 55.278vw, (min-width: 768px) 41.536vw, 50vw',
    }),
];

export const CB_IMAGE_TEXT_CHILDREN: CbImageTextProps['children'] = parse(`
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem itaque quaerat rerum saepe
                            suscipit. At aut, cupiditate earum eius error harum illum laudantium quaerat quasi voluptas!
                            Ab eius in vitae?
                        </p>
                        
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eius minima officia quisquam
                            voluptatibus? Animi assumenda aut autem blanditiis commodi, consectetur cum debitis deleniti
                            deserunt dolorum eaque earum eligendi, esse et harum in ipsum laboriosam magnam maiores
                            molestias natus nostrum odio optio quidem quis sapiente sed veniam veritatis voluptas
                            voluptatum.
                        </p>
                        
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem commodi doloremque
                            dolorum, facilis labore necessitatibus perspiciatis sapiente voluptatem. Accusamus animi
                            dolore eos, est excepturi hic neque quia soluta unde?
                        </p>`);
