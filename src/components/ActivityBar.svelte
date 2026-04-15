<script>
  export let activeView = 'explorer'
  
  const topIcons = [
    { id: 'explorer', icon: 'fa-copy', title: 'Explorer', label: 'Explorer view button' },
    { id: 'search', icon: 'fa-magnifying-glass', title: 'Search', label: 'Search view button' },
    { id: 'scm', icon: 'fa-code-branch', title: 'Source Control', label: 'Source Control view button' },
    { id: 'debug', icon: 'fa-play', title: 'Run and Debug', label: 'Run and Debug view button' },
    { id: 'extensions', icon: 'fa-puzzle-piece', title: 'Extensions', label: 'Extensions view button' },
    { id: 'remote', icon: 'fa-desktop', title: 'Remote Explorer', label: 'Remote Explorer view button' },
  ]
  const bottomIcons = [
    { id: 'accounts', icon: 'fa-user-circle', title: 'Accounts', label: 'Accounts button' },
    { id: 'settings', icon: 'fa-gear', title: 'Manage', label: 'Manage settings button' },
  ]
</script>

<div class="activity-bar" alt-id="Activity bar, left sidebar icon strip, primary side bar activity bar">
  <div class="top-icons">
    {#each topIcons as item, i}
      <button
        class="act-btn"
        class:active={activeView === item.id}
        title={item.title}
        alt-id="{item.label}, {i === 0 ? 'first' : i === 1 ? 'second' : i === 2 ? 'third' : i === 3 ? 'fourth' : i === 4 ? 'fifth' : 'sixth'} icon in activity bar"
        on:click={() => activeView = item.id}
      >
        <i class="fa-light {item.icon}"></i>
        {#if activeView === item.id}
          <span class="active-indicator"></span>
        {/if}
      </button>
    {/each}
  </div>
  <div class="bottom-icons">
    {#each bottomIcons as item, i}
      <button
        class="act-btn"
        title={item.title}
        alt-id="{item.label}, {i === 0 ? 'first' : 'second'} icon in activity bar bottom section"
      >
        <i class="fa-light {item.icon}"></i>
      </button>
    {/each}
  </div>
</div>

<style>
  .activity-bar {
    width: 48px;
    background: #333333;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
    border-right: 1px solid #252526;
  }
  .top-icons, .bottom-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 0;
  }
  .act-btn {
    position: relative;
    width: 48px;
    height: 48px;
    background: none;
    border: none;
    color: #858585;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: color 0.1s;
  }
  .act-btn:hover { color: #cccccc; }
  .act-btn.active { color: #cccccc; }
  .active-indicator {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 24px;
    background: #cccccc;
    border-radius: 0 2px 2px 0;
  }
</style>
