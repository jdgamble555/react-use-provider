'use client';

import { FC, ReactNode, createContext, useContext, type Context, useState } from "react";

const _Map = <T,>() => new Map<string, T>();
const Context = createContext(_Map());

export const Provider: FC<{ children: ReactNode }> = ({ children }) =>
    <Context.Provider value={_Map()}>{children}</Context.Provider>;

const useContextProvider = <T,>(key: string) => {
    const s = useContext(Context);
    return {
        set value(v: T) { s.set(key, v); },
        get value() {
            if (!s.has(key)) {
                throw Error(`Context key '${key}' Not Found!`);
            }
            return s.get(key) as T;
        }
    }
};


export const useProvider = <T,>(key: string, initialValue?: T) => {
    const provider = useContextProvider<Context<T>>(key);
    if (initialValue) {
        const Context = createContext<T>(initialValue);
        provider.value = Context;
    }
    return useContext(provider.value);
};


export const useSharedState = <T,>(key: string, initialValue?: T) => {
    const state = useState(initialValue);
    const toProvide = state[0] ? state : undefined;
    return useProvider(key, toProvide) as ReturnType<typeof useState<T>>;
};




