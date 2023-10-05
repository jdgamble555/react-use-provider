'use client'

import TestChild from "./test-child";
import TestSibbling from "./test-sibbling";
import { useProvider, useValueState } from "./use-provider";

export default function Test() {

    const state = useValueState(1);

    useProvider('count', state);

    return (
        <>
            <TestChild />
            <TestSibbling />
            <button className="border-2 mt-2 p-2 bg-black text-white" type="button" onClick={() => state.value++}>
                Increment
            </button>
        </>
    )
}