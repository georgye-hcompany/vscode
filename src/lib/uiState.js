import { writable } from 'svelte/store'

export const openStates = writable(new Set())
export const chatVisible = writable(true)
