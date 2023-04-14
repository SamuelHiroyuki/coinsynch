import { UUID, randomUUID } from "crypto"

export interface User {
    id: UUID
    name: string
    email: string
    password: string
}

const users: User[] = [{ id: randomUUID(), name: 'Teste', email: "teste@teste.com", password: "123" }]

export function selectByEmail(email: string) {
    return users.find(user => user.email === email)
}

export function postUser(user: Omit<User, "id">) {
    const exists = selectByEmail(user.email)

    if (!!exists) {
        throw new Error("This e-mail has already been taken!")
    }

    const newUser = {
        id: randomUUID(),
        ...user
    }

    users.push(newUser)
    return newUser
}

