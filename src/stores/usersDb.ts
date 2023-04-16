"use client"

import { uuid } from "uuidv4"
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
    id: string
    name: string
    email: string
    password: string
    image: string
}

interface UsersState {
    users: User[]
    addUser(user: Omit<User, "id">): User
}

export const userDbStore = create<UsersState>()(persist(
    (set, get) => ({
        users: [{ id: uuid(), image: "/menu-user.avif", name: 'Teste', email: "teste@teste.com", password: "123" }],
        addUser: (user: Omit<User, "id">) => {
            const exists = get().users.find(u => u.email === user.email)

            if (!!exists) {
                throw new Error("This e-mail has already been taken!")
            }

            const newUser = {
                id: uuid(),
                ...user
            }

            set(prev => ({ users: [...prev.users, newUser] }))

            return newUser
        },
    }),
    {
        name: 'coinsynch:users',
    }
))
