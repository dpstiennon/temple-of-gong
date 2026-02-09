<script lang="ts">
    import type { InventoryItem } from "../types";
    import { startDrag, endDrag } from "../dragState.svelte";

    interface Props {
        item: InventoryItem;
    }

    let { item }: Props = $props();
    let isDragging = $state(false);

    // --- Native drag (mouse/pointer) ---
    function handleDragStart(e: DragEvent) {
        isDragging = true;
        startDrag(item);
        if (e.dataTransfer) {
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("text/plain", item.id);
        }
    }

    function handleDragEnd() {
        isDragging = false;
        endDrag();
    }

    // --- Swipe-to-use (touch) ---
    let itemEl: HTMLElement;
    let swipeStartX = 0;
    let swipeOffset = $state(0);
    let isSwiping = $state(false);
    const SWIPE_THRESHOLD = 80;
    const SWIPE_MAX = 120;

    function handleTouchStart(e: TouchEvent) {
        const touch = e.touches[0];
        swipeStartX = touch.clientX;
        swipeOffset = 0;
        isSwiping = false;
    }

    function handleTouchMove(e: TouchEvent) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - swipeStartX;

        if (deltaX > 0) {
            e.preventDefault();
            isSwiping = true;
            swipeOffset = Math.min(deltaX, SWIPE_MAX);
        } else {
            swipeOffset = 0;
        }
    }

    // Register touchmove with { passive: false } so preventDefault works
    $effect(() => {
        if (!itemEl) return;
        itemEl.addEventListener("touchmove", handleTouchMove, {
            passive: false,
        });
        return () => {
            itemEl.removeEventListener("touchmove", handleTouchMove);
        };
    });

    function handleTouchEnd() {
        if (swipeOffset >= SWIPE_THRESHOLD) {
            itemEl.dispatchEvent(
                new CustomEvent("swipeuse", {
                    bubbles: true,
                    detail: { item },
                }),
            );
        }

        isSwiping = false;
        swipeOffset = 0;
    }
</script>

<div class="item-swipe-container" bind:this={itemEl}>
    <div class="swipe-track" class:ready={swipeOffset >= SWIPE_THRESHOLD}>
        <span>Use &#9658;</span>
    </div>
    <div
        class="inventory-item"
        class:dragging={isDragging}
        class:swiping={isSwiping}
        draggable="true"
        style:transform="translateX({swipeOffset}px)"
        ondragstart={handleDragStart}
        ondragend={handleDragEnd}
        ontouchstart={handleTouchStart}
        ontouchend={handleTouchEnd}
        role="listitem"
        title={item.description}
    >
        <span class="item-name">{item.name}</span>
    </div>
</div>

<style>
    .item-swipe-container {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
    }

    .swipe-track {
        position: absolute;
        inset: 0;
        display: none;
        align-items: center;
        padding-left: 1rem;
        background: linear-gradient(135deg, #3a2a10 0%, #2a1a08 100%);
        color: #8a7a3a;
        font-size: 0.85rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        transition: color 0.15s ease;
    }

    @media (max-width: 768px) {
        .swipe-track {
            display: flex;
        }
    }

    .swipe-track.ready {
        color: #c4a35a;
    }

    .inventory-item {
        position: relative;
        padding: 0.75rem 1rem;
        background: linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%);
        border: 1px solid #3a3a5e;
        border-radius: 8px;
        cursor: grab;
        user-select: none;
        touch-action: pan-y;
    }

    .inventory-item:not(.swiping) {
        transition: all 0.2s ease;
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
