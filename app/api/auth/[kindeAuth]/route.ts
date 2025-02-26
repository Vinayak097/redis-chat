import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
console.log("Environment Variables:");
console.log("KINDE_CLIENT_ID:", process.env.KINDE_CLIENT_ID);
console.log("KINDE_CLIENT_SECRET:", process.env.KINDE_CLIENT_SECRET);
console.log("KINDE_ISSUER_URL:", process.env.KINDE_ISSUER_URL);
console.log("KINDE_SITE_URL:", process.env.KINDE_SITE_URL);
console.log("KINDE_POST_LOGOUT_REDIRECT_URL:", process.env.KINDE_POST_LOGOUT_REDIRECT_URL);
console.log("KINDE_POST_LOGIN_REDIRECT_URL:", process.env.KINDE_POST_LOGIN_REDIRECT_URL);

export const GET = handleAuth();