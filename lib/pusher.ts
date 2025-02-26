import PusherServer from "pusher";
import PusherClient from "pusher-js";

class PusherSingleton {
  private static pusherServerInstance: PusherServer;
  private static pusherClientInstance: PusherClient;

  static get pusherServer(): PusherServer {
    if (!this.pusherServerInstance) {
      this.pusherServerInstance = new PusherServer({
        appId: process.env.PUSHER_APP_ID!,
        key: process.env.PUSHER_APP_KEY!,
        secret: process.env.PUSHER_APP_SECRET!,
        cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER || 'ap2',
        useTLS: true,
      });
    }
    return this.pusherServerInstance;
  }

  static get pusherClient(): PusherClient {
    if (!this.pusherClientInstance) {
      this.pusherClientInstance = new PusherClient(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
        cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER || 'ap2',
      });
    }
    return this.pusherClientInstance;
  }
}

export const pusherServer = PusherSingleton.pusherServer;
export const pusherClient = PusherSingleton.pusherClient;