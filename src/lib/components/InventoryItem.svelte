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

    // --- Touch drag ---
    let itemEl: HTMLElement;
    let touchProxy: HTMLElement | null = null;
    let touchStartTimer: ReturnType<typeof setTimeout> | null = null;
    let touchStarted = false;

    function createProxy(x: number, y: number) {
        const el = document.createElement("div");
        el.textContent = item.name;
        el.setAttribute("aria-hidden", "true");
        Object.assign(el.style, {
            position: "fixed",
            left: `${x - 40}px`,
            top: `${y - 20}px`,
            padding: "0.5rem 0.75rem",
            background: "linear-gradient(135deg, #3a3a5e 0%, #2a2a4e 100%)",
            border: "1px solid #c4a35a",
            borderRadius: "8px",
            color: "#e0e0e0",
            fontSize: "0.9rem",
            pointerEvents: "none",
            zIndex: "9999",
            boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
            opacity: "0.95",
            whiteSpace: "nowrap",
        });
        document.body.appendChild(el);
        return el;
    }

    function handleTouchStart(e: TouchEvent) {
        const touch = e.touches[0];
        const startX = touch.clientX;
        const startY = touch.clientY;

        // Use a short delay to distinguish scrolling from dragging
        touchStartTimer = setTimeout(() => {
            touchStarted = true;
            isDragging = true;
            startDrag(item);
            updateTouchPos(startX, startY);
            touchProxy = createProxy(startX, startY);
        }, 150);
    }

    function handleTouchMove(e: TouchEvent) {
        if (!touchStarted) {
            // If the finger moves before the hold timer fires, cancel the drag
            if (touchStartTimer) {
                clearTimeout(touchStartTimer);
                touchStartTimer = null;
            }
            return;
        }

        e.preventDefault();
        const touch = e.touches[0];
        updateTouchPos(touch.clientX, touch.clientY);

        if (touchProxy) {
            touchProxy.style.left = `${touch.clientX - 40}px`;
            touchProxy.style.top = `${touch.clientY - 20}px`;
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
        if (touchStartTimer) {
            clearTimeout(touchStartTimer);
            touchStartTimer = null;
        }

        if (!touchStarted) return;
        touchStarted = false;

        // Dispatch a custom event at the touch release point so GameLayout can detect the drop
        const touch = e.changedTouches[0];
        const dropTarget = document.elementFromPoint(
            touch.clientX,
            touch.clientY,
        );
        if (dropTarget) {
            dropTarget.dispatchEvent(
                new CustomEvent("touchdrop", {
                    bubbles: true,
                    detail: { item },
                }),
            );
        }

        // Clean up
        if (touchProxy) {
            touchProxy.remove();
            touchProxy = null;
        }
        isDragging = false;
        endDrag();
    }
</script>

<div
    bind:this={itemEl}
    class="inventory-item"
    class:dragging={isDragging}
    draggable="true"
    ondragstart={handleDragStart}
    ondragend={handleDragEnd}
    ontouchstart={handleTouchStart}
    ontouchend={handleTouchEnd}
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
        touch-action: none;
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
