'use client'

import TestChild from "./test-child";
import TestSibbling from "./test-sibbling";
import { useSharedState } from "./use-provider";

export default function Test() {

    const [_, setCount] = useSharedState('count', 0);

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