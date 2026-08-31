import React from 'react';

import { Dialog, DialogContent } from '@/components/shadcn/Dialog';
import { DialogRootProps } from '@base-ui/react/dialog';
import Container from '@/components/common/Container';
import Columns from '@/components/common/Columns';
import List, { SocialMediaProps } from '@/components/common/List';
import Button, { BaseAnchorProps } from '@/components/common/Button';
import Heading from '@/components/common/Heading';

// export type MenuItemProps = Pick<any, any>

export type MenuProps = {
    items?: Pick<BaseAnchorProps, 'href' | 'target' | 'children'>[];
    social?: SocialMediaProps['items'];
} & Pick<DialogRootProps, 'open'>;

const Menu = ({ open, social, items }: MenuProps): React.ReactElement => {
    return (
        <Dialog open={open}>
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
                    <Columns className="items-center">
                        <Columns.Column
                            offset={2}
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
                            md={1}>
                            <List.SocialMedia
                                direction="vertical"
                                size="lg"
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
