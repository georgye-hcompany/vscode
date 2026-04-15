/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{svelte,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'vs-bg':        '#1e1e1e',
        'vs-sidebar':   '#252526',
        'vs-actbar':    '#333333',
        'vs-tab-bg':    '#2d2d2d',
        'vs-tab-act':   '#1e1e1e',
        'vs-border':    '#3c3c3c',
        'vs-sel':       '#094771',
        'vs-hover':     '#2a2d2e',
        'vs-text':      '#cccccc',
        'vs-muted':     '#858585',
        'vs-blue':      '#007acc',
        'vs-accent':    '#0e639c',
        'vs-statusbar': '#007acc',
        'vs-breadcrumb':'#1e1e1e',
        'vs-input':     '#3c3c3c',
        'vs-chat':      '#252526',
        'vs-chat-input':'#3c3c3c',
      },
      fontSize: { '10': '10px', '11': '11px', '12': '12px', '13': '13px' }
    }
  },
  plugins: []
}
