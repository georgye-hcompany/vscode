<script>
  import { openStates } from '../lib/uiState.js'
  import { onMount } from 'svelte'

  let chatInput = ''
  let isOpen = false

  onMount(() => {
    const $open = new URLSearchParams(window.location.search).get('open')
    // panel is always visible in this layout
  })
</script>

<div class="chat-panel" alt-id="Chat panel, Cursor AI chat sidebar on right side of editor">
  <!-- Panel header -->
  <div class="panel-header" alt-id="Chat panel header bar">
    <div class="panel-tabs" alt-id="Chat panel tabs">
      <button class="panel-tab active" alt-id="CHAT tab in chat panel, active chat tab, first tab in chat panel header">
        CHAT
      </button>
    </div>
    <div class="panel-header-actions" alt-id="Chat panel header action buttons">
      <button class="ph-btn" alt-id="Restore chat panel size button, first action button in chat panel header" title="Restore">
        <i class="fa-light fa-up-right-and-down-left-from-center"></i>
      </button>
      <button class="ph-btn" alt-id="Chat options button, second action button in chat panel header" title="Options">
        <i class="fa-light fa-ellipsis"></i>
      </button>
      <button class="ph-btn" alt-id="Close chat panel button, third action button in chat panel header" title="Close">
        <i class="fa-light fa-xmark"></i>
      </button>
    </div>
    <div class="sessions-section" alt-id="SESSIONS tab in chat panel header">
      <button class="sessions-btn" alt-id="SESSIONS tab button in chat panel, view sessions button">
        <i class="fa-light fa-clock-rotate-left" style="font-size:11px; margin-right:4px"></i>
        SESSIONS
      </button>
    </div>
  </div>

  <!-- Chat body -->
  <div class="chat-body" alt-id="Chat panel main content area">
    <!-- Tip message -->
    <div class="tip-message" alt-id="Tip message in chat panel, Plan agent tip notification">
      <span class="tip-label" alt-id="Tip label prefix in chat panel tip message">Tip</span>
      <span class="tip-text" alt-id="Tip message text, suggestion to use Plan agent">
        Try the Plan agent to research and plan before implementing changes.
      </span>
    </div>
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
          <i class="fa-light fa-chevron-down" style="font-size:9px"></i>
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
    background: #252526;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    border-left: 1px solid #3c3c3c;
  }
  .panel-header {
    height: 35px;
    background: #252526;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #3c3c3c;
    flex-shrink: 0;
    padding: 0 4px;
    gap: 2px;
  }
  .panel-tabs { display: flex; flex: 1; }
  .panel-tab {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: #858585;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 0 8px;
    height: 35px;
    cursor: pointer;
  }
  .panel-tab.active {
    color: #cccccc;
    border-bottom: 2px solid #007acc;
  }
  .panel-header-actions {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .ph-btn {
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
  }
  .ph-btn:hover { color: #cccccc; background: rgba(255,255,255,0.1); }
  .sessions-section {
    border-left: 1px solid #3c3c3c;
    padding-left: 4px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .sessions-btn {
    background: none;
    border: none;
    color: #858585;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 0 6px;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .sessions-btn:hover { color: #cccccc; }
  .chat-body {
    flex: 1;
    overflow-y: auto;
    padding: 12px 8px;
  }
  .tip-message {
    background: #2d2d2d;
    border: 1px solid #3c3c3c;
    border-radius: 4px;
    padding: 8px 10px;
    font-size: 12px;
    color: #cccccc;
    line-height: 1.5;
  }
  .tip-label {
    font-weight: 700;
    color: #cccccc;
    margin-right: 4px;
  }
  .tip-text { color: #888888; }
  .chat-input-area {
    padding: 8px;
    flex-shrink: 0;
    border-top: 1px solid #3c3c3c;
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
  .ask-btn-group {
    display: flex;
    align-items: center;
  }
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
    font-size: 10px;
    padding: 0 6px;
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
