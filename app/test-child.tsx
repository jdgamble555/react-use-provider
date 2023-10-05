'use client';

import { useState } from "react";
import TestGrandChild from "./test-grand-child";
import { useProvider } from "./use-provider";


export default function TestChild() {

    const [count] = useProvider<ReturnType<typeof useState<number>>>('count');

    return (
        <>
            <p>Child: {count}</p>
            <TestGrandChild />
        </>
    )
}