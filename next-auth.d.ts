import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  // role: UserRole;
  fullname: string;
  moble: string;
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }

  interface User {
    id?: string;
    fullname?: string | null;
    email?: string | null;
    image?: string | null;
    mobile?: string | null;
    username?: string | null;
    role?: string | null;
    access_token?: string | null
  }
}

