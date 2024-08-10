import type {
  Awaitable,
  NextAuthOptions,
  RequestInternal,
  User,
} from "next-auth";
import NextAuth from "next-auth";
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
        console.log("user", user);

        if (response.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) return true;
      return false;
    },
    async jwt({ token, user }) {
      token.email = user.email;
      token.name = user.name;
      return { ...token, user };
    },
    async session({ token, session, user }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};

export default NextAuth(options);
