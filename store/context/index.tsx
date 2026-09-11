import React, { PropsWithChildren } from 'react';

import { CartStateContextProvider } from '@/store/context/CartContext';
import { GlobalStateContextProvider } from '@/store/context/GlobalContext';
import { HistoryStateContextProvider } from '@/store/context/HistoryContext';
import { LayoutStateContextProvider } from '@/store/context/LayoutContext';
import { NavigationStateContextProvider } from '@/store/context/NavigationContext';

export type ContextProviderProps = PropsWithChildren;

const ContextProvider = ({ children }: ContextProviderProps): React.ReactElement => (
    <GlobalStateContextProvider>
        <HistoryStateContextProvider>
            <LayoutStateContextProvider>
                <NavigationStateContextProvider>

                    <CartStateContextProvider>{children}</CartStateContextProvider>

                    </NavigationStateContextProvider>
            </LayoutStateContextProvider>
        </HistoryStateContextProvider>
    </GlobalStateContextProvider>
);

export default ContextProvider;
export * from './root';
