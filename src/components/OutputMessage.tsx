import { JSX, createSignal } from "solid-js";
import { Message } from "../def";

type OutputMessageProps = Message & {
    children?: JSX.Element[] | JSX.Element;
}

export default ({ children, message, level }: OutputMessageProps) => {
    let styles;

    switch(level) {
        case 3:
            styles = "text-red"
        break
        case 2:
            styles = "text-yellow"
        break
        default:
            styles = "text-text"
    }

    return (
        <pre class={`${styles} p-2`}>
            <div class="text-xs flex flex-row gap-2">
                <span>{new Date(Date.now()).toLocaleString()}</span>
            </div>
            <p>{message}</p>
        </pre>
    );
};