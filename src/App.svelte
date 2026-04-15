<script>
  import TitleBar from './components/TitleBar.svelte'
  import ActivityBar from './components/ActivityBar.svelte'
  import FileExplorer from './components/FileExplorer.svelte'
  import EditorArea from './components/EditorArea.svelte'
  import ChatPanel from './components/ChatPanel.svelte'
  import StatusBar from './components/StatusBar.svelte'
  import { chatVisible } from './lib/uiState.js'

  let activeView = 'explorer'

  function toggleChat() {
    chatVisible.update(v => !v)
  }
</script>

<div class="app" alt-id="VS Code application window, Visual Studio Code IDE interface">
  <TitleBar onToggleChat={toggleChat} chatOpen={$chatVisible} />

  <div class="main-content" alt-id="Main content area of VS Code, below title bar">
    <ActivityBar bind:activeView />

    {#if activeView === 'explorer'}
      <FileExplorer />
    {/if}

    <EditorArea />

    {#if $chatVisible}
      <ChatPanel />
    {/if}
  </div>

  <StatusBar />
</div>

<style>
  .app {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #1e1e1e;
  }
  .main-content {
    flex: 1;
    display: flex;
    overflow: hidden;
    min-height: 0;
  }
</style>
