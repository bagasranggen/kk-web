import React from 'react';

import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css/pagination';

import { cn } from 'cn';

import Carousel from '@/components/common/Carousel';
import Heading, { BaseProps } from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import { OverlayProps } from '@/components/common/Overlay';
import Container from '@/components/common/Container';

export type HomepageBannerProps = {
    items?: {
        overlay?: OverlayProps['opacity'];
        media?: Record<'desktop' | 'mobile', string | undefined>;
        title?: BaseProps['children'];
        cta?: Pick<BaseAnchorProps, 'href' | 'target' | 'children'>;
    }[];
    cta?: Pick<BaseAnchorProps, 'href' | 'target' | 'children'>;
};

const HomepageBanner = ({ items, cta }: HomepageBannerProps): React.ReactElement | null => {
    if (!items || items.length === 0) return null;

    let BannerButton = <></>;
    if (cta && cta?.href) {
        BannerButton = (
            <Container className="banner__btn-container">
                <Button.Arrow
                    as="anchor"
                    color="light"
                    {...cta}
                />
            </Container>
        );
    }

    return (
        <>
            <Carousel
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 5000,
                }}
                pagination={{
                    enabled: true,
                    clickable: true,
                    bulletClass: 'swiper-pagination__bullet',
                    bulletActiveClass: 'swiper-pagination__bullet--active',
                    renderBullet: (index, className) => {
                        const number = String(index + 1).padStart(2, '0');

                        return `<span class="${className}">${number}</span>`;
                    },
                }}
                className="banner banner--homepage"
                items={items.map((item: NonNullable<HomepageBannerProps['items']>[number]) => {
                    const slideClassName = cn(
                        item?.overlay ? `overlay overlay--${item.overlay * 10}` : undefined,
                        'banner__slide'
                    );

                    return {
                        style: {
                            '--banner-bg-mobile': item?.media?.mobile,
                            '--banner-bg-desktop': item?.media?.desktop,
                        } as React.CSSProperties,
                        className: slideClassName,
                        children: (
                            <Container className="banner__container">
                                <Columns className="justify-center">
                                    <Columns.Column md={8}>
                                        {item?.title && (
                                            <Heading
                                                className="banner__title"
                                                family="bodoni-moda">
                                                {item.title}
                                            </Heading>
                                        )}

                                        {item?.cta && item?.cta?.href && (
                                            <div className="mt-4 text-center">
                                                <Button.Block
                                                    as="anchor"
                                                    color="light"
                                                    {...item.cta}
                                                />
                                            </div>
                                        )}
                                    </Columns.Column>
                                </Columns>
                            </Container>
                        ),
                    };
                })}
                modulesVariant={{
                    element: BannerButton,
                }}
            />
        </>
    );
};

export default HomepageBanner;
