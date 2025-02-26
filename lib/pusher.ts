import PusherServer from "pusher";
import PusherClient from "pusher-js";


export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_APP_KEY!,
  secret: process.env.PUSHER_APP_SECRET!,
  cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER || 'ap2',
  useTLS: true,
});

export const pusherClient = new PusherClient(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER || 'ap2',
});

if (process.env.NODE_ENV !== "production") {
  (globalThis as any).pusherServer = pusherServer;
  (globalThis as any).pusherClient = pusherClient;
}