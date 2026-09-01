import React from 'react';
import HomepageDiscographyItem from '@/components/pages/HomepageIndex/HomepageDiscographyItem';
import Columns from '@/components/common/Columns';

export type HomepageDiscographyProps = {};

const HomepageDiscography = ({}: HomepageDiscographyProps): React.ReactElement => {
    return (
        <>
            <div className="mt-4">
                <HomepageDiscographyItem size="lg" />
            </div>

            <div className="mt-1">
                <Columns>
                    <Columns.Column md={6}>
                        <HomepageDiscographyItem size="md" />
                    </Columns.Column>
                    <Columns.Column md={6}>
                        <HomepageDiscographyItem size="md" />
                    </Columns.Column>
                </Columns>
            </div>
        </>
    );
};

export default HomepageDiscography;
