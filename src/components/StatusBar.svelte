<script>
</script>

<div class="status-bar" alt-id="Status bar at bottom of VS Code window, status bar with file and editor information">
  <!-- Left section -->
  <div class="status-left" alt-id="Left section of status bar">
    <button class="status-btn remote-btn" alt-id="Remote connection status button in status bar, first item in status bar left section">
      <i class="fa-solid fa-angle-right" style="font-size:9px"></i>
      <i class="fa-solid fa-angle-left" style="font-size:9px"></i>
    </button>
    <button class="status-btn" alt-id="Source control branch button in status bar, showing main branch, second item in status bar left section">
      <i class="fa-light fa-code-branch" style="margin-right:4px; font-size:11px"></i>
      <span alt-id="Current git branch name label, main branch indicator in status bar">main?</span>
    </button>
    <button class="status-btn" alt-id="Sync changes button in status bar, third item in status bar left section" title="Synchronize Changes">
      <i class="fa-light fa-rotate" style="font-size:11px"></i>
    </button>
    <button class="status-btn" alt-id="Errors and warnings indicator in status bar, no errors or warnings, fourth item in status bar left section" title="No Problems">
      <i class="fa-light fa-circle-xmark" style="margin-right:3px; font-size:11px"></i>
      <span>0</span>
      <i class="fa-light fa-triangle-exclamation" style="margin-left:5px; margin-right:3px; font-size:11px"></i>
      <span>0</span>
    </button>
  </div>

  <!-- Right section -->
  <div class="status-right" alt-id="Right section of status bar">
    <button class="status-btn" alt-id="Local development indicator in status bar, first item in status bar right section">
      <span alt-id="Local text label in status bar right section">Local</span>
    </button>
    <button class="status-btn" alt-id="Default Approvals button in status bar, second item in status bar right section">
      <span alt-id="Default Approvals label in status bar">Default Approvals</span>
    </button>
    <button class="status-btn" alt-id="Line and column position indicator in status bar, showing line 8 column 1, third item in status bar right section">
      <span alt-id="Cursor position label in status bar, Ln 8 Col 1">Ln 8, Col 1</span>
    </button>
    <button class="status-btn" alt-id="Indentation and tab size indicator in status bar, fourth item in status bar right section">
      <span alt-id="Spaces indentation label in status bar, showing 4 spaces">Spaces: 4</span>
    </button>
    <button class="status-btn" alt-id="File encoding indicator in status bar, UTF-8 encoding, fifth item in status bar right section">
      <span alt-id="UTF-8 encoding label in status bar">UTF-8</span>
    </button>
    <button class="status-btn" alt-id="End of line sequence indicator in status bar, sixth item in status bar right section">
      <span alt-id="LF line ending label in status bar">LF</span>
    </button>
    <button class="status-btn" alt-id="Language mode indicator in status bar, showing Markdown language mode, seventh item in status bar right section">
      <span alt-id="Markdown language mode label in status bar">Markdown</span>
    </button>
    <button class="status-btn" alt-id="Notifications bell button in status bar, eighth item in status bar right section" title="No Notifications">
      <i class="fa-light fa-bell" style="font-size:12px"></i>
    </button>
  </div>
</div>

<style>
  .status-bar {
    height: 22px;
    background: #007acc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: 0 4px;
  }
  .status-left, .status-right {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .status-btn {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 11px;
    padding: 0 6px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
  }
  .status-btn:hover { background: rgba(255,255,255,0.15); }
  .remote-btn {
    background: #0069b8;
    padding: 0 8px;
    letter-spacing: -2px;
  }
  .remote-btn:hover { background: #0078cc; }
</style>
