/* @refresh reload */
import { render } from "solid-js/web";
import { createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";
import "virtual:windi.css";
import "virtual:windi-devtools";

import Monaco from "monaco-solid";
import { Message } from "./def";

import Button from "./components/Button";
import OutputMessage from "./components/OutputMessage";
import TextField from "./components/TextField";
import connect from "./lib/connect";
import sendCode from "./lib/sendCode";

export const [recieved, setRecieved] = createStore(new Array<Message>());

function App() {
    const [code, setCode] = createSignal("");
    const [serverUrl, setServerUrl] = createSignal("");

    return (
        <div class="w-screen h-screen font-medium bg-primary text-text flex md:flex-row <md:flex-col">
            <div class="md:w-fit <md:h-fit p-4 flex md:flex-col <md:flex-row items-center gap-2 <md:items-center <md:self-center">
                <TextField placeholder="Server URL" onChange={(e: Event) => { setServerUrl((e.target as HTMLTextAreaElement).value) }} />
                <Button onClick={() => { connect(new URL(serverUrl())) }}>
                    Connect
                </Button>
                <Button onClick={() => { sendCode(code()) }}>
                    Send code
                </Button>
            </div>
            <Monaco
                value={code()}
                valOut={setCode}
                lang="javascript"
                theme="Dracula"
                readonly={false}
                width="100%"
                height="100%"
                otherCfg={{
                    automaticLayout: true,
                }}
            />
            <div class="bg-secondary h-full w-full p-2 flex flex-col gap-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-tertiary scrollbar-thumb-rounded-full">
                <For each={recieved}>{(recieved, i) =>
                    <OutputMessage message={recieved.message} level={recieved.level}/>
                }</For>
            </div>
        </div>
    );
};

render(() => <App/>, document.getElementById("root") as HTMLElement);