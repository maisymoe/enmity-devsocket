export interface Message {
    level: number;
    message: string;
};

declare global {
    interface Window { 
        ws: WebSocket;
    }
}