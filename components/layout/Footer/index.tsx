import React from 'react';
import Container from '@/components/common/Container';
import Icon from '@/components/common/Icon';

export type FooterProps = {};

const Footer = ({}: FooterProps): React.ReactElement => {
    return (
        <footer className="bg-kk-primary pt-8 pb-6">
            <Container>
                <Icon.Logo
                    color="light"
                    className="max-w-22 mx-auto"
                />
            </Container>
        </footer>
    );
};

export default Footer;
