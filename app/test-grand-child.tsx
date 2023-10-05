'use client';

import { ReturnValueState, useProvider } from "./use-provider";


export default function TestGrandChild() {

    const counter = useProvider<ReturnValueState<number>>('count');

    return (
        <>
            <p>Grand Child: {counter.value}</p>
        </>
    )
}