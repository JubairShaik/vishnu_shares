// import NextAuth from "next-auth";

// import GithubProvider from "next-auth/providers/github"


// // 640032494749-tlrmrj6vhtf64o3kf0h716avnb450gb1.apps.googleusercontent.com
// // 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

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     // ...add more providers here
//   ],
// }

// export default NextAuth(authOptions)


import NextAuth from "next-auth";

import { authOptions } from "@/lib/session";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };




