import React from 'react';

import { FORM_GENERAL_REQUIRED_ERROR_MESSAGE } from '@/libs/constants';

import { useForm } from 'react-hook-form';

import Input, { BaseError, BaseProps } from '@/components/common/Input';
import { BaseProps as PictureBaseProps } from '@/components/common/Picture';
import List from '@/components/common/List';
import Heading, { BaseProps as BaseHeadingProps } from '@/components/common/Heading';
import Button from '@/components/common/Button';
import ProductLabel, { ProductLabelProps } from '@/components/common/Banner/Product/ProductLabel';

export const PRODUCT_FORM_HANDLES = {
    TITLE: 'title',
    MEDIA: 'media',
    COLOR: 'color',
    SIZE: 'size',
    PRICE: 'price',
    QTY: 'qty',
    STOCK: 'stock',
    CART_ITEM_ID: 'cartItemId',
} as const;

export type ProductFormFields = {
    [PRODUCT_FORM_HANDLES.TITLE]: string;
    [PRODUCT_FORM_HANDLES.MEDIA]?: PictureBaseProps['items'];
    [PRODUCT_FORM_HANDLES.COLOR]?: string;
    [PRODUCT_FORM_HANDLES.SIZE]?: string;
    [PRODUCT_FORM_HANDLES.PRICE]: number;
    [PRODUCT_FORM_HANDLES.QTY]: number;
    [PRODUCT_FORM_HANDLES.STOCK]: number;
    [PRODUCT_FORM_HANDLES.CART_ITEM_ID]: string;
};

export type ProductFormListItemProps = {
    label?: string;
} & Pick<BaseProps, 'value' | 'checked'>;

export type ProductFormProps = {
    title?: string;
    media?: PictureBaseProps['items'];
    price?: number;
    stock?: number;
    priceLabel?: BaseHeadingProps['children'];
    colors?: ({ color: string } & ProductFormListItemProps)[];
    sizes?: ProductFormListItemProps[];
    sizesGuideOnClick?: NonNullable<ProductLabelProps['subTitle']>['onClick'];
    onSubmit: (data: ProductFormFields) => void;
};

const ProductForm = ({
    title,
    media,
    price,
    priceLabel,
    stock,
    colors,
    sizes,
    sizesGuideOnClick,
    onSubmit,
}: ProductFormProps): React.ReactElement => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
        watch,
    } = useForm<ProductFormFields>({
        defaultValues: {
            title,
            price: price ?? 0,
            qty: 1,
            cartItemId: new Date().getTime().toString(),
            stock: stock ?? 0,
            media,
        },
    });

    watch(PRODUCT_FORM_HANDLES.COLOR);
    watch(PRODUCT_FORM_HANDLES.SIZE);

    const selectedColor = getValues(PRODUCT_FORM_HANDLES.COLOR);
    const selectedSize = getValues(PRODUCT_FORM_HANDLES.SIZE);

    let buttonLabel = 'Add to Cart';
    if (!selectedColor) buttonLabel = 'Please select color';
    if (selectedColor && !selectedSize) buttonLabel = 'Please select size';

    return (
        <form
            className="banner__form"
            onSubmit={handleSubmit(onSubmit)}>
            <ProductLabel
                title="colors"
                className="mt-3">
                {colors && colors.length > 0 && (
                    <List
                        className="mt-0.5 banner__list banner__list--color"
                        items={colors.map((item) => {
                            const id = PRODUCT_FORM_HANDLES.COLOR + '_' + item.value;

                            return {
                                children: (
                                    <>
                                        <Input
                                            type="radio"
                                            id={id}
                                            className="peer"
                                            hidden
                                            defaultChecked={item?.checked}
                                            value={item.value}
                                            hook={{
                                                register,
                                                name: PRODUCT_FORM_HANDLES.COLOR,
                                                required: {
                                                    value: true,
                                                    message: FORM_GENERAL_REQUIRED_ERROR_MESSAGE,
                                                },
                                            }}
                                        />
                                        <label
                                            htmlFor={id}
                                            style={{ '--input-bg': item.color } as React.CSSProperties}
                                        />
                                    </>
                                ),
                            };
                        })}
                    />
                )}

                {errors?.[PRODUCT_FORM_HANDLES.COLOR]?.message && (
                    <BaseError className="mt-0.5">{errors?.[PRODUCT_FORM_HANDLES.COLOR]?.message}</BaseError>
                )}
            </ProductLabel>

            <ProductLabel
                title="sizes"
                subTitle={{
                    ...(sizesGuideOnClick
                        ? {
                              children: 'Size Guide',
                              onClick: sizesGuideOnClick,
                          }
                        : {}),
                }}
                className="mt-3">
                {sizes && sizes.length > 0 && (
                    <List
                        className="mt-0.5 banner__list banner__list--size"
                        items={sizes.map((item) => {
                            const id = PRODUCT_FORM_HANDLES.SIZE + '_' + item.value;
                            return {
                                children: (
                                    <>
                                        <Input
                                            type="radio"
                                            id={id}
                                            hidden
                                            defaultChecked={item?.checked}
                                            className="peer"
                                            value={item.value}
                                            hook={{
                                                register,
                                                name: PRODUCT_FORM_HANDLES.SIZE,
                                                required: {
                                                    value: true,
                                                    message: FORM_GENERAL_REQUIRED_ERROR_MESSAGE,
                                                },
                                            }}
                                        />
                                        <label htmlFor={id}>{item.label}</label>
                                    </>
                                ),
                            };
                        })}
                    />
                )}

                {errors?.[PRODUCT_FORM_HANDLES.SIZE]?.message && (
                    <BaseError className="mt-0.5">{errors?.[PRODUCT_FORM_HANDLES.SIZE]?.message}</BaseError>
                )}
            </ProductLabel>

            {priceLabel && (
                <Heading
                    as="h2"
                    className="mt-3 banner__price">
                    {priceLabel}
                </Heading>
            )}

            <Button.Block
                as="button"
                type="submit"
                size="lg"
                color="accent"
                className="mt-1"
                disabled={!selectedSize || !selectedColor}>
                {buttonLabel}
            </Button.Block>
        </form>
    );
};

export default ProductForm;
