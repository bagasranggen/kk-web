'use client';

import React, { createContext, PropsWithChildren } from 'react';

export type GlobalState = {};

export const GlobalStateContext = createContext<GlobalState>({});

export const GlobalStateContextProvider = ({ children }: PropsWithChildren) => {
    const defaultContext = {};

    return <GlobalStateContext.Provider value={defaultContext}>{children}</GlobalStateContext.Provider>;
};
