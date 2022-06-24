import { JSX, createSignal } from "solid-js";

interface TextFieldProps {
    children?: JSX.Element[] | JSX.Element;
    placeholder?: string;
    onChange: Function | any;
}

export default ({ children, placeholder, onChange }: TextFieldProps) => {
    return (
        <textarea onChange={onChange} placeholder={placeholder} class="bg-tertiary h-10 block resize-none p-2 rounded-[3px]">
            {children}
        </textarea>
    );
};