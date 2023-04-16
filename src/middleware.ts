import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

const PROTECTED_ROUTES: string[] = ["/dashboard"]
const GUEST_ROUTES: string[] = ["/signin", "/signup"]

export default withAuth(
    function middleware(req) {
        const isAuthenticated = !!req.nextauth.token

        if (PROTECTED_ROUTES.includes(req.nextUrl.pathname)) {
            if (!isAuthenticated) {
                return NextResponse.redirect(new URL("/signin", req.nextUrl.origin))
            }
        }

        if (GUEST_ROUTES.includes(req.nextUrl.pathname)) {
            if (isAuthenticated) {
                return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin))
            }
        }
    },
    {
        callbacks: {
            authorized() {
                return true
            },
        }
    }
)

export const config = {
    matcher: ["/dashboard", "/signin", "/signup"]
}