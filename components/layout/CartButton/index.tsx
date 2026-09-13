import React from 'react';

import { cn } from 'cn';
import { ShoppingBasket } from 'lucide-react';

import Button, { BaseButtonProps } from '@/components/common/Button';
import Heading from '@/components/common/Heading';

export type CartButtonProps = {
    count?: number;
} & Pick<BaseButtonProps, 'children' | 'onClick' | 'className'>;

const CartButton = ({ count, className, onClick, children }: CartButtonProps): React.ReactElement | null => {
    if (!count || count === 0 || !children) return null;

    return (
        <Button
            as="button"
            type="button"
            onClick={onClick}
            className={cn(
                // 'fixed border bottom-1 left-1/2 -translate-x-1/2',
                'flex',
                'gap-1',
                'px-1.25 py-0.75',
                'uppercase',
                'bg-kk-primary text-light',
                'cursor-pointer',
                className
            )}>
            <div
                className={cn(
                    'flex justify-center items-center',
                    'min-w-[3.3rem]',
                    'px-0.5',
                    'bg-light text-kk-primary',
                    'font-black',
                    'text-[1.8rem]'
                )}>
                {count}
            </div>
            <div>
                <Heading
                    as="h3"
                    className="text-start font-semibold tracking-0.3 leading-[1.4rem]">
                    Cart
                </Heading>
                <p className="mt-0.5 text-[1.4rem] leading-[1.4rem] font-black">{children}</p>
            </div>
            <ShoppingBasket
                className="ml-1"
                size={33}
                strokeWidth={1}
            />
        </Button>
    );
};

export default CartButton;
