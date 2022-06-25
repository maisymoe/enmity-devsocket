import { JSX, createSignal } from "solid-js";

import Button from "./Button";
import TextField from "./TextField";

import connect from "../lib/connect";
import sendCode from "../lib/sendCode";

import { code } from "./Editor"
import { setRecieved } from "./Output";

interface ActionPanelProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
}

export const [serverUrl, setServerUrl] = createSignal("");

export default ({ children }: ActionPanelProps) => {
    return (
        <div class="md:w-fit <md:h-fit p-4 flex md:flex-col <md:flex-row items-center gap-2 <md:items-center <md:self-center">
            <TextField
                placeholder="Server URL"
                onChange={(e: Event) => {
                    setServerUrl((e.target as HTMLTextAreaElement).value);
                }}
            />
            <Button
                onClick={() => {
                    connect(new URL(serverUrl()));
                }}
            >
                Connect
            </Button>
            <Button
                onClick={() => {
                    sendCode(code());
                }}
            >
                Send code
            </Button>
            <Button
                onClick={() => {
                    setRecieved([]);
                }}
            >
                Clear console
            </Button>
        </div>
    );
};
