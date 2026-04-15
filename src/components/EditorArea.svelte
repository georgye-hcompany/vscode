<script>
  const lines = [
    { num: 1, tokens: [{ text: '## Run a benchmark', cls: 'md-h2' }] },
    { num: 2, tokens: [] },
    { num: 3, tokens: [{ text: 'See instructions in ', cls: 'md-text' }, { text: 'benchmarks/README.md', cls: 'md-link' }] },
    { num: 4, tokens: [] },
    { num: 5, tokens: [{ text: '## Implement an agent or its adapter', cls: 'md-h2' }] },
    { num: 6, tokens: [] },
    { num: 7, tokens: [{ text: 'See instructions in ', cls: 'md-text' }, { text: 'agent_adapters/README.md', cls: 'md-link' }] },
    { num: 8, tokens: [] },
  ]
  
  let cursorLine = 8
  let selectedLine = null
</script>

<div class="editor-container" alt-id="Main editor area, code editor pane">
  <!-- Tab bar -->
  <div class="tab-bar" alt-id="Editor tab bar, open file tabs in editor">
    <div class="tab active" alt-id="README.md active editor tab, currently open file tab, first tab in editor tab bar">
      <i class="fa-light fa-file-lines tab-file-icon"></i>
      <span class="tab-label" alt-id="README.md tab label in editor tab bar">README.md</span>
      <button class="tab-x" alt-id="Close README.md editor tab button">
        <i class="fa-light fa-xmark"></i>
      </button>
    </div>
    <div class="tab-spacer"></div>
    <div class="tab-actions" alt-id="Editor area action buttons, right side of tab bar">
      <button class="tab-action-btn" alt-id="Split editor button in tab bar, first tab bar action button" title="Split Editor">
        <i class="fa-light fa-columns-3"></i>
      </button>
      <button class="tab-action-btn" alt-id="More actions button in tab bar, second tab bar action button" title="More Actions">
        <i class="fa-light fa-ellipsis"></i>
      </button>
    </div>
  </div>

  <!-- Breadcrumb -->
  <div class="breadcrumb" alt-id="Editor breadcrumb navigation bar, file path breadcrumb">
    <span class="crumb" alt-id="agent_performance breadcrumb segment, first segment in breadcrumb navigation">agent_performance</span>
    <span class="crumb-sep" alt-id="breadcrumb separator between agent_performance and README.md"><i class="fa-light fa-chevron-right" style="font-size:9px"></i></span>
    <span class="crumb" alt-id="README.md breadcrumb segment, second segment in breadcrumb navigation">README.md</span>
    <span class="crumb-sep" alt-id="breadcrumb separator between README.md and section heading"><i class="fa-light fa-chevron-right" style="font-size:9px"></i></span>
    <span class="crumb active-crumb" alt-id="## Implement an agent or its adapter breadcrumb segment, active section heading in breadcrumb, third segment in breadcrumb navigation">## Implement an agent or its adapter</span>
  </div>

  <!-- Editor body (split: code + empty right pane) -->
  <div class="editor-body" alt-id="Editor split panes container">
    <!-- Left code pane -->
    <div class="code-pane" alt-id="Primary editor code pane, left split editor pane">
      <div class="gutter" alt-id="Editor line number gutter">
        {#each lines as line}
          <div class="line-num" class:cursor={line.num === cursorLine} alt-id="Line number {line.num} in editor gutter">{line.num}</div>
        {/each}
      </div>
      <div class="code-content" alt-id="Editor code content area, markdown file content">
        {#each lines as line}
          <div
            class="code-line"
            class:cursor-line={line.num === cursorLine}
            alt-id="Editor line {line.num}{line.tokens.length > 0 ? ', content: ' + line.tokens.map(t => t.text).join('') : ', empty line'}"
          >
            {#each line.tokens as token}
              <span class={token.cls}>{token.text}</span>
            {/each}
            {#if line.num === cursorLine}
              <span class="cursor-block"></span>
            {/if}
          </div>
        {/each}
      </div>
    </div>

    <!-- Sash divider -->
    <div class="sash-divider" alt-id="Editor split pane resize handle, vertical divider between editor panes"></div>

    <!-- Right empty pane -->
    <div class="right-pane" alt-id="Secondary editor pane, right split editor pane, empty editor pane"></div>
  </div>
</div>

<style>
  .editor-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #1e1e1e;
    min-width: 0;
  }
  .tab-bar {
    height: 35px;
    background: #2d2d2d;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
    border-bottom: 1px solid #252526;
  }
  .tab {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 10px;
    height: 35px;
    font-size: 13px;
    color: #cccccc;
    cursor: pointer;
    flex-shrink: 0;
    border-top: 1px solid transparent;
    background: #2d2d2d;
    min-width: 80px;
  }
  .tab.active {
    background: #1e1e1e;
    border-top: 1px solid #007acc;
    color: #cccccc;
  }
  .tab-file-icon { color: #519aba; font-size: 13px; }
  .tab-label { font-size: 13px; }
  .tab-x {
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
    margin-left: 2px;
  }
  .tab-x:hover { background: rgba(255,255,255,0.12); color: #cccccc; }
  .tab-spacer { flex: 1; }
  .tab-actions {
    display: flex;
    align-items: center;
    padding: 0 6px;
    gap: 2px;
  }
  .tab-action-btn {
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
  }
  .tab-action-btn:hover { color: #cccccc; background: rgba(255,255,255,0.1); }

  .breadcrumb {
    height: 22px;
    background: #1e1e1e;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 4px;
    flex-shrink: 0;
    border-bottom: 1px solid #3c3c3c;
    font-size: 12px;
  }
  .crumb {
    color: #858585;
    cursor: pointer;
    font-size: 12px;
  }
  .crumb:hover { color: #cccccc; }
  .active-crumb { color: #cccccc; }
  .crumb-sep { color: #555555; display: flex; align-items: center; }

  .editor-body {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
  .code-pane {
    flex: 1;
    display: flex;
    overflow: auto;
    min-width: 0;
  }
  .gutter {
    width: 44px;
    background: #1e1e1e;
    flex-shrink: 0;
    padding: 0 8px 0 0;
    text-align: right;
  }
  .line-num {
    height: 19px;
    line-height: 19px;
    font-size: 13px;
    font-family: 'Menlo', 'Consolas', monospace;
    color: #555555;
    user-select: none;
    padding-right: 6px;
  }
  .line-num.cursor { color: #cccccc; }
  .code-content {
    flex: 1;
    padding: 0 0 0 4px;
    overflow: visible;
  }
  .code-line {
    height: 19px;
    line-height: 19px;
    font-size: 13px;
    font-family: 'Menlo', 'Consolas', monospace;
    white-space: pre;
    display: flex;
    align-items: center;
  }
  .cursor-line { background: rgba(255,255,255,0.03); }

  .md-h2 { color: #569cd6; font-weight: 600; }
  .md-text { color: #cccccc; }
  .md-link { color: #9cdcfe; }

  .cursor-block {
    display: inline-block;
    width: 2px;
    height: 15px;
    background: #aeafad;
    animation: blink 1s step-end infinite;
    vertical-align: middle;
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .sash-divider {
    width: 1px;
    background: #3c3c3c;
    flex-shrink: 0;
    cursor: col-resize;
  }
  .right-pane {
    width: 45%;
    background: #1e1e1e;
    flex-shrink: 0;
  }
</style>
