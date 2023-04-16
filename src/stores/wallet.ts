"use client"

import { create } from 'zustand'

interface WalletState {
    balance: number
}

export const wallet = create<WalletState>((set) => ({
    balance: 32_256.56,
}))
