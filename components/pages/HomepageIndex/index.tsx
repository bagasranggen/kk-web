import React from 'react';

import { CARD_THUMBNAIL_3_ITEMS } from '@/components/common/Card/Thumbnail/index.mock';
import { LIST_SOCIAL_MEDIA } from '@/components/common/List/SocialMedia/index.mock';

import Heading from '@/components/common/Heading';
import Button from '@/components/common/Button';
import Columns from '@/components/common/Columns';
import Card from '@/components/common/Card';
import List from '@/components/common/List';
import Container from '@/components/common/Container';
import HomepageSchedule, { HomepageScheduleProps } from '@/components/pages/HomepageIndex/HomepageSchedule';
import HomepageDiscography from '@/components/pages/HomepageIndex/HomepageDiscography';

export type HomepageIndexProps = {
    schedule?: HomepageScheduleProps['items'];
};

const HomepageIndex = ({ schedule }: HomepageIndexProps): React.ReactElement => {
    return (
        <>
            {schedule && schedule.length > 0 && (
                <section>
                    <Container>
                        <Heading
                            as="h2"
                            variant="section">
                            Schedule
                        </Heading>
                    </Container>

                    <HomepageSchedule
                        className="mt-2 md:mt-4"
                        items={schedule}
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

                        <HomepageDiscography />

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
                        items={CARD_THUMBNAIL_3_ITEMS}
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

                        <div className="mt-2">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum eius eos et
                                ipsum quas qui sapiente similique ut voluptas. A enim ex labore necessitatibus nesciunt
                                pariatur quas quos soluta.
                            </p>
                        </div>

                        <List.SocialMedia
                            className="mt-3 justify-center"
                            items={LIST_SOCIAL_MEDIA}
                        />

                        <div className="mt-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum eius eos et
                                ipsum quas qui sapiente similique ut voluptas.
                            </p>

                            <div className="mt-3">
                                <Button.Block
                                    as="anchor"
                                    href="#"
                                    color="accent"
                                    size="lg">
                                    Join Our Group Chat
                                </Button.Block>
                            </div>
                        </div>
                    </Columns.Column>
                </Columns>
            </Container>
        </>
    );
};

export default HomepageIndex;
