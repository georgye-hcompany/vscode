<script>
  import TitleBar from './components/TitleBar.svelte'
  import ActivityBar from './components/ActivityBar.svelte'
  import FileExplorer from './components/FileExplorer.svelte'
  import EditorArea from './components/EditorArea.svelte'
  import ChatPanel from './components/ChatPanel.svelte'
  import StatusBar from './components/StatusBar.svelte'

  let activeView = 'explorer'
</script>

<div class="app" alt-id="VS Code application window, Visual Studio Code IDE interface">
  <!-- Title bar -->
  <TitleBar activeFile="README.md" />

  <!-- Main content area below title bar -->
  <div class="main-content" alt-id="Main content area of VS Code, below title bar">
    <!-- Activity bar (leftmost icon strip) -->
    <ActivityBar bind:activeView />

    <!-- File explorer sidebar -->
    {#if activeView === 'explorer'}
      <FileExplorer />
    {/if}

    <!-- Editor area -->
    <EditorArea />

    <!-- Chat panel (right) -->
    <ChatPanel />
  </div>

  <!-- Status bar (bottom) -->
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
