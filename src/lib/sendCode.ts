export default function sendCode(code: string) {
    if (!window.ws) return alert("WebSocket is not connected!");

    window.ws.send(JSON.stringify({
        devTool: true,
        content: code,
    }))
}