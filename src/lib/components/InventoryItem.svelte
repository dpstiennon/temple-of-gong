<script lang="ts">
  import type { InventoryItem } from '../types';
  import { startDrag, endDrag } from '../dragState.svelte';

  interface Props {
    item: InventoryItem;
  }

  let { item }: Props = $props();
  let isDragging = $state(false);

  function handleDragStart(e: DragEvent) {
    isDragging = true;
    startDrag(item);
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', item.id);
    }
  }

  function handleDragEnd() {
    isDragging = false;
    endDrag();
  }
</script>

<div
  class="inventory-item"
  class:dragging={isDragging}
  draggable="true"
  ondragstart={handleDragStart}
  ondragend={handleDragEnd}
  role="listitem"
  title={item.description}
>
  <span class="item-name">{item.name}</span>
</div>

<style>
  .inventory-item {
    padding: 0.75rem 1rem;
    background: linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%);
    border: 1px solid #3a3a5e;
    border-radius: 8px;
    cursor: grab;
    transition: all 0.2s ease;
    user-select: none;
  }

  .inventory-item:hover {
    background: linear-gradient(135deg, #3a3a5e 0%, #2a2a4e 100%);
    border-color: #5a5a8e;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .inventory-item:active {
    cursor: grabbing;
  }

  .inventory-item.dragging {
    opacity: 0.5;
    transform: scale(0.95);
  }

  .item-name {
    font-size: 0.95rem;
    color: #e0e0e0;
  }
</style>
