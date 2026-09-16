import { BaseInputSelectProps } from '@/components/common/Input';

export const ORDER_DELIVERY_METHOD: NonNullable<BaseInputSelectProps['items']> = [
    {
        children: '-- Select Delivery Method --',
        value: '',
        disabled: true,
        selected: true,
    },
    {
        children: 'Pick Up',
        value: 'pickup',
    },
    {
        children: 'Delivery',
        value: 'delivery',
    },
] as const;
