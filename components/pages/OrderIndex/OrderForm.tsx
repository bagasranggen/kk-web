import React from 'react';

import { FORM_GENERAL_REQUIRED_ERROR_MESSAGE } from '@/libs/constants';

import { useForm } from 'react-hook-form';

import Columns from '@/components/common/Columns';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

export const ORDER_FORM_HANDLES = {
    NAME: 'name',
    CONTACT: 'contact',
};

export type OrderFormFields = {
    [ORDER_FORM_HANDLES.NAME]: string;
    [ORDER_FORM_HANDLES.CONTACT]: string;
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

    return (
        <form
            className={className}
            onSubmit={handleSubmit(onSubmit)}>
            <Columns>
                <Columns.Column>
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

                <Columns.Column>
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
