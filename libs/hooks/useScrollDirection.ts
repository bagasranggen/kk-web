'use client';

import { useEffect, useRef, useState } from 'react';

import { useWindowScroll } from 'react-use';

export const useScrollDirection = () => {
    const { y } = useWindowScroll();
    const [direction, setDirection] = useState<'up' | 'down'>('down');
    const yRef = useRef(0);

    useEffect(() => {
        setDirection(yRef.current > y ? 'up' : 'down');
        yRef.current = y;
    }, [y]);

    return {
        y,
        direction,
    };
};
