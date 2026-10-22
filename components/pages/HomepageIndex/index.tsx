import React from 'react';

import { PageIndexProps } from '@/libs/@types';

import Heading from '@/components/common/Heading';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Columns from '@/components/common/Columns';
import Card, { ThumbnailProps } from '@/components/common/Card';
import List, { SocialMediaProps } from '@/components/common/List';
import Container from '@/components/common/Container';
import HomepageSchedule, { HomepageScheduleProps } from '@/components/pages/HomepageIndex/HomepageSchedule';
import HomepageDiscography, { HomepageDiscographyProps } from '@/components/pages/HomepageIndex/HomepageDiscography';
import HomepageBanner, { HomepageBannerProps } from '@/components/pages/HomepageIndex/HomepageBanner';

export type HomepageIndexProps = PageIndexProps<
    'homepage',
    {
        banner?: HomepageBannerProps['items'];
        schedule?: HomepageScheduleProps['items'];
        discography?: HomepageDiscographyProps;
        merchandise?: ThumbnailProps['items'];
        contact?: {
            description?: React.ReactNode;
            social?: SocialMediaProps['items'];
            join?: {
                description?: React.ReactNode;
                cta?: Pick<BaseAnchorProps, 'href' | 'target' | 'children'>;
            };
        };
    }
>;

const HomepageIndex = ({ entries }: HomepageIndexProps): React.ReactElement => {
    return (
        <>
            {entries?.banner && entries.banner.length > 0 && (
                <section>
                    <HomepageBanner
                        items={entries.banner}
                        cta={{
                            href: '#section1',
                            children: 'Scroll',
                        }}
                    />
                </section>
            )}

            {entries?.schedule && entries.schedule.length > 0 && (
                <section
                    className="mt-15"
                    id="section1">
                    <Container>
                        <Heading
                            as="h2"
                            variant="section">
                            Schedule
                        </Heading>
                    </Container>

                    <HomepageSchedule
                        className="mt-2 md:mt-4"
                        items={entries.schedule}
                    />

                    <Container className="mt-6 text-center">
                        <Button.Block
                            as="anchor"
                            href="#"
                            color="accent"
                            size="lg">
                            Check More Schedule
                        </Button.Block>
                    </Container>
                </section>
            )}

            {entries?.discography && (
                <Container
                    as="section"
                    className="mt-15">
                    <Columns className="justify-center">
                        <Columns.Column lg={10}>
                            <Heading
                                as="h2"
                                variant="section">
                                Discography
                            </Heading>

                            <HomepageDiscography {...entries.discography} />

                            <div className="mt-6 text-center">
                                <Button.Block
                                    as="anchor"
                                    href="#"
                                    color="accent"
                                    size="lg">
                                    Check More
                                </Button.Block>
                            </div>
                        </Columns.Column>
                    </Columns>
                </Container>
            )}

            {entries?.merchandise && entries.merchandise.length > 0 && (
                <Container
                    as="section"
                    className="mt-15">
                    <Heading
                        as="h2"
                        variant="section">
                        Merchandise
                    </Heading>

                    <div className="mt-1">
                        <Card.Thumbnail
                            className="justify-center"
                            columns={{
                                gutterX: 1,
                                gutterY: {
                                    xs: 2,
                                    md: 4,
                                },
                            }}
                            column={{
                                md: 4,
                                lg: 3,
                            }}
                            items={entries.merchandise}
                            extra={{
                                className: 'flex items-center justify-center max-md:pt-3',
                                column: { md: 12, lg: 3 },
                                children: (
                                    <Button.Block
                                        as="anchor"
                                        href="#"
                                        size="lg"
                                        color="accent">
                                        View More
                                    </Button.Block>
                                ),
                            }}
                        />
                    </div>
                </Container>
            )}

            {entries?.contact && (
                <Container
                    as="section"
                    className="mt-15 mb-15">
                    <Columns className="justify-center text-center">
                        <Columns.Column lg={8}>
                            <Heading
                                as="h2"
                                variant="section">
                                Contact
                            </Heading>

                            {entries?.contact?.description && <div className="mt-2">{entries.contact.description}</div>}

                            <List.SocialMedia
                                className="mt-3 justify-center"
                                items={entries.contact.social}
                            />

                            {entries?.contact?.join && (
                                <div className="mt-4">
                                    {entries?.contact?.join?.description && <>{entries.contact.join.description}</>}

                                    {entries?.contact?.join?.cta?.href && (
                                        <div className="mt-3">
                                            <Button.Block
                                                as="anchor"
                                                color="accent"
                                                size="lg"
                                                {...entries.contact.join.cta}
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </Columns.Column>
                    </Columns>
                </Container>
            )}
        </>
    );
};

export default HomepageIndex;
