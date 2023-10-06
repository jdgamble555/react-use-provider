'use client';

import TestGrandChild from "./test-grand-child";
import { useSharedState } from "./use-provider";


export default function TestChild() {

    const [count] = useSharedState<number>('count');

    return (
        <>
            <p>Child: {count}</p>
            <TestGrandChild />
        </>
    )
}