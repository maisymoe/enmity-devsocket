import { JSX, createSignal } from "solid-js";
import Monaco from "monaco-solid";

interface EditorProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
}

export const [code, setCode] = createSignal("");

export default ({ children }: EditorProps) => {
    return (
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
    );
};
