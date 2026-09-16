import React from 'react';

import { FORM_GENERAL_REQUIRED_ERROR_MESSAGE } from '@/libs/constants';

import { useForm } from 'react-hook-form';
import { MapPin } from 'lucide-react';

import { ORDER_DELIVERY_METHOD } from '@/components/pages/OrderIndex/index.constant';

import Columns from '@/components/common/Columns';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

export const ORDER_FORM_HANDLES = {
    NAME: 'name',
    CONTACT: 'contact',
    DELIVERY_METHOD: 'deliveryMethod',
    ADDRESS: 'address',
};

export type OrderFormFields = {
    [ORDER_FORM_HANDLES.NAME]: string;
    [ORDER_FORM_HANDLES.CONTACT]: string;
    [ORDER_FORM_HANDLES.DELIVERY_METHOD]: (typeof ORDER_DELIVERY_METHOD)[number]['value'];
    [ORDER_FORM_HANDLES.ADDRESS]: string;
};

export type OrderFormProps = {
    onSubmit: (data: OrderFormFields) => void;
} & Pick<React.HTMLAttributes<HTMLFormElement>, 'className'>;

const OrderForm = ({ onSubmit, className }: OrderFormProps): React.ReactElement => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
        watch,
    } = useForm<OrderFormFields>({
        defaultValues: {},
    });

    watch(ORDER_FORM_HANDLES.DELIVERY_METHOD);

    const deliveryMethod = getValues(ORDER_FORM_HANDLES.DELIVERY_METHOD);

    return (
        <form
            className={className}
            onSubmit={handleSubmit(onSubmit)}>
            <Columns gutterY={1}>
                <Columns.Column md={6}>
                    <Input.Label
                        type="text"
                        placeholder="Name"
                        id={ORDER_FORM_HANDLES.NAME}
                        error={errors?.[ORDER_FORM_HANDLES.NAME]?.message}
                        hook={{
                            register,
                            name: ORDER_FORM_HANDLES.NAME,
                            required: {
                                value: true,
                                message: FORM_GENERAL_REQUIRED_ERROR_MESSAGE,
                            },
                        }}
                    />
                </Columns.Column>

                <Columns.Column md={6}>
                    <Input.Label
                        type="tel"
                        placeholder="Contact Number"
                        id={ORDER_FORM_HANDLES.CONTACT}
                        error={errors?.[ORDER_FORM_HANDLES.CONTACT]?.message}
                        hook={{
                            register,
                            name: ORDER_FORM_HANDLES.CONTACT,
                            required: {
                                value: true,
                                message: FORM_GENERAL_REQUIRED_ERROR_MESSAGE,
                            },
                        }}
                    />
                </Columns.Column>
            </Columns>

            <div className="mt-1 md:mt-3">
                <Input.Label
                    type="select"
                    placeholder="Delivery Method"
                    id={ORDER_FORM_HANDLES.DELIVERY_METHOD}
                    items={ORDER_DELIVERY_METHOD}
                    error={errors?.[ORDER_FORM_HANDLES.DELIVERY_METHOD]?.message}
                    hook={{
                        register,
                        name: ORDER_FORM_HANDLES.DELIVERY_METHOD,
                        required: {
                            value: true,
                            message: FORM_GENERAL_REQUIRED_ERROR_MESSAGE,
                        },
                    }}
                />

                {deliveryMethod === 'pickup' && (
                    <div className="mt-1 md:mt-1.5">
                        <p className="mb-0.25 font-black uppercase text-[1rem] md:text-[1.2rem] tracking-0.1 md:tracking-0.2">
                            Pickup Address:
                        </p>
                        <div className="flex items-baseline gap-0.5">
                            <MapPin
                                className="shrink-0"
                                size={12}
                            />
                            <Button
                                as="anchor"
                                href="#"
                                className="text-[1.4rem]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quasi qui saepe?
                                Accusamus aliquam eum fugiat maxime mollitia, nihil tempora.
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            {deliveryMethod === 'delivery' && (
                <div className="mt-1 md:mt-3">
                    <Input.Label
                        type="text"
                        placeholder="Address"
                        id={ORDER_FORM_HANDLES.ADDRESS}
                        error={errors?.[ORDER_FORM_HANDLES.ADDRESS]?.message}
                        hook={{
                            register,
                            name: ORDER_FORM_HANDLES.ADDRESS,
                            required: {
                                value: true,
                                message: FORM_GENERAL_REQUIRED_ERROR_MESSAGE,
                            },
                        }}
                    />
                </div>
            )}

            <div className="mt-3 text-end">
                <Button.Block
                    as="button"
                    type="submit"
                    color="accent">
                    Checkout
                </Button.Block>
            </div>
        </form>
    );
};

export default OrderForm;
