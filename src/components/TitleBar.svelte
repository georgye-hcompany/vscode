<script>
  export let onToggleChat = () => {}
  export let chatOpen = true
</script>

<div class="titlebar" alt-id="VS Code title bar, application title bar at very top of window">

  <!-- macOS traffic lights -->
  <div class="traffic-lights" alt-id="macOS window control buttons, traffic light buttons in title bar">
    <button class="light red"    alt-id="Close window button, red traffic light button, first window control button in title bar"></button>
    <button class="light yellow" alt-id="Minimize window button, yellow traffic light button, second window control button in title bar"></button>
    <button class="light green"  alt-id="Fullscreen window button, green traffic light button, third window control button in title bar"></button>
  </div>

  <!-- Spacer so center group is truly centered -->
  <div class="flex-spacer"></div>

  <!-- Center: back, forward, search bar -->
  <div class="center-group" alt-id="Title bar center navigation group, containing back forward buttons and search bar">
    <button class="nav-btn" alt-id="Go back button in title bar, navigate back in editor history, first button in title bar center group" title="Go Back">
      <i class="fa-light fa-chevron-left"></i>
    </button>
    <button class="nav-btn" alt-id="Go forward button in title bar, navigate forward in editor history, second button in title bar center group" title="Go Forward">
      <i class="fa-light fa-chevron-right"></i>
    </button>

    <div class="search-bar" alt-id="Title bar search bar, command palette search input, project name showing hai">
      <i class="fa-light fa-magnifying-glass search-icon" alt-id="Search icon inside title bar search bar"></i>
      <span class="search-text" alt-id="Project name label in title bar search bar, showing hai">hai</span>
    </div>

    <!-- Small icon buttons to the right of search -->
    <button class="nav-btn" alt-id="Refresh button in title bar center area, third button in title bar center group" title="Refresh">
      <i class="fa-light fa-rotate-right"></i>
    </button>
    <button class="nav-btn" alt-id="Go to file button in title bar center area, fourth button in title bar center group" title="Go to File">
      <i class="fa-light fa-arrow-right-arrow-left"></i>
    </button>
  </div>

  <!-- Spacer -->
  <div class="flex-spacer"></div>

  <!-- Right: 4 layout toggle buttons -->
  <div class="right-group" alt-id="Title bar right layout buttons, window layout toggle buttons">
    <button class="layout-btn" alt-id="Customize Layout button in title bar, first button in title bar right group" title="Customize Layout">
      <i class="fa-light fa-table-layout"></i>
    </button>
    <button class="layout-btn" alt-id="Toggle Primary Side Bar button in title bar, second button in title bar right group" title="Toggle Primary Side Bar">
      <i class="fa-light fa-sidebar"></i>
    </button>
    <button class="layout-btn" alt-id="Toggle Panel button in title bar, third button in title bar right group" title="Toggle Panel">
      <i class="fa-light fa-window-restore"></i>
    </button>
      <button
        class="layout-btn"
        class:active={chatOpen}
        alt-id="Toggle Secondary Side Bar button in title bar, fourth button in title bar right group, toggles chat panel"
        title="Toggle Secondary Side Bar"
        on:click={onToggleChat}
      >
        <i class="fa-light fa-sidebar-flip"></i>
      </button>
  </div>

</div>

<style>
  .titlebar {
    height: 30px;
    background: #1e1e1e;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 1px solid #2d2d2d;
    -webkit-app-region: drag;
    padding: 0 8px;
    gap: 4px;
  }

  /* Traffic lights */
  .traffic-lights {
    display: flex;
    align-items: center;
    gap: 6px;
    padding-right: 8px;
    flex-shrink: 0;
    -webkit-app-region: no-drag;
  }
  .light {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    flex-shrink: 0;
  }
  .red    { background: #ff5f57; }
  .yellow { background: #febc2e; }
  .green  { background: #28c840; }

  /* Equal flex spacers to center the center group */
  .flex-spacer { flex: 1; }

  /* Center group */
  .center-group {
    display: flex;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;
    -webkit-app-region: no-drag;
  }

  .nav-btn {
    background: none;
    border: none;
    color: #858585;
    width: 24px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    border-radius: 4px;
    cursor: pointer;
    flex-shrink: 0;
  }
  .nav-btn:hover { color: #cccccc; background: rgba(255,255,255,0.08); }

  .search-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #3c3c3c;
    border: 1px solid #555555;
    border-radius: 6px;
    padding: 0 10px;
    height: 22px;
    width: 280px;
    cursor: pointer;
  }
  .search-bar:hover { border-color: #777777; }
  .search-icon { color: #858585; font-size: 11px; flex-shrink: 0; }
  .search-text { color: #cccccc; font-size: 12px; flex: 1; }

  /* Right layout buttons */
  .right-group {
    display: flex;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;
    -webkit-app-region: no-drag;
  }
  .layout-btn {
    background: none;
    border: none;
    color: #858585;
    width: 28px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
  }
  .layout-btn:hover { color: #cccccc; background: rgba(255,255,255,0.08); }
  .layout-btn.active { color: #cccccc; background: rgba(255,255,255,0.12); }
</style>
