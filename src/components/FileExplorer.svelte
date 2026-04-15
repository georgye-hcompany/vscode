<script>
  let expandedFolders = new Set(['agent_performance'])
  let selectedFile = 'README.md'

  function toggle(folder) {
    if (expandedFolders.has(folder)) {
      expandedFolders.delete(folder)
    } else {
      expandedFolders.add(folder)
    }
    expandedFolders = expandedFolders
  }

  const rootItems = [
    { type: 'folder', name: '.claude' },
    { type: 'folder', name: '.cursor' },
    { type: 'folder', name: '.github' },
    { type: 'folder', name: '.vscode' },
    { type: 'folder', name: 'agent_interface' },
    {
      type: 'folder', name: 'agent_performance',
      children: [
        { type: 'folder', name: 'agent_adapters' },
        { type: 'folder', name: 'agent_evaluation' },
        { type: 'folder', name: 'agents' },
        { type: 'folder', name: 'ea_database' },
        { type: 'folder', name: 'extra-benchmarks' },
        { type: 'file', name: '.gitignore' },
        { type: 'file', name: 'README.md' },
        { type: 'file', name: 'TROUBLESHOOTING.md' },
        { type: 'file', name: 'agent_tasks' },
      ]
    },
    { type: 'folder', name: 'app_cli' },
    { type: 'folder', name: 'app_types' },
    { type: 'folder', name: 'aws' },
    { type: 'folder', name: 'benchmark_anything' },
    { type: 'folder', name: 'cache' },
    { type: 'folder', name: 'chrome_extensions' },
    { type: 'folder', name: 'data' },
    { type: 'folder', name: 'data_production' },
    { type: 'folder', name: 'docker' },
    { type: 'folder', name: 'docs' },
    { type: 'folder', name: 'environments' },
    { type: 'folder', name: 'external' },
    { type: 'folder', name: 'gpu_cop' },
    { type: 'folder', name: 'hagent' },
    { type: 'folder', name: 'hagent_observable_web' },
    { type: 'folder', name: 'hagent_selenium' },
    { type: 'folder', name: 'hagent_user_interactions' },
    { type: 'folder', name: 'hagent_web' },
    { type: 'folder', name: 'hai' },
    { type: 'folder', name: 'hai_adapters' },
    { type: 'folder', name: 'hai_annotation' },
    { type: 'folder', name: 'hai_auth' },
    { type: 'folder', name: 'hai_axor' },
    { type: 'folder', name: 'hai_dbwt' },
    { type: 'folder', name: 'hai_common' },
    { type: 'folder', name: 'hai_configs' },
    { type: 'folder', name: 'hai_dataset_joiner' },
    { type: 'folder', name: 'hai_definitions' },
    { type: 'folder', name: 'hai_distributed' },
    { type: 'folder', name: 'hai_drivers' },
    { type: 'folder', name: 'hai_evaluation_v2' },
    { type: 'folder', name: 'hai_recorder' },
    { type: 'folder', name: 'hai_regression' },
    { type: 'folder', name: 'hai_sky_migration' },
    { type: 'folder', name: 'hai_tracer' },
    { type: 'folder', name: 'hai_tracer_v2' },
    { type: 'folder', name: 'hdagent' },
    { type: 'folder', name: 'hdagent_agents' },
    { type: 'folder', name: 'inference' },
    { type: 'folder', name: 'libnux' },
    { type: 'folder', name: 'martech_ja' },
    { type: 'folder', name: 'model_modules' },
    { type: 'folder', name: 'object_store' },
  ]

  function getFileIcon(name) {
    if (name === 'README.md' || name.endsWith('.md')) return { icon: 'fa-file-lines', color: '#519aba' }
    if (name.startsWith('.git')) return { icon: 'fa-file', color: '#e37933' }
    return { icon: 'fa-file', color: '#cccccc' }
  }

  let outlineExpanded = false
  let timelineExpanded = false
</script>

<div class="explorer" alt-id="File explorer panel, primary side bar file tree">
  <!-- Explorer header -->
  <div class="section-title" alt-id="Explorer panel header">
    <span alt-id="Explorer panel title label">EXPLORER</span>
  </div>

  <!-- HAI project header -->
  <div class="project-header" alt-id="HAI project folder header in explorer, open editors section header">
    <button class="chevron-btn" alt-id="Collapse HAI project toggle button in file explorer">
      <i class="fa-solid fa-chevron-down" style="font-size:9px"></i>
    </button>
    <span class="project-name" alt-id="HAI project name label in file explorer">HAI</span>
    <div class="project-actions" alt-id="File explorer header action buttons">
      <button class="hdr-btn" alt-id="New file button in explorer header, first action button in explorer header" title="New File">
        <i class="fa-light fa-file-plus"></i>
      </button>
      <button class="hdr-btn" alt-id="New folder button in explorer header, second action button in explorer header" title="New Folder">
        <i class="fa-light fa-folder-plus"></i>
      </button>
      <button class="hdr-btn" alt-id="Refresh explorer button in explorer header, third action button in explorer header" title="Refresh">
        <i class="fa-light fa-rotate-right"></i>
      </button>
      <button class="hdr-btn" alt-id="Collapse all folders button in explorer header, fourth action button in explorer header" title="Collapse All">
        <i class="fa-light fa-chevrons-up"></i>
      </button>
    </div>
  </div>

  <!-- File tree -->
  <div class="file-tree" alt-id="File tree in explorer panel, list of project files and folders">
    {#each rootItems as item, idx}
      {#if item.type === 'folder'}
        <button
          class="tree-item folder-item"
          class:expanded={expandedFolders.has(item.name)}
          alt-id="{item.name} folder in file explorer, {idx + 1 <= 5 ? ['first','second','third','fourth','fifth'][idx] : 'item ' + (idx+1)} folder in root of file explorer"
          on:click={() => toggle(item.name)}
        >
          <i class="fa-solid {expandedFolders.has(item.name) ? 'fa-chevron-down' : 'fa-chevron-right'} chevron-icon"></i>
          <i class="fa-solid {expandedFolders.has(item.name) ? 'fa-folder-open' : 'fa-folder'} folder-icon"></i>
          <span class="item-name">{item.name}</span>
        </button>

        {#if expandedFolders.has(item.name) && item.children}
          {#each item.children as child, ci}
            {#if child.type === 'folder'}
              <button
                class="tree-item folder-item child-item"
                alt-id="{child.name} subfolder in {item.name} folder, {['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth'][ci] || 'item ' + (ci+1)} item inside {item.name}"
                on:click={() => toggle(child.name)}
              >
                <i class="fa-solid {expandedFolders.has(child.name) ? 'fa-chevron-down' : 'fa-chevron-right'} chevron-icon"></i>
                <i class="fa-solid fa-folder folder-icon"></i>
                <span class="item-name">{child.name}</span>
              </button>
            {:else}
              {@const fileInfo = getFileIcon(child.name)}
              <button
                class="tree-item file-item child-item"
                class:selected={selectedFile === child.name}
                alt-id="{child.name} file in {item.name} folder{child.name === 'README.md' ? ', currently selected file, active file in editor' : ''}, {['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth'][ci] || 'item ' + (ci+1)} item inside {item.name}"
                on:click={() => selectedFile = child.name}
              >
                <span class="file-spacer"></span>
                <i class="fa-light {fileInfo.icon} file-icon" style="color: {fileInfo.color}"></i>
                <span class="item-name">{child.name}</span>
              </button>
            {/if}
          {/each}
        {/if}
      {/if}
    {/each}
  </div>

  <!-- OUTLINE section -->
  <div class="section-divider" alt-id="OUTLINE section in file explorer panel">
    <button class="section-toggle" alt-id="OUTLINE section toggle button, collapse OUTLINE panel button" on:click={() => outlineExpanded = !outlineExpanded}>
      <i class="fa-solid {outlineExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} chevron-icon"></i>
      <span class="section-toggle-label" alt-id="OUTLINE section label in file explorer">OUTLINE</span>
    </button>
  </div>

  <!-- TIMELINE section -->
  <div class="section-divider" alt-id="TIMELINE section in file explorer panel">
    <button class="section-toggle" alt-id="TIMELINE section toggle button, collapse TIMELINE panel button" on:click={() => timelineExpanded = !timelineExpanded}>
      <i class="fa-solid {timelineExpanded ? 'fa-chevron-down' : 'fa-chevron-right'} chevron-icon"></i>
      <span class="section-toggle-label" alt-id="TIMELINE section label in file explorer">TIMELINE</span>
    </button>
  </div>
</div>

<style>
  .explorer {
    width: 240px;
    min-width: 160px;
    background: #252526;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex-shrink: 0;
    border-right: 1px solid #3c3c3c;
  }
  .section-title {
    padding: 8px 12px 4px;
    font-size: 11px;
    font-weight: 700;
    color: #bbbbbb;
    letter-spacing: 1px;
    flex-shrink: 0;
  }
  .project-header {
    display: flex;
    align-items: center;
    padding: 4px 6px 4px 10px;
    font-size: 11px;
    font-weight: 700;
    color: #cccccc;
    letter-spacing: 0.5px;
    flex-shrink: 0;
    gap: 4px;
  }
  .project-name { flex: 1; text-transform: uppercase; font-size: 11px; }
  .project-actions {
    display: none;
    align-items: center;
    gap: 2px;
  }
  .project-header:hover .project-actions { display: flex; }
  .hdr-btn {
    background: none;
    border: none;
    color: #cccccc;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    border-radius: 3px;
  }
  .hdr-btn:hover { background: rgba(255,255,255,0.1); }
  .chevron-btn {
    background: none;
    border: none;
    color: #cccccc;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .file-tree {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .tree-item {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
    padding: 1px 0 1px 8px;
    background: none;
    border: none;
    color: #cccccc;
    font-size: 13px;
    text-align: left;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    line-height: 22px;
    height: 22px;
  }
  .tree-item:hover { background: #2a2d2e; }
  .tree-item.selected { background: #094771; color: #ffffff; }
  .child-item { padding-left: 22px; }
  .chevron-icon {
    font-size: 9px;
    color: #858585;
    flex-shrink: 0;
    width: 12px;
  }
  .folder-icon {
    font-size: 13px;
    color: #e8ab53;
    flex-shrink: 0;
  }
  .file-icon {
    font-size: 13px;
    flex-shrink: 0;
  }
  .file-spacer {
    width: 16px;
    flex-shrink: 0;
  }
  .item-name {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
  }
  .section-divider {
    flex-shrink: 0;
    border-top: 1px solid #3c3c3c;
  }
  .section-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    padding: 6px 8px;
    background: none;
    border: none;
    color: #bbbbbb;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .section-toggle:hover { background: #2a2d2e; }
  .section-toggle-label { font-size: 11px; }
</style>
