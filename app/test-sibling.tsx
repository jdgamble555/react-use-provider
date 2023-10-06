'use client';

import { useSharedState } from "./use-provider";

export default function TestSibling() {

    const [count] = useSharedState<number>('count');

    return (
        <p>Sibling: {count}</p>
    )
}