<script>
  let chatInput = ''
</script>

<div class="chat-panel" alt-id="Chat panel, Cursor AI chat sidebar on right side of editor">

  <!-- Row 1: CHAT tab + action buttons -->
  <div class="header-row1" alt-id="Chat panel top header row, containing CHAT tab and action buttons">
    <div class="tab-section" alt-id="Chat panel tab section in top header row">
      <button class="chat-tab active" alt-id="CHAT tab in chat panel, active chat tab, first tab in chat panel top header row">
        CHAT
      </button>
    </div>

    <div class="row1-actions" alt-id="Chat panel top row action buttons, right side of chat panel top header">
      <!-- New chat with dropdown -->
      <button class="hdr-btn new-btn" alt-id="New chat button in chat panel header, add new chat button, first action button in chat panel top header row" title="New Chat">
        <i class="fa-light fa-plus"></i>
        <i class="fa-solid fa-chevron-down dropdown-arrow"></i>
      </button>
      <!-- Gear/settings -->
      <button class="hdr-btn" alt-id="Chat settings button in chat panel header, gear settings icon, second action button in chat panel top header row" title="Chat Settings">
        <i class="fa-light fa-gear"></i>
      </button>
      <!-- More options -->
      <button class="hdr-btn" alt-id="More options button in chat panel header, ellipsis button, third action button in chat panel top header row" title="More Options">
        <i class="fa-light fa-ellipsis"></i>
      </button>
      <!-- Expand/fullscreen -->
      <button class="hdr-btn" alt-id="Expand chat panel button in chat panel header, fullscreen icon, fourth action button in chat panel top header row" title="Expand">
        <i class="fa-light fa-expand"></i>
      </button>
      <!-- Close -->
      <button class="hdr-btn" alt-id="Close chat panel button in chat panel header, X close icon, fifth action button in chat panel top header row" title="Close">
        <i class="fa-light fa-xmark"></i>
      </button>
    </div>
  </div>

  <!-- Row 2: SESSIONS label + secondary icons -->
  <div class="header-row2" alt-id="Chat panel sessions header row, second row of chat panel header containing SESSIONS label and filter buttons">
    <span class="sessions-label" alt-id="SESSIONS label in chat panel sessions row, bold sessions heading">SESSIONS</span>

    <div class="row2-actions" alt-id="Sessions row action buttons, right side of sessions header row">
      <button class="hdr-btn" alt-id="Refresh sessions button in chat panel, rotate refresh icon, first action button in sessions header row" title="Refresh">
        <i class="fa-light fa-rotate-right"></i>
      </button>
      <button class="hdr-btn" alt-id="Search sessions button in chat panel, magnifying glass icon, second action button in sessions header row" title="Search Sessions">
        <i class="fa-light fa-magnifying-glass"></i>
      </button>
      <button class="hdr-btn" alt-id="Filter sessions button in chat panel, funnel filter icon, third action button in sessions header row" title="Filter">
        <i class="fa-light fa-filter"></i>
      </button>
      <button class="hdr-btn" alt-id="Toggle panel layout button in chat panel, panel layout icon, fourth action button in sessions header row" title="Toggle Layout">
        <i class="fa-light fa-sidebar-flip"></i>
      </button>
    </div>
  </div>

  <!-- Chat body -->
  <div class="chat-body" alt-id="Chat panel main content area, sessions list area">
  </div>

  <!-- Chat input area -->
  <div class="chat-input-area" alt-id="Chat input area at bottom of chat panel">
    <div class="input-box" alt-id="Chat message input field, Describe what to build input in chat panel">
      <textarea
        class="chat-textarea"
        placeholder="Describe what to build"
        bind:value={chatInput}
        rows="1"
        alt-id="Chat text area, input field for describing what to build in chat panel"
      ></textarea>
    </div>
    <div class="chat-footer" alt-id="Chat panel footer with action buttons">
      <div class="ask-btn-group" alt-id="Ask button group in chat panel footer">
        <button class="ask-btn" alt-id="Ask button in chat panel footer, submit chat message button, first button in chat panel footer button group">
          <i class="fa-light fa-diamond" style="font-size:10px; margin-right:4px"></i>
          Ask
        </button>
        <button class="ask-dropdown" alt-id="Ask mode dropdown button in chat panel footer, dropdown arrow for ask button">
          <i class="fa-solid fa-chevron-down" style="font-size:8px"></i>
        </button>
      </div>
      <button class="approvals-btn" alt-id="Default Approvals button in chat panel footer, second button in chat panel footer">
        Default Approvals
      </button>
    </div>
  </div>
</div>

<style>
  .chat-panel {
    width: 260px;
    min-width: 200px;
    background: #1e1e1e;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    border-left: 1px solid #2d2d2d;
  }

  /* ── Row 1 ── */
  .header-row1 {
    height: 35px;
    display: flex;
    align-items: center;
    padding: 0 4px 0 0;
    flex-shrink: 0;
    border-bottom: 1px solid #2d2d2d;
  }
  .tab-section { flex: 1; display: flex; height: 100%; }
  .chat-tab {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: #858585;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.8px;
    padding: 0 12px;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
  }
  .chat-tab.active {
    color: #cccccc;
    border-bottom: 2px solid #007acc;
  }
  .row1-actions {
    display: flex;
    align-items: center;
    gap: 1px;
  }

  /* ── Row 2 ── */
  .header-row2 {
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 4px 0 10px;
    flex-shrink: 0;
    border-bottom: 1px solid #2d2d2d;
  }
  .sessions-label {
    flex: 1;
    font-size: 11px;
    font-weight: 700;
    color: #cccccc;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
  .row2-actions {
    display: flex;
    align-items: center;
    gap: 1px;
  }

  /* ── Shared icon button ── */
  .hdr-btn {
    background: none;
    border: none;
    color: #858585;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    border-radius: 3px;
    cursor: pointer;
    flex-shrink: 0;
  }
  .hdr-btn:hover { color: #cccccc; background: rgba(255,255,255,0.08); }

  /* New chat button has + and a tiny chevron side-by-side */
  .new-btn {
    width: auto;
    gap: 1px;
    padding: 0 4px;
  }
  .dropdown-arrow { font-size: 7px; }

  /* ── Body ── */
  .chat-body {
    flex: 1;
    overflow-y: auto;
  }

  /* ── Input area ── */
  .chat-input-area {
    padding: 8px;
    flex-shrink: 0;
    border-top: 1px solid #2d2d2d;
  }
  .input-box {
    background: #3c3c3c;
    border: 1px solid #555555;
    border-radius: 4px;
    padding: 6px 8px;
    margin-bottom: 6px;
  }
  .chat-textarea {
    width: 100%;
    background: none;
    border: none;
    outline: none;
    color: #cccccc;
    font-size: 13px;
    font-family: inherit;
    resize: none;
    line-height: 1.4;
  }
  .chat-textarea::placeholder { color: #858585; }
  .chat-footer {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: space-between;
  }
  .ask-btn-group { display: flex; align-items: center; }
  .ask-btn {
    background: #0e639c;
    border: none;
    color: #ffffff;
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 3px 0 0 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 26px;
  }
  .ask-btn:hover { background: #1177bb; }
  .ask-dropdown {
    background: #0e639c;
    border: none;
    border-left: 1px solid rgba(255,255,255,0.2);
    color: #ffffff;
    padding: 0 5px;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 26px;
  }
  .ask-dropdown:hover { background: #1177bb; }
  .approvals-btn {
    background: none;
    border: 1px solid #555555;
    color: #cccccc;
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 3px;
    cursor: pointer;
    white-space: nowrap;
    height: 26px;
    display: flex;
    align-items: center;
  }
  .approvals-btn:hover { background: rgba(255,255,255,0.07); }
</style>
