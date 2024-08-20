import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const response = await fetch(
          " https://akil-backend.onrender.com/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json ",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        );
        const user = await response.json();
        console.log("user is", user);

        if (response.status === 200) {
          return {
            id: user.data.id,
            email: user.data.email,
            accessToken: user.data.accessToken,
            refreshToken: user.data.refreshToken,
            profileComplete: user.data.profileComplete,
            message: user.message,
            success: user.success,
            name: user.data.name,
            role: user.data.role,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // if (user) return true;
      return true;
    },
    async jwt({ token, user }) {
      console.log("jwt");
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ token, session }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      console.log("session is from session", { token, session });

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
};
