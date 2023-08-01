import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "./db";
import { collection, getDocs, query, where } from "firebase/firestore";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    CredentialsProvider({
      id: "user-credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        const { email, password } = credentials;
        const q = query(
          collection(db, "auths"),
          where("email", "==", email),
          where("password", "==", password),
        );
        const querySnapshot = await getDocs(q);
        const auth = querySnapshot?.docs[0];
        if (!auth) return null;
        return { id: auth.id, email: auth.data().email, name: "hello" };
      },
    }),
  ],
  callbacks: {
    redirect() {
      return "/";
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
