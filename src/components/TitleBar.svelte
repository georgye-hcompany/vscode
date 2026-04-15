<script>
  export let activeFile = 'README.md'
</script>

<div class="titlebar" alt-id="VS Code title bar, application title bar">
  <!-- macOS traffic lights -->
  <div class="traffic-lights" alt-id="macOS window control buttons, traffic light buttons in title bar">
    <button class="light red" alt-id="Close window button, red traffic light button, first window control button"></button>
    <button class="light yellow" alt-id="Minimize window button, yellow traffic light button, second window control button"></button>
    <button class="light green" alt-id="Maximize window button, green traffic light button, third window control button"></button>
  </div>

  <!-- Navigation arrows -->
  <div class="nav-arrows" alt-id="Editor navigation buttons, back and forward history buttons">
    <button class="nav-btn" alt-id="Go back button, navigate back in editor history, first navigation button in title bar">
      <i class="fa-light fa-chevron-left"></i>
    </button>
    <button class="nav-btn" alt-id="Go forward button, navigate forward in editor history, second navigation button in title bar">
      <i class="fa-light fa-chevron-right"></i>
    </button>
  </div>

  <!-- Center tab area -->
  <div class="tab-area" alt-id="Active editor tab in title bar, README.md tab in title bar center">
    <div class="title-tab" alt-id="README.md open tab in title bar, active file tab showing README.md">
      <span class="tab-icon"><i class="fa-light fa-file-lines"></i></span>
      <span class="tab-name" alt-id="README.md file name label in title bar tab">{activeFile}</span>
      <button class="tab-close" alt-id="Close README.md tab button in title bar">
        <i class="fa-light fa-xmark"></i>
      </button>
    </div>
  </div>

  <!-- Center label -->
  <div class="center-label" alt-id="Tab label in title bar center">Tab</div>

  <!-- Right side toolbar -->
  <div class="right-toolbar" alt-id="Title bar right toolbar, window and editor action buttons">
    <button class="tb-btn" alt-id="Search button in title bar, first button in title bar right toolbar" title="Search">
      <i class="fa-light fa-magnifying-glass"></i>
    </button>
    <button class="tb-btn" alt-id="Toggle panel layout button in title bar, second button in title bar right toolbar" title="Toggle Panel">
      <i class="fa-light fa-table-columns"></i>
    </button>
    <button class="tb-btn" alt-id="Customize layout button in title bar, third button in title bar right toolbar" title="Customize Layout">
      <i class="fa-light fa-square-dashed"></i>
    </button>
  </div>

  <!-- Chat panel header section -->
  <div class="chat-header-area" alt-id="Chat panel title area in title bar, CHAT and SESSIONS labels in title bar">
    <span class="chat-label" alt-id="CHAT label in title bar">CHAT</span>
    <div class="chat-header-actions" alt-id="Chat panel action buttons in title bar">
      <button class="tb-btn" alt-id="Restore chat panel button in title bar, first chat action button in title bar" title="Restore">
        <i class="fa-light fa-arrow-up-right-and-arrow-down-left-from-center"></i>
      </button>
      <button class="tb-btn" alt-id="Chat settings button in title bar, second chat action button in title bar" title="Settings">
        <i class="fa-light fa-ellipsis"></i>
      </button>
      <button class="tb-btn" alt-id="Sessions button in title bar, SESSIONS tab button in title bar" title="Sessions">
        <i class="fa-light fa-clock-rotate-left"></i>
      </button>
    </div>
    <span class="sessions-label" alt-id="SESSIONS label in title bar right area">SESSIONS</span>
  </div>
</div>

<style>
  .titlebar {
    height: 30px;
    background: #3c3c3c;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    position: relative;
    border-bottom: 1px solid #252526;
    -webkit-app-region: drag;
  }
  .traffic-lights {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 8px 0 12px;
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
  .red { background: #ff5f57; }
  .yellow { background: #febc2e; }
  .green { background: #28c840; }
  .nav-arrows {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 0 4px;
    -webkit-app-region: no-drag;
  }
  .nav-btn {
    background: none;
    border: none;
    color: #cccccc;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 4px;
  }
  .nav-btn:hover { background: rgba(255,255,255,0.1); }
  .tab-area {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    -webkit-app-region: no-drag;
  }
  .title-tab {
    display: flex;
    align-items: center;
    gap: 5px;
    background: #1e1e1e;
    border: 1px solid #3c3c3c;
    border-bottom: none;
    padding: 0 8px;
    height: 29px;
    font-size: 12px;
    color: #cccccc;
    border-radius: 4px 4px 0 0;
    min-width: 100px;
  }
  .tab-icon { color: #519aba; font-size: 12px; }
  .tab-name { font-size: 12px; }
  .tab-close {
    background: none;
    border: none;
    color: #858585;
    font-size: 10px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    margin-left: 4px;
  }
  .tab-close:hover { background: rgba(255,255,255,0.1); color: #cccccc; }
  .center-label {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #cccccc;
    -webkit-app-region: drag;
    pointer-events: none;
  }
  .right-toolbar {
    display: flex;
    align-items: center;
    padding: 0 4px;
    gap: 2px;
    flex-shrink: 0;
    -webkit-app-region: no-drag;
  }
  .chat-header-area {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 8px;
    flex-shrink: 0;
    border-left: 1px solid #3c3c3c;
    height: 100%;
    -webkit-app-region: no-drag;
  }
  .chat-label {
    font-size: 11px;
    color: #cccccc;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .chat-header-actions {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .sessions-label {
    font-size: 11px;
    color: #cccccc;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-left: 4px;
  }
  .tb-btn {
    background: none;
    border: none;
    color: #cccccc;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 4px;
  }
  .tb-btn:hover { background: rgba(255,255,255,0.1); }
</style>
