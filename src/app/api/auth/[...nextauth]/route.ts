// import { selectUserByEmail } from "@/utils/fake-users-db"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                id: { type: "text" },
                name: { type: "text" },
                email: { type: "text" },
                password: { type: "password" }
            },
            authorize(credentials) {
                if (credentials) {
                    return credentials
                }

                return null
            },
        })
    ],
    pages: {
        signIn: '/signin'
    },
})

export { handler as GET, handler as POST }