import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    refreshToken: string;
  }
  interface User {
    id: string;
    accessToken: string;
    refreshToken: string;
    name: string;
    email: string;
    profilePicUrl: string;
    role: string;
    profileComplete: boolean;
    profileStatus: string;
  }
  interface responseType {
    success: boolean;
    data: User;
    message: string;
    errors: null;
    count: 0;
  }
}
