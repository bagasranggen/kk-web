import React from 'react';

import Columns from '@/components/common/Columns';
import HomepageDiscographyItem, {
    HomepageDiscographyItemProps,
} from '@/components/pages/HomepageIndex/HomepageDiscographyItem';

export type HomepageDiscographyProps = {
    featured?: Omit<HomepageDiscographyItemProps, 'size'>;
    discographies?: Omit<HomepageDiscographyItemProps, 'size'>[];
};

const HomepageDiscography = ({ featured, discographies }: HomepageDiscographyProps): React.ReactElement => {
    const hasFeatured = !!featured;

    return (
        <>
            {featured && (
                <div className="mt-4">
                    <HomepageDiscographyItem
                        size="lg"
                        {...featured}
                    />
                </div>
            )}

            {discographies && discographies.length > 0 && (
                <div className={!hasFeatured ? 'mt-4' : 'mt-1'}>
                    <Columns>
                        {discographies.map((item, i) => {
                            return (
                                <Columns.Column
                                    key={i}
                                    md={6}>
                                    <HomepageDiscographyItem
                                        size="md"
                                        {...item}
                                    />
                                </Columns.Column>
                            );
                        })}
                    </Columns>
                </div>
            )}
        </>
    );
};

export default HomepageDiscography;
