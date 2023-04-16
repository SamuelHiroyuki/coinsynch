"use client"

import { create } from 'zustand'

interface SideMenuState {
    isOpen: boolean
    toggleMenu(): void
}

export const sideMenu = create<SideMenuState>((set) => ({
    isOpen: false,
    toggleMenu: () => {
        set(prev => ({ isOpen: !prev.isOpen }))
    },
}))
