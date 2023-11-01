import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import axios from "axios";
//import { LoginSocialForm } from "@/type/commonType";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        userId: {
          label: "UserId",
          type: "userId",
        },
        userPw: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (credentials) {
          const resp = await fetch("http://localhost:3000/api/login",{
            method:"POST",
            body:JSON.stringify(credentials)
          });
        const resData = await resp.json();
        if(resData.status === 200) {
          console.log("hello");
          console.log("res : ",resData.data)
          return resData.data;
        }
        else{
          return null;
        }
        } else {
          console.log("check your credentials");
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: async ({ account, profile, user }) => {
      if (account?.provider === "kakao" || account?.provider === "google") {
        if (user) {
          // const sendData: LoginSocialForm = {
          const sendData: any = {
            platformKey: user.id,
            socialId: user.email as string,
            socialPlatform: account.provider,
            userName: user.name as string,
          };
          const { data: loginData } = await axios.post(
            `${process.env.BACKEND_URL}/backapi/security/login/social`,
            sendData,
          );

          console.log(loginData);
          user.userId = loginData.data.userId;
          user.userMail = loginData.data.userMail;
          user.userName = loginData.data.userName;
          user.platform = account.provider;
          user.subscriptionYn = loginData.data.subscriptionYn;
          user.jwtAuthToken = loginData.data.jwtAuthToken;
          user.jwtRefreshToken = loginData.data.jwtRefreshToken;
          user.userRole = loginData.data.userRole;
          return true;
        }
      }
      return true;
    },
    // redirect: async ({ url, baseUrl }) => {
    //   if (url.startsWith("/")) {
    //     console.log("startWith");
    //     return `${baseUrl}${url}`;
    //   } else if (new URL(url).origin === baseUrl) return url;
    //   return baseUrl;
    // },
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
        // token.userId = user.userId;
        // token.userName =user.userName;
      }
      return token;
    },
    session: async ({ session, token, user }) => {
      if (token && session.user) {
        session.user = token.user as User;
        // session.user.userId = token.userId;
        // session.user.userName= token.userName;
      }
      return session;
    },
  },
};
