"use client"

import { SessionProvider } from "next-auth/react"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            {children}
            <ToastContainer
                position="top-right"
                pauseOnHover
                closeOnClick
                newestOnTop
            />
        </SessionProvider>
    )
}

export default Providers