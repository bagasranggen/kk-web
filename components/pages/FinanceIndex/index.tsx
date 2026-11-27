import React from 'react';

import { Plus } from 'lucide-react';

import { FinanceStatusProps, PageIndexProps } from '@/libs/@types';

import { cn } from 'cn';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shadcn/Accordion';
import Container from '@/components/common/Container';
import Heading, { BaseProps } from '@/components/common/Heading';
import Columns from '@/components/common/Columns';
import FinanceTable, { FinanceTableProps } from '@/components/pages/FinanceIndex/FinanceTable';

export type FinanceIndexProps = PageIndexProps<
    'finance',
    {
        cashFlows?: {
            title?: BaseProps['children'];
            statements?: {
                id: string | number;
                title: string;
                info?: {
                    venue?: string;
                    date?: string;
                    time?: string;
                    profit?: string;
                    status?: FinanceStatusProps;
                };
                note?: React.ReactNode;
                table?: FinanceTableProps['items'];
            }[];
        }[];
    }
>;

const FinanceIndex = ({ entries }: FinanceIndexProps): React.ReactElement => {
    return (
        <>
            <Container className="mt-15">
                <Heading variant="page">Finance</Heading>
            </Container>

            {entries?.cashFlows && entries.cashFlows.length && (
                <>
                    {entries.cashFlows.map((item, i) => {
                        return (
                            <section
                                key={i}
                                className="mt-10 last:mb-15">
                                {item?.title && (
                                    <Container>
                                        <Heading className="uppercase font-extralight text-[3.5rem] tracking-[0.8rem]">
                                            {item.title}
                                        </Heading>
                                    </Container>
                                )}

                                {(!item?.statements || item.statements.length === 0) && (
                                    <section className="mt-1.5 border-t border-b">
                                        <Container className="my-1">
                                            <Heading
                                                as="h3"
                                                className="uppercase text-[2.5rem]  font-semibold tracking-0.4">
                                                No Data
                                            </Heading>
                                        </Container>
                                    </section>
                                )}

                                {item?.statements && item.statements.length && (
                                    <Accordion className="mt-1.5 accordion accordion--finance">
                                        {item.statements.map((itm, idx) => {
                                            const info = itm?.info;

                                            if (!itm?.id || !itm?.title) return null;

                                            const accordionInfoClass = cn(
                                                'accordion__info',
                                                !itm.table || itm.table.length === 0 ? 'mb-1' : undefined
                                            );

                                            const profitClass = cn(
                                                info?.status === 'profit' ? 'text-green-800' : undefined,
                                                info?.status === 'deficit' ? 'text-red-800' : undefined
                                            );

                                            return (
                                                <AccordionItem
                                                    key={idx}
                                                    value={itm.id}
                                                    className="accordion__item">
                                                    <AccordionTrigger
                                                        className="accordion__heading"
                                                        container
                                                        customIcon={{
                                                            component: Plus,
                                                            props: {
                                                                strokeWidth: 0.75,
                                                                size: 40,
                                                                className:
                                                                    '*:nth-2:group-aria-expanded/accordion-trigger:rotate-90',
                                                            },
                                                        }}>
                                                        {itm.title}
                                                    </AccordionTrigger>

                                                    <AccordionContent>
                                                        <Container>
                                                            {info && (
                                                                <Columns className={accordionInfoClass}>
                                                                    <Columns.Column>
                                                                        {info?.venue && (
                                                                            <p>
                                                                                <span>Venue:</span>
                                                                                {info.venue}
                                                                            </p>
                                                                        )}

                                                                        {info?.date && (
                                                                            <p>
                                                                                <span>Date:</span>
                                                                                {info.date}
                                                                            </p>
                                                                        )}

                                                                        {info?.time && (
                                                                            <p>
                                                                                <span>Time:</span>
                                                                                {info.time}
                                                                            </p>
                                                                        )}
                                                                    </Columns.Column>

                                                                    <Columns.Column md="auto">
                                                                        {info?.profit && (
                                                                            <p className={profitClass}>
                                                                                <span className="text-dark">
                                                                                    Profit:
                                                                                </span>
                                                                                {info.profit}
                                                                            </p>
                                                                        )}
                                                                    </Columns.Column>
                                                                </Columns>
                                                            )}

                                                            {itm?.note && (
                                                                <>
                                                                    <Heading
                                                                        as="h5"
                                                                        className={cn(
                                                                            'uppercase text-[1.8rem] font-light tracking-0.5',
                                                                            info ? 'mt-3' : undefined
                                                                        )}>
                                                                        Note
                                                                    </Heading>

                                                                    <div className="mt-0.5">{itm.note}</div>
                                                                </>
                                                            )}

                                                            {itm?.table && itm.table.length && (
                                                                <>
                                                                    <Heading
                                                                        as="h5"
                                                                        className={cn(
                                                                            'uppercase text-[1.8rem] font-light tracking-0.5',
                                                                            info || itm?.note ? 'mt-3' : undefined
                                                                        )}>
                                                                        Cash Flow
                                                                    </Heading>

                                                                    <FinanceTable
                                                                        className="mt-0.5"
                                                                        items={itm.table}
                                                                    />
                                                                </>
                                                            )}
                                                        </Container>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            );
                                        })}
                                    </Accordion>
                                )}
                            </section>
                        );
                    })}
                </>
            )}
        </>
    );
};

export default FinanceIndex;
