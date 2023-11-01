import { DefaultSession } from "next-auth";
import { UserRole } from "@/type/commonType";

declare module "next-auth" {
  interface Session {
    user: {
      userId: number | unknown;
      userName: string | unknown;
    } & DefaultSession["user"];
  }

  interface User {
    userId: number;
    userName: string;


    /**
     * @TODO : DEL 필요
     */
    userMail?:string;
    platform?:string;
    subscriptionYn?:string;
    jwtAuthToken?:string;
    jwtRefreshToken?:string;
    userRole?:string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: number;
    userName: string;
  }
}