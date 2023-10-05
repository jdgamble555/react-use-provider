'use client'

import { useState } from "react";
import TestChild from "./test-child";
import TestSibbling from "./test-sibbling";
import { useProvider } from "./use-provider";

export default function Test() {

    const state = useState(0);
    const [_, setCount] = state;

    useProvider('count', state);

    return (
        <>
            <TestChild />
            <TestSibbling />
            <button className="border-2 mt-2 p-2 bg-black text-white" type="button" onClick={() => setCount(prev => prev + 1)}>
                Increment
            </button>
        </>
    )
}