import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "../utils/use-raised-shadow";

interface Props {
    item: string;
}

export const Item = ({ item }: Props) => {
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);

    return (
        <>
            <div>
            <Reorder.Item value={item} id={item} style={{ boxShadow, y }} className="bg-gray-50 z-50 text-center p-2 rounded-md border my-2 h-12 w-full">
                <span className="text-2xl">{item}</span>
            </Reorder.Item>
        </div>

        </>

    )
};
