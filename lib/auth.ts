import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import axios from "axios";
import { LoginSocialForm } from "@/type/commonType";
import { loginManagerLogin } from "@/function/LoginController";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60, // 30 days
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
          const resp = await loginManagerLogin(credentials);
          console.log(resp);
          if (resp.code === "200") {
            return resp.data;
          } else {
            console.log("check your credentials");
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
      console.log("accountaccountaccountaccountaccount");
      console.log(account);
      console.log("profileprofileprofileprofileprofileprofile");
      console.log(profile);
      console.log("useruseruseruseruseruseruseruseruseruseruser");
      console.log(user);
      if (account?.provider === "kakao" || account?.provider === "google") {
        if (user) {
          const sendData: LoginSocialForm = {
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
    redirect: async ({ url, baseUrl }) => {
      if (url.startsWith("/")) {
        console.log("startWith");
        return `${baseUrl}${url}`;
      } else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.userId = user.userId;
        token.userMail = user.userMail;
        token.userName = user.userName;
        token.subscriptionYn = user.subscriptionYn;
        token.platform = user.platform;
        token.accessToken = user.jwtAuthToken;
        token.refreshToken = user.jwtRefreshToken;
        token.userRole = user.userRole;
      }

      return token;
    },
    session: async ({ session, token, user }) => {
      if (token && session.user) {
        session.user.userId = token.userId;
        session.user.email = token.userMail;
        session.user.username = token.userName;
        session.user.platform = token.platform;
        session.user.subscriptionYn = token.subscriptionYn;
        session.user.accessToken = token.accessToken as string;
        session.user.refreshToken = token.refreshToken as string;
        session.user.userRole = token.userRole;
      }
      return session;
    },
  },
};
