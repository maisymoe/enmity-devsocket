import { JSX, For, createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import { Message } from "../def";

import OutputMessage from "./OutputMessage";

interface OutputProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
}

export const [recieved, setRecieved] = createStore(new Array<Message>());

export default ({ children }: OutputProps) => {
    return (
        <div class="bg-secondary h-full w-full p-2 flex flex-col gap-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-tertiary scrollbar-thumb-rounded-full">
            <For each={recieved}>
                {(recieved, i) => (
                    <OutputMessage
                        message={recieved.message}
                        level={recieved.level}
                    />
                )}
            </For>
        </div>
    );
};
