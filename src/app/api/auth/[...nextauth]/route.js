import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
//import { firestore } from "@/lib/firestore";

export const authOptions = {
  adapter: FirestoreAdapter(),
  secret: process.env.NEXTAUTH_SECRET,
  sesion:{jwt:true,
  maxAge:10000000000000},
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
     GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
  ],
   pages: {
     singIn:'/login'
   }
}

const handler =  NextAuth(authOptions);

export { handler as GET, handler as POST }