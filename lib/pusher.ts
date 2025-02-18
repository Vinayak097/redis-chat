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
export const pusherServer = new PusherServer({
    appId: process.env.PUSHER_APP_ID!,
    key: 'aeeac1f661fd56784a9b',  // your existing key
    secret: process.env.PUSHER_APP_SECRET!,
    cluster: 'ap2',  // replace with your cluster
    useTLS: true,
  })

  export const pusherClient = new PusherClient('aeeac1f661fd56784a9b', {
    cluster: 'ap2',  // replace with your cluster
  })
if (process.env.NODE_ENV !== "production") {
    (globalThis as GlobalPusher).pusherServer = pusherServer;
    (globalThis as GlobalPusher).pusherClient = pusherClient;
}