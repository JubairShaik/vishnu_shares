// it will Store all The Data About the Currently Locked-IN User 


import { getServerSession } from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import  AdapterUser  from "next-auth";
// import jsonwebtoken from "jsonwebtoken"
import { createUser, getUser } from "./actions";

import {JWT} from "next-auth/jwt"



export const authOptions: NextAuthOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // jwt:{
  //   encode:({secret , token})=>{

  //   },
  //   decode:({secret , token})=>{

  //   }
  // },
  theme: {
    colorScheme: "dark",
    logo: "/vishnu.jpg",
  },

  
  callbacks: { 
    async session({ session }) {  

        return session;
    
    },
    async signIn({user}:{user: User }) {


      //  Get The User if the User Exist 

      // if they Dont Exist , Create Them 

      // Return true if the User Exists or created 


      try {
        // @ts-ignore

        // const userExists = await getUser(user.email)

        // if (!userExists.user) {
        //   // @ts-ignore
        //   await createUser(user.name, user.email, user.image)
        // }
        // console.log(ERROR)

        return true;
      } catch (error: any) {
        console.log("Error checking if user exists : ", error.message);
        return false;
      }
    },
  },
  
};



export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session;
}





// callbacks: { 
//   async session({ session, token }) {  
//     const email = session?.user?.email as string;

//     try {
//       const result = await getUser(email)

//       const newSession = {
//         ...session,
//         user: {
//           ...session.user,
//           ...result?.user,
//         },
//       };

//       return newSession;
//     } catch (error: any) {
//       console.error("Error retrieving user data: ", error.message);
//       return session;
//     }
//   },
//   async signIn({ account, profile, user, credentials }) {
//     try {
//       // @ts-ignore
//       const userExists = await getUser(user.email)

//       if (!userExists.user) {
//         // @ts-ignore
//         await createUser(user.name, user.email, user.image)
//       }
//       console.log(ERROR)

//       return true;
//     } catch (error: any) {
//       console.log("Error checking if user exists: ", error.message);
//       return false;
//     }
//   },
// },