/* @refresh reload */
import { render } from "solid-js/web";
import { createSignal } from "solid-js";
import "virtual:windi.css";
import "virtual:windi-devtools";

import Monaco from "monaco-solid";
import Button from "./components/Button";

function App() {
    const [code, setCode] = createSignal("");
    const [recieved, setRecieved] = createSignal("");

    return (
        <div class="w-screen h-screen font-medium bg-primary text-text flex flex-col">
            <div class="w-full h-full flex flex-row <md:flex-col">
                <pre class="bg-secondary w-full h-full p-2">
                    {recieved() || "Nothing recieved yet"}
                </pre>
                <div class="md:w-[10%] <md:h-[10%] p-4 flex md:flex-col <md:flex-row items-center">
                    <Button onClick={() => { alert(code()) }}>
                        Send code
                    </Button>
                </div>
            </div>
            <Monaco
                value={code()} // required
                valOut={setCode}
                lang="javascript" // required
                theme="Dracula"
                readonly={false}
                width="100%"
                height="100%"
            />
        </div>
    );
};

render(() => <App/>, document.getElementById("root") as HTMLElement);