import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

const getSnapshot = () => {
    return true;
};

const getServerSnapshot = () => {
    return false;
};

export const useMounted = () => {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
