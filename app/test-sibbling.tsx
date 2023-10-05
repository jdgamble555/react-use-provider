'use client';

import { useState } from "react";
import { useProvider } from "./use-provider";


export default function TestSibbling() {

    const [count] = useProvider<ReturnType<typeof useState<number>>>('count');

    return (
        <p>Sibbling: {count}</p>
    )
}