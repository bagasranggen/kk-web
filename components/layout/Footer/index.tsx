import React from 'react';
import Container from '@/components/common/Container';
import Icon from '@/components/common/Icon';
import List, { SocialMediaProps } from '@/components/common/List';

export type FooterProps = {
    socialMedia?: SocialMediaProps['items'];
};

const Footer = ({ socialMedia }: FooterProps): React.ReactElement => {
    return (
        <footer className="bg-kk-primary pt-8 pb-6">
            <Container>
                <Icon.Logo
                    color="light"
                    className="max-w-35 mx-auto"
                />

                <List.SocialMedia
                    className="mt-2 justify-center"
                    color="light"
                    size="sm"
                    items={socialMedia}
                />
            </Container>
        </footer>
    );
};

export default Footer;
