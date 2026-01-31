<script lang="ts">
  import { inventory } from '../inventory.svelte';
  import InventoryItem from './InventoryItem.svelte';
  import ResetButton from './ResetButton.svelte';
</script>

<aside class="inventory">
  <h2>Inventory</h2>

  <div class="inventory-list" role="list">
    {#each inventory.items as item (item.id)}
      <InventoryItem {item} />
    {/each}

    {#if inventory.items.length === 0}
      <p class="empty-message">Your pockets are empty...</p>
    {/if}
  </div>

  <div class="inventory-footer">
    <ResetButton />
  </div>
</aside>

<style>
  .inventory {
    background: linear-gradient(180deg, #1a1a2e 0%, #16162a 100%);
    border-left: 1px solid #2a2a4e;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.25rem;
    color: #c4a35a;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-bottom: 1px solid #3a3a5e;
    padding-bottom: 0.75rem;
  }

  .inventory-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;
  }

  .empty-message {
    color: #666;
    font-style: italic;
    text-align: center;
    padding: 1rem;
  }

  .inventory-footer {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #2a2a4e;
  }
</style>
