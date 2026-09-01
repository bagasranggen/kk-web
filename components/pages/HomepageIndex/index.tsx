import React from 'react';

import Heading from '@/components/common/Heading';
import HomepageSchedule, { HomepageScheduleProps } from '@/components/pages/HomepageIndex/HomepageSchedule';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import Columns from '@/components/common/Columns';
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
        </>
    );
};

export default HomepageIndex;
