import { recieved, setRecieved } from "../App";

export default function connect(address: URL) {
    if (window.ws) {
        window.ws.close();
    }

    const ws = new WebSocket(address);

    ws.addEventListener("message", (message: MessageEvent) => {
        setRecieved([...recieved, JSON.parse(message.data)])
    })

    window.ws = ws;
}