import PusherServer from "pusher";
import PusherClient from "pusher-js";

// Create a type for our global properties
type GlobalPusher = {
    pusherServer?: PusherServer;
    pusherClient?: PusherClient;
}

// Extend the globalThis type
declare global {
    interface Window { 
        pusherServer?: PusherServer;
        pusherClient?: PusherClient;
    }
}

// Create our instances with proper typing
export const pusherServer =
    (globalThis as GlobalPusher).pusherServer ||
    new PusherServer({
        appId: process.env.PUSHER_APP_ID!,
        key: process.env.PUSHER_APP_KEY!,
        secret: process.env.PUSHER_APP_SECRET!,
        cluster: process.env.PUSHER_APP_CLUSTER!,
        useTLS: true,
    });

export const pusherClient =
    (globalThis as GlobalPusher).pusherClient ||
    new PusherClient(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
        cluster: process.env.PUSHER_APP_CLUSTER!,
    });

if (process.env.NODE_ENV !== "production") {
    (globalThis as GlobalPusher).pusherServer = pusherServer;
    (globalThis as GlobalPusher).pusherClient = pusherClient;
}