<script lang="ts">
    import type { InventoryItem } from "../types";
    import { startDrag, endDrag, updateTouchPos } from "../dragState.svelte";

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

    // --- Touch handling (swipe-to-use + touch drag) ---
    let itemEl: HTMLElement;
    let touchStartX = 0;
    let touchStartY = 0;
    let swipeOffset = $state(0);
    let isSwiping = $state(false);
    let isTouchDragging = $state(false);
    let touchMode: "idle" | "deciding" | "swiping" | "dragging" = "idle";
    const SWIPE_THRESHOLD = 80;
    const SWIPE_MAX = 120;
    const DIRECTION_THRESHOLD = 10;

    function handleTouchStart(e: TouchEvent) {
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        swipeOffset = 0;
        isSwiping = false;
        isTouchDragging = false;
        touchMode = "deciding";
    }

    function handleTouchMove(e: TouchEvent) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;

        if (touchMode === "deciding") {
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (distance < DIRECTION_THRESHOLD) return;

            // Primarily rightward = swipe, anything else = drag
            if (deltaX > 0 && deltaX > Math.abs(deltaY)) {
                touchMode = "swiping";
                isSwiping = true;
            } else {
                touchMode = "dragging";
                isTouchDragging = true;
                startDrag(item);
                updateTouchPos(touch.clientX, touch.clientY);
                e.preventDefault();
                return;
            }
        }

        if (touchMode === "swiping") {
            if (deltaX > 0) {
                e.preventDefault();
                swipeOffset = Math.min(deltaX, SWIPE_MAX);
            } else {
                swipeOffset = 0;
            }
        } else if (touchMode === "dragging") {
            e.preventDefault();
            updateTouchPos(touch.clientX, touch.clientY);
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

    function handleTouchEnd(e: TouchEvent) {
        if (touchMode === "swiping") {
            if (swipeOffset >= SWIPE_THRESHOLD) {
                itemEl.dispatchEvent(
                    new CustomEvent("swipeuse", {
                        bubbles: true,
                        detail: { item },
                    }),
                );
            }
        } else if (touchMode === "dragging") {
            const lastTouch = e.changedTouches[0];
            const targetEl = document.elementFromPoint(
                lastTouch.clientX,
                lastTouch.clientY,
            );
            const storyArea = document.querySelector(".story-area");
            if (
                storyArea &&
                targetEl &&
                (storyArea === targetEl || storyArea.contains(targetEl))
            ) {
                storyArea.dispatchEvent(
                    new CustomEvent("touchdrop", {
                        bubbles: false,
                        detail: { item },
                    }),
                );
            }
            endDrag();
        }

        isSwiping = false;
        isTouchDragging = false;
        swipeOffset = 0;
        touchMode = "idle";
    }
</script>

<div
    class="item-swipe-container"
    class:touch-dragging={isTouchDragging}
    bind:this={itemEl}
>
    <div class="swipe-track" class:ready={swipeOffset >= SWIPE_THRESHOLD}>
        <span>Use &#9658;</span>
    </div>
    <div
        class="inventory-item"
        class:dragging={isDragging || isTouchDragging}
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

    .item-swipe-container.touch-dragging {
        visibility: hidden;
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
        touch-action: none;
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
