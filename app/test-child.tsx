'use client';

import TestGrandChild from "./test-grand-child";
import { ReturnValueState, useProvider } from "./use-provider";


export default function TestChild() {

    const counter = useProvider<ReturnValueState<number>>('count');

    return (
        <>
            <p>Child: {counter.value}</p>
            <TestGrandChild />
        </>
    )
}