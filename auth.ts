import NextAuth, { type DefaultSession } from "next-auth"
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!
import { getUserByEmail } from "./actions/auth/get-user";
import { use } from "react";



export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password);

        // logic to verify if user exists
        user = await getUserByEmail({
          email: credentials.email as string,
          password: credentials.password as string,
        });

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          console.log("user not found", user);
          // throw new Error("User not found.");
        }

        console.log("user is ", user);
        // return user object with the their profile data
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = user.role;
        token.username = user.username;
        //@ts-ignore
        token.fullname = user.fullname;
        token.mobile = user.mobile;
        //@ts-ignore
        token.token = user.access_token;
      }

   

      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      //@ts-ignore
      session.user.fullname = token.fullname;
      //@ts-ignore
      session.user.mobile = token.mobile;
      //@ts-ignore

      session.user.username = token.username;
      //@ts-ignore
      session.user.token = token.token;

      return session;
    },
  },
});



