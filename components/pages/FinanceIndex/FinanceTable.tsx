import React from 'react';

import { ClassnameProps, FinanceStatusProps } from '@/libs/@types';

import { cn } from 'cn';

export type FinanceTableProps = {
    items?: {
        description?: string;
        note?: string;
        date?: string;
        cash?: string;
        status?: FinanceStatusProps;
    }[];
} & ClassnameProps;

const FinanceTable = ({ items, className }: FinanceTableProps): React.ReactElement | null => {
    if (!items || !items.length) return null;

    return (
        <div className={cn('table-responsive', className)}>
            <table className="table table--finance">
                <colgroup>
                    <col width="25%" />
                    <col width="25%" />
                    <col width="16%" />
                    <col />
                </colgroup>

                <tbody>
                    {items.map((item, i) => {
                        const profitColClass = cn(
                            item?.status === 'profit' ? 'text-green-800' : undefined,
                            item?.status === 'deficit' ? 'text-red-800' : undefined
                        );

                        return (
                            <tr key={i}>
                                <td>{item?.description}</td>
                                <td>{item?.note}</td>
                                <td>{item?.date}</td>
                                <td className={profitColClass}>{item?.cash}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default FinanceTable;
