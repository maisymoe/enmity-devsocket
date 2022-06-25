/* @refresh reload */
import { render } from "solid-js/web";
import "virtual:windi.css";
import "virtual:windi-devtools";

import ActionPanel from "./components/ActionPanel";
import Editor from "./components/Editor";
import Output from "./components/Output";


function App() {
    return (
        <div class="w-screen h-screen font-medium bg-primary text-text flex md:flex-row <md:flex-col">
            <ActionPanel />
            <Editor />
            <Output />
        </div>
    );
};

render(() => <App/>, document.getElementById("root") as HTMLElement);