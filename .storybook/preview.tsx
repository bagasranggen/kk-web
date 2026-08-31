import { DM_Sans, Bodoni_Moda } from 'next/font/google';

import type { Preview } from '@storybook/nextjs-vite';

import ContextProvider from '../store/context';

const dmSans = DM_Sans({
    variable: '--font-dm-sans',
    subsets: ['latin'],
});

const bodoniModa = Bodoni_Moda({
    variable: '--font-bodoni-moda',
    subsets: ['latin'],
});

const preview: Preview = {
    decorators: [
        (Story) => (
            <>
                <style>{`
                    :root { 
                        --font-dm-sans: "${dmSans.style.fontFamily}"; 
                        --font-bodoni-moda: "${bodoniModa.style.fontFamily}"; 
                    }
                `}</style>

                <ContextProvider>
                    <Story />
                </ContextProvider>
            </>
        ),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo',
        },
    },
};

export default preview;
