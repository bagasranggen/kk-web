'use client';

import React, { createContext, PropsWithChildren } from 'react';

export type NavigationState = {};

export const NavigationStateContext = createContext<NavigationState>({});

export const NavigationStateContextProvider = ({ children }: PropsWithChildren) => {
    const defaultContext = {};

    return <NavigationStateContext.Provider value={defaultContext}>{children}</NavigationStateContext.Provider>;
};
