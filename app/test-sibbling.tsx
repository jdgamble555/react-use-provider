'use client';

import { ReturnValueState, useProvider } from "./use-provider";


export default function TestSibbling() {

    const counter = useProvider<ReturnValueState<number>>('count');

    return (
        <>
            <p>Sibbling: {counter.value}</p>
        </>
    )
}