import { AuthOptions } from "next-auth";
import config from "./config";
import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "./db";
import GithubProvider from "next-auth/providers/github"

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as any,
  secret: config.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  providers: [
    GithubProvider({
      clientId: config.GITHUB_ID,
      clientSecret: config.GITHUB_SECRET
    }),
  ]
}

export default authOptions
