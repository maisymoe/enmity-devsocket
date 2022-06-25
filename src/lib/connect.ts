import { recieved, setRecieved } from "../components/Output";

export default function connect(address: URL) {
    if (window.ws) {
        window.ws.close();
    }

    const ws = new WebSocket(address);

    ws.addEventListener("message", (message: MessageEvent) => {
        try {
            const data = JSON.parse(message.data);
            setRecieved([...recieved, data]);
        } catch {}
    });

    window.ws = ws;
}
