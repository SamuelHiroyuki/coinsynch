import { selectByEmail } from "@/utils/fake-users-db"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextResponse } from "next/server"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize(credentials, req) {
                console.log("1")
                const user = selectByEmail(credentials?.email!)

                if (user && user.password === credentials?.password) {
                    console.log("2")
                    return user
                }

                console.log("3")
                throw new Error("User not found!")
            },
        })
    ],
    pages: {
        signIn: '/signin'
    },
})

export { handler as GET, handler as POST }