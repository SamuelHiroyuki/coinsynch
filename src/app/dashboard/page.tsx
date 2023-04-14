"use client"

import { signOut, useSession } from "next-auth/react";

const Dashboard = () => {
    const login = useSession()

    console.log(login)
    return (
        <div>
            <pre>{JSON.stringify(login)}</pre>
            <button onClick={() => signOut()}>Sair</button>
        </div>
    );
}

export default Dashboard