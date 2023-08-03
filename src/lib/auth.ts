import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "./database";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! || "",
    }),

    CredentialsProvider({
      id: "user-credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials as Record<
          "email" | "password",
          string
        >;
        const db = (await connectDB).db("forum");
        const user = await db.collection("users").findOne({ email });

        // user not found in database
        if (!user) throw new Error("UserNotFound");
        // i.e user was created with social login
        if (!user?.password) throw new Error("UserHasNoPassword");
        // password incorrect
        const pwcheck = await bcrypt.compare(password, user.password);
        if (!pwcheck) throw new Error("PasswordIncorrect");
        // correct user
        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30일
  },

  callbacks: {
    jwt: async ({
      token,
      user,
      account,
    }: {
      token: any;
      user: any;
      account: any;
    }) => {
      if (user) {
        if (account?.provider === "google") {
          token.user = {};
          token.user._id = user.id;
          token.user.email = user.email;
          token.user.username = user.name;
          token.user.provider = "google";

          const db = (await connectDB).db("forum");
          const dbUser = await db.collection("users").findOne({ _id: user.id });
          if (!dbUser) {
            await db.collection("users").insertOne({
              _id: user.id,
              email: user.email,
              username: user.name,
              provider: "google",
              password: null,
            });
          }
        } else {
          token.user = {};
          token.user.username = user.username;
          token.user.email = user.email;
          token.user._id = user._id;
          token.user.provider = "credentials";
        }
      }
      return token;
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      session.user = token.user;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
