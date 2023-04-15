"use client"

import { signOut } from "next-auth/react";


const Dashboard = async () => {
    return (
        <div>
            <button onClick={() => signOut()}>Sair</button>
        </div>
    );
}

export default Dashboard