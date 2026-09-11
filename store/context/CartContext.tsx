'use client';

import React, { createContext, PropsWithChildren, Suspense, useMemo, useState } from 'react';

import { ParametersProps } from '@/libs/@types';
import {
    checkStringIsNumber,
    convertIntToCurrency,
    convertIntToMilliseconds,
    getLocalStorage,
    setLocalStorage,
} from '@/libs/utils';
import { NavigationEvents } from '@/libs/hooks';
import { useHistoryStateContext } from '@/store/context';

import parse from 'html-react-parser';

import { CartDrawerProps } from '@/components/layout/CartDrawer';
import { ProductFormFields } from '@/components/common/Banner/Product/ProductForm';

export type CartState = {
    isOpen: CartDrawerProps['open'];
    setIsOpen: React.Dispatch<React.SetStateAction<CartState['isOpen']>>;
    items?: CartDrawerProps['items'];
    setItems?: React.Dispatch<React.SetStateAction<CartState['items']>>;
};

export const CartStateContext = createContext<CartState>({
    isOpen: false,
    setIsOpen: () => {},
    items: [],
    setItems: () => {},
});

const CART_KEY = 'cart';
const CART_EXPIRED_TIME = convertIntToMilliseconds({ type: 'day', number: 7 });

export const CartStateContextProvider = ({ children }: PropsWithChildren) => {
    const { routeLength } = useHistoryStateContext();

    const [isOpen, setIsOpen] = useState<CartState['isOpen']>(false);
    const [items, setItems] = useState<ProductFormFields[]>([]);

    const updateCartQuantityHandler = (props: any) => {
        setItems((prevState) => {
            let tmp = [...prevState];

            // const updateItemIndex = tmp.findIndex((item) => item.cartItemId === props.cartItemId);
            // let updateItem = tmp.find((item) => item.cartItemId === props.cartItemId);
            //
            // if (updateItem && props?.qty && props.qty > 0) {
            //     const [variantLabel, variantPrice] = ((updateItem?.variant as string) ?? '').split(',');
            //
            //     let addOnsPrice = 0;
            //     if (updateItem?.addOns && Array.isArray(updateItem.addOns) && updateItem.addOns.length > 0)
            //         updateItem.addOns.forEach((itm) => {
            //             const [addOnSlug, addOnLabel, addOnPrice] = ((itm as string) ?? '').split(',');
            //
            //             if (checkStringIsNumber(addOnPrice)) addOnsPrice += parseInt(addOnPrice);
            //         });
            //
            //     let totalPrice = 0;
            //     if (checkStringIsNumber(variantPrice)) totalPrice = parseInt(variantPrice);
            //     if (addOnsPrice > 0) totalPrice += addOnsPrice;
            //     if (props?.qty && props.qty > 0) totalPrice = totalPrice * props.qty;
            //
            //     updateItem = Object.assign(updateItem, {
            //         qty: props.qty,
            //         totalPrice,
            //     });
            //
            //     tmp.splice(updateItemIndex, 1, updateItem);
            // }
            //
            // if (updateItemIndex >= 0 && props?.qty === 0) {
            //     tmp.splice(updateItemIndex, 1);
            // }
            //
            // setLocalStorage({ key: CART_KEY, value: JSON.stringify(tmp), expiryInMs: CART_EXPIRED_TIME });

            return tmp;
        });
    };

    const addCartItemHandler = (item: ParametersProps<CartState['addCartItemHandler']>) => {
        if (!item) return;

        setItems((prevState) => {
            let tmp = [...prevState];

            tmp.push(item);

            setLocalStorage({ key: CART_KEY, value: JSON.stringify(tmp), expiryInMs: CART_EXPIRED_TIME });

            return tmp;
        });
    };

    const lineItems = useMemo(() => {
        const data: CartState['items'] = [];

        if (items && items.length > 0) {
            items.forEach((item, i) => {
                let totalPrice = 0;
                if (item?.price && item?.qty) totalPrice = item.price * item.qty;

                const details: NonNullable<CartState['items']>[number]['details'] = [];
                if (item?.color) details.push(`Color: ${item.color}`);
                if (item?.size) details.push(`Size: ${item.size}`);

                data.push({
                    cartItemId: item.cartItemId,
                    // media: (item?.media as any) ?? [],
                    title: item?.title ?? '',
                    details,
                    // variant: variantLabel,
                    // addOns,
                    // note,
                    // noteRaw,
                    // qty: (item?.qty as number) ?? 1,
                    // maxQty: 5,
                    stock: item?.stock ?? 0,
                    price: totalPrice,
                    priceLabel: convertIntToCurrency(totalPrice, true),
                });
            });
        }

        return data;
    }, [items]);

    const totalPrice = lineItems.reduce((total, item) => {
        return total + (item?.price ?? 0);
    }, 0);

    const count = lineItems.reduce((total, item) => {
        return total + (item?.qty ?? 0);
    }, 0);

    const defaultContext = {
        isOpen,
        setIsOpen,
        items: lineItems,
        setItems,
        count,
        totalPrice: totalPrice,
        totalPriceCurrency: convertIntToCurrency(totalPrice, true),
        updateCartQuantityHandler,
        // addCartItemHandler,
    };

    return (
        <>
            {/*<Suspense fallback={null}>*/}
            {/*    <NavigationEvents*/}
            {/*        endHandler={() => {*/}
            {/*            if (routeLength > 0) return;*/}

            {/*            const cartItemsStringify = getLocalStorage(CART_KEY);*/}
            {/*            if (cartItemsStringify) setItems(JSON.parse(cartItemsStringify));*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</Suspense>*/}

            <CartStateContext.Provider value={defaultContext}>{children}</CartStateContext.Provider>
        </>
    );
};
