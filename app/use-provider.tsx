'use client';

import { FC, ReactNode, createContext, useContext, useState, type Context } from "react";

const _Map = <T,>() => new Map<string, T>();
const Context = createContext(_Map());

// Shared Universal Provider
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

// Universal Reactive Provider
export const useProvider = <T,>(key: string, initialValue?: T) => {
    const provider = useContextProvider<Context<T>>(key);
    if (initialValue) {
        const Context = createContext<T>(initialValue);
        provider.value = Context;
    }
    const context = useContext(provider.value);
    return context;
};




