'use client';

import { useSharedState } from "./use-provider";

export default function TestGrandChild() {

    const [count] = useSharedState<number>('count');

    return (
        <p>Grand Child: {count}</p>
    )
}