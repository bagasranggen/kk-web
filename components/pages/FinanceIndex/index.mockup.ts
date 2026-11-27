import { createArrayFromNumber } from '@/libs/factories/createArrayFromNumber';
import { convertIntToCurrency } from '@/libs/utils/convertIntToCurrency';
import { joinArrayString } from '@/libs/utils/joinArrayString';

import { faker } from '@faker-js/faker';

import { FinanceTableProps } from '@/components/pages/FinanceIndex/FinanceTable';
import { FinanceIndexProps } from '@/components/pages/FinanceIndex';
import parse from 'html-react-parser';

export const FINANCE_TABLE_ITEMS: FinanceTableProps['items'] = createArrayFromNumber(5).map((_, i) => {
    let cash: number = -500000;
    if (i === 0) cash = 2000000;

    return {
        description: i !== 0 ? faker.person.jobTitle() : 'Fee',
        note: i !== 0 ? faker.person.firstName() : undefined,
        date: '01/12/2027',
        cash: convertIntToCurrency(Math.abs(cash), true),
        status: cash > 0 ? 'profit' : 'deficit',
    };
});

export const FINANCE_TABLE_ITEMS_MERCHANDISE: FinanceTableProps['items'] = createArrayFromNumber(3).map((_, i) => {
    return {
        description: `${faker.commerce.productName()} (${faker.number.int({ min: 1, max: 3 })})`,
        note: joinArrayString([faker.color.human(), 'xs'], ' | '),
        date: '01/12/2027',
        cash: convertIntToCurrency(300000, true),
        status: 'profit',
    };
});

export const CASH_FLOW_STATEMENTS: FinanceIndexProps['entries']['cashFlows'] = [
    {
        title: 'March 2027',
    },
    {
        title: 'February 2027',
        statements: createArrayFromNumber(5).map((_, i) => {
            const isOdd = i % 2 !== 0;
            const n4 = i % 4 === 0;

            let title = `Event | ${faker.book.title()}`;
            if (isOdd) title = `Merchandise | ${faker.person.firstName()}`;

            const venue = !isOdd ? faker.location.street() : undefined;

            let profit = 1000000;
            if (!isOdd && n4 && i !== 0) profit = -500000;

            return {
                id: Math.random(),
                title,
                info: {
                    venue,
                    date: '27/12/2027',
                    time: '19:00',
                    profit: convertIntToCurrency(Math.abs(profit), true),
                    status: profit > 0 ? 'profit' : 'deficit',
                },
                table: isOdd ? FINANCE_TABLE_ITEMS_MERCHANDISE : FINANCE_TABLE_ITEMS,
            };
        }),
    },
    {
        title: 'January 2027',
        statements: createArrayFromNumber(5).map((_, i) => {
            return {
                id: Math.random(),
                title: `Event | ${faker.book.title()}`,
                info: {
                    venue: faker.location.street(),
                    date: '27/12/2027',
                    time: '19:00',
                    profit: convertIntToCurrency(400000, true),
                    status: 'profit',
                },
                note: parse(`<p>${faker.lorem.paragraphs({ min: 3, max: 8 }, '<br/><br/>\n')}</p>`),
                table: FINANCE_TABLE_ITEMS,
            };
        }),
    },
];
