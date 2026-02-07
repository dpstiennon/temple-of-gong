<script lang="ts">
    import { router } from "../router.svelte";
    import { getPage } from "../story";
    import StoryPage from "./StoryPage.svelte";
    import Inventory from "./Inventory.svelte";
    import {
        dragState,
        getDraggedItem,
        activateZone,
        isZoneActivated,
    } from "../dragState.svelte";
    import { removeItem, addItem } from "../inventory.svelte";
    import type { DropZone, InventoryItem } from "../types";

    let currentPage = $derived(getPage(router.currentPageId));
    let isOver = $state(false);
    let storyAreaEl: HTMLElement;

    // Find a matching drop zone on the current page for the dragged item
    function findMatchingZone(): DropZone | null {
        if (!currentPage || !dragState.draggedItem) return null;

        const zones = currentPage.dropZones || [];
        return (
            zones.find(
                (zone) =>
                    zone.acceptsItemId === dragState.draggedItem?.id &&
                    !isZoneActivated(zone.id),
            ) || null
        );
    }

    let matchingZone = $derived(findMatchingZone());

    function handleDragOver(e: DragEvent) {
        if (matchingZone) {
            e.preventDefault();
            isOver = true;
        }
    }

    function handleDragLeave(e: DragEvent) {
        // Only handle if leaving the story area entirely
        const relatedTarget = e.relatedTarget as HTMLElement | null;
        if (
            !relatedTarget ||
            !e.currentTarget ||
            !(e.currentTarget as HTMLElement).contains(relatedTarget)
        ) {
            isOver = false;
        }
    }

    function applyDrop(droppedItem: InventoryItem, zone: DropZone) {
        // Remove the item from inventory unless consumeItem is false
        if (zone.consumeItem !== false) {
            removeItem(droppedItem.id);
        }

        // Mark zone as activated
        activateZone(zone.id);

        // Add reward item if any
        if (zone.rewardItem) {
            addItem(zone.rewardItem);
        }
    }

    function handleDrop(e: DragEvent) {
        e.preventDefault();
        isOver = false;

        const draggedItem = getDraggedItem();
        const zone = matchingZone;

        if (draggedItem && zone) {
            applyDrop(draggedItem, zone);
        }
    }

    // Find a matching zone for a specific item (used by touch drop)
    function findZoneForItem(item: InventoryItem): DropZone | null {
        if (!currentPage) return null;
        const zones = currentPage.dropZones || [];
        return (
            zones.find(
                (zone) =>
                    zone.acceptsItemId === item.id && !isZoneActivated(zone.id),
            ) || null
        );
    }

    // Listen for custom touchdrop events dispatched by InventoryItem
    $effect(() => {
        if (!storyAreaEl) return;

        function handleTouchDrop(e: Event) {
            const detail = (e as CustomEvent).detail;
            if (!detail?.item) return;

            const zone = findZoneForItem(detail.item);
            if (zone) {
                applyDrop(detail.item, zone);
            }
        }

        storyAreaEl.addEventListener("touchdrop", handleTouchDrop);
        return () => {
            storyAreaEl.removeEventListener("touchdrop", handleTouchDrop);
        };
    });
</script>

<div class="game-layout">
    <main
        bind:this={storyAreaEl}
        class="story-area"
        ondragover={handleDragOver}
        ondragleave={handleDragLeave}
        ondrop={handleDrop}
        role="region"
    >
        {#if currentPage}
            <StoryPage page={currentPage} />
        {:else}
            <div class="error">
                <h1>Page Not Found</h1>
                <p>
                    The page "{router.currentPageId}" doesn't exist in this
                    story.
                </p>
                <a href="#/home">Return to the beginning</a>
            </div>
        {/if}
    </main>

    <aside class="inventory-area">
        <Inventory />
    </aside>
</div>

<style>
    .game-layout {
        display: grid;
        grid-template-columns: 1fr 280px;
        min-height: 100vh;
        width: 100%;
    }

    .story-area {
        padding: 2rem;
        overflow-y: auto;
        background: linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%);
    }

    .inventory-area {
        height: 100vh;
        position: sticky;
        top: 0;
    }

    .error {
        max-width: 500px;
        margin: 2rem auto;
        text-align: center;
        padding: 2rem;
    }

    .error h1 {
        color: #c4a35a;
    }

    .error a {
        color: #a8d8c8;
    }

    @media (max-width: 768px) {
        .game-layout {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr auto;
        }

        .story-area {
            padding: 1rem;
        }

        .inventory-area {
            height: auto;
            position: relative;
            border-left: none;
            border-top: 1px solid #2a2a4e;
        }
    }
</style>
