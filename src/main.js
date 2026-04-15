import './app.css'
import { openStates, chatVisible } from './lib/uiState.js'
import App from './App.svelte'

const rawOpen = new URLSearchParams(window.location.search).get('open')
const states = new Set(rawOpen ? rawOpen.split(',') : [])
openStates.set(states)

if (states.has('chat-hidden')) chatVisible.set(false)

const app = new App({ target: document.getElementById('app') })
export default app
