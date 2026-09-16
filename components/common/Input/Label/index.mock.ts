import { BaseInputSelectProps } from '@/components/common/Input';
import { createArrayFromNumber } from '@/libs/factories';

export const INPUT_SELECT: BaseInputSelectProps['items'] = createArrayFromNumber(4).map((_, i) => {
    return {
        value: `option${i + 1}`,
        children: `Option ${i + 1}`,
    };
});
