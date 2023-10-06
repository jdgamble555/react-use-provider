'use client'

import TestChild from "./test-child";
import TestSibling from "./test-sibling";
import { useSharedState } from "./use-provider";

export default function Test() {

    const [_, setCount] = useSharedState('count', 0);

    return (
        <>
            <TestChild />
            <TestSibling />
            <button className="border-2 mt-2 p-2 bg-black text-white" type="button" onClick={() => setCount(prev => prev + 1)}>
                Increment
            </button>
        </>
    )
}