import React, { useState } from 'react';

import { Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import Carousel from '@/components/common/Carousel';
import Picture from '@/components/common/Picture';

export type ProductMediaProps = {
    items?: any[];
    thumbnails?: any[];
};

const ProductMedia = ({ items, thumbnails }: ProductMediaProps): React.ReactElement | null => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    if (!items || items.length === 0) return null;
    if (!thumbnails || thumbnails.length === 0) return null;

    return (
        <div className="banner__media">
            <Carousel
                className="banner__gallery"
                modules={[Thumbs, Navigation]}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                items={items.map((item) => {
                    return {
                        children: <Picture items={item?.media ?? []} />,
                    };
                })}
            />

            <div className="banner__thumb">
                <Carousel
                    modules={[Thumbs]}
                    onSwiper={setThumbsSwiper}
                    slidesPerView={2}
                    spaceBetween={5}
                    watchSlidesProgress={true}
                    items={thumbnails.map((item) => {
                        return {
                            children: <Picture items={item?.media ?? []} />,
                        };
                    })}
                />
            </div>
        </div>
    );
};

export default ProductMedia;
