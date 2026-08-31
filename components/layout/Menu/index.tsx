'use client';

import React from 'react';

import { useWindowSize } from 'react-use';

import { Dialog, DialogContent, DialogRootProps } from '@/components/shadcn/Dialog';
import Container from '@/components/common/Container';
import Columns from '@/components/common/Columns';
import List, { SocialMediaProps } from '@/components/common/List';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Heading from '@/components/common/Heading';

export type MenuProps = {
    items?: Pick<BaseAnchorProps, 'href' | 'target' | 'children'>[];
    social?: SocialMediaProps['items'];
} & Pick<DialogRootProps, 'open' | 'onOpenChange'>;

const Menu = ({ open, onOpenChange, social, items }: MenuProps): React.ReactElement => {
    const { width } = useWindowSize();

    let socialIconSize: SocialMediaProps['size'] = 'sm';
    if (width > 320 && width < 576) socialIconSize = 'md';
    if (width > 576) socialIconSize = 'lg';

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}>
            <DialogContent
                showCloseButton={false}
                className="modal modal--menu">
                <Heading
                    as="h1"
                    variant="page"
                    className="modal__title">
                    MENU
                </Heading>

                <Container>
                    <Columns
                        className="items-center"
                        gutterY={5}>
                        <Columns.Column
                            offset={2}
                            xs={10}
                            md={7}>
                            {items && items.length > 0 && (
                                <List
                                    className="modal__list"
                                    items={items.map((item) => {
                                        return {
                                            children: (
                                                <Button
                                                    as="anchor"
                                                    href={item?.href}
                                                    target={item?.target}>
                                                    <Heading
                                                        as="h3"
                                                        variant="section">
                                                        {item.children}
                                                    </Heading>
                                                </Button>
                                            ),
                                        };
                                    })}
                                />
                            )}
                        </Columns.Column>

                        <Columns.Column
                            offset={2}
                            xs={10}
                            md={1}>
                            <List.SocialMedia
                                direction={width > 992 ? 'vertical' : 'horizontal'}
                                size={socialIconSize}
                                color="light"
                                items={social}
                            />
                        </Columns.Column>
                    </Columns>
                </Container>
            </DialogContent>
        </Dialog>
    );
};

export default Menu;
