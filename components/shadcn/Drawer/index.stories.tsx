import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { useState } from 'react';

import { useWindowSize } from 'react-use';

import { Button } from '@/components/shadcn/Button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/shadcn/Drawer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Shadcn/Drawer',
    // component: Main,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/arg-types
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    // args: { onClick: fn() },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {},
    render: () => {
        const deliveryTimes = [
            {
                value: 'asap',
                id: 'delivery-asap',
                label: 'Standard delivery',
                description: '25–35 min · Driver assigned now',
                badge: 'Fastest',
            },
            {
                value: '5-00',
                id: 'delivery-5-00',
                label: '5:00 PM – 5:15 PM',
                description: 'Prep starts at 4:45 PM',
            },
            {
                value: '5-30',
                id: 'delivery-5-30',
                label: '5:30 PM – 5:45 PM',
                description: "Good if you're heading home",
            },
            {
                value: '6-00',
                id: 'delivery-6-00',
                label: '6:00 PM – 6:15 PM',
                description: 'Most popular · High demand',
            },
            {
                value: '6-30',
                id: 'delivery-6-30',
                label: '6:30 PM – 6:45 PM',
                description: 'Last slot before kitchen closes',
            },
        ];

        const { width } = useWindowSize();
        const [open, setOpen] = useState(false);
        const [deliveryTime, setDeliveryTime] = useState('asap');
        const isMobile = width > 0 && width < 992;

        function handleConfirm() {
            const selected = deliveryTimes.find((time) => time.value === deliveryTime);
            if (!selected) {
                return;
            }
            setOpen(false);
            // toast('Delivery time confirmed', {
            //     description: selected.label,
            // });
        }

        return (
            <Drawer
                open={open}
                onOpenChange={setOpen}
                // showSwipeHandle={isMobile}
                // swipeDirection={isMobile ? 'down' : 'right'}
                swipeDirection={isMobile ? 'down' : 'right'}>
                <DrawerTrigger render={<Button variant="secondary">Open Drawer</Button>} />
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Pick a delivery time</DrawerTitle>
                        <DrawerDescription>We&apos;ll prepare your order as soon as possible.</DrawerDescription>
                    </DrawerHeader>
                    {/*<div className="flex-1 scroll-fade overflow-y-auto p-4">*/}
                    {/*    <RadioGroup*/}
                    {/*        value={deliveryTime}*/}
                    {/*        onValueChange={setDeliveryTime}*/}
                    {/*        className="gap-2">*/}
                    {/*        {deliveryTimes.map((time) => (*/}
                    {/*            <FieldLabel*/}
                    {/*                key={time.value}*/}
                    {/*                htmlFor={time.id}>*/}
                    {/*                <Field orientation="horizontal">*/}
                    {/*                    <FieldContent>*/}
                    {/*                        <FieldTitle className="flex items-center gap-2">*/}
                    {/*                            {time.label}*/}
                    {/*                            {time.badge ? <Badge variant="secondary">{time.badge}</Badge> : null}*/}
                    {/*                        </FieldTitle>*/}
                    {/*                        <FieldDescription>{time.description}</FieldDescription>*/}
                    {/*                    </FieldContent>*/}
                    {/*                    <RadioGroupItem*/}
                    {/*                        value={time.value}*/}
                    {/*                        id={time.id}*/}
                    {/*                    />*/}
                    {/*                </Field>*/}
                    {/*            </FieldLabel>*/}
                    {/*        ))}*/}
                    {/*    </RadioGroup>*/}
                    {/*</div>*/}
                    <DrawerFooter>
                        <Button
                            onClick={handleConfirm}
                            className="h-[34px]">
                            Confirm Delivery Time
                        </Button>
                        <DrawerClose render={<Button variant="outline">Cancel</Button>} />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        );
    },
};
