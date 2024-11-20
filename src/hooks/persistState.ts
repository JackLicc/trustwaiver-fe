'use client'

import { useEffect, useState } from 'react';

const usePersistedState = (key: string, defaultValue) => {
    const [state, setState] = useState(() => {
        if (typeof window === 'undefined') return defaultValue;
        const persistedState = localStorage.getItem(key);
        return persistedState ? JSON.parse(persistedState) : defaultValue;
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(state));
        }
    }, [state]);

    return [state, setState];
}

export default usePersistedState;