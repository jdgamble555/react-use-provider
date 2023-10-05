'use client';

import { useState } from "react";
import { useProvider } from "./use-provider";


export default function TestGrandChild() {

    const [count] = useProvider<ReturnType<typeof useState<number>>>('count');

    return (
        <p>Grand Child: {count}</p>
    )
}