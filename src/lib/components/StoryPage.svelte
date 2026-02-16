<script lang="ts">
    import type { StoryPage as StoryPageType, InventoryItem } from "../types";
    import { addItem, hasItem, resetInventory } from "../inventory.svelte";
    import { resetActivatedZones } from "../dragState.svelte";
    import { navigateTo } from "../router.svelte";
    import { parseMarkdown } from "../markdown";
    import PageLink from "./PageLink.svelte";
    import DropZone from "./DropZone.svelte";

    function handleRestart() {
        resetInventory();
        resetActivatedZones();
        navigateTo("home");
    }

    interface Props {
        page: StoryPageType;
    }

    let { page }: Props = $props();

    // Track items picked up on this page visit
    let pickedUpItems = $state<InventoryItem[]>([]);
    let currentPageId = $state(page.id);

    // Reset pickup state when page changes
    $effect(() => {
        if (page.id !== currentPageId) {
            pickedUpItems = [];
            currentPageId = page.id;
        }
    });

    // Automatically pick up items if present and not already in inventory
    $effect(() => {
        if (page.itemsToFind && pickedUpItems.length === 0) {
            const newItems = page.itemsToFind.filter(
                (item) => !hasItem(item.id),
            );
            if (newItems.length > 0) {
                for (const item of newItems) {
                    addItem(item);
                }
                pickedUpItems = newItems;
            }
        }
    });
</script>

<article class="story-page">
    <header>
        <h1>{page.title}</h1>
    </header>

    <div class="content">
        {@html parseMarkdown(page.content)}
    </div>

    {#if pickedUpItems.length > 0}
        <div class="items-found">
            {#each pickedUpItems as item (item.id)}
                <div class="item-found">
                    <p>You found: <strong>{item.name}</strong></p>
                    <p class="item-description">{item.description}</p>
                </div>
            {/each}
        </div>
    {/if}

    {#if page.dropZones.length > 0}
        <section class="drop-zones">
            {#each page.dropZones as zone (zone.id)}
                <DropZone {zone} />
            {/each}
        </section>
    {/if}

    {#if page.ending}
        {#if page.ending === "death"}
            <div class="death-screen">
                <span class="death-text">YOU DIED</span>
            </div>
        {:else if page.ending === "complete"}
            <div class="death-screen">
                <span class="complete-text">THE END</span>
            </div>
        {/if}
        <nav class="choices">
            <button class="restart-link" onclick={handleRestart}>
                Start over
            </button>
        </nav>
    {:else}
        <nav class="choices">
            {#each page.links as link}
                <PageLink targetPageId={link.targetPageId} text={link.text} />
            {/each}
        </nav>
    {/if}
</article>

<style>
    .story-page {
        max-width: 700px;
        margin: 0 auto;
        padding: 2rem;
    }

    header {
        margin-bottom: 1.5rem;
        border-bottom: 2px solid #c4a35a;
        padding-bottom: 1rem;
    }

    h1 {
        margin: 0;
        font-size: 2rem;
        color: #c4a35a;
        font-weight: 600;
        letter-spacing: 0.02em;
    }

    .content {
        margin-bottom: 1.5rem;
    }

    .content :global(p) {
        margin: 0 0 1rem 0;
        line-height: 1.8;
        color: #d0d0d0;
        font-size: 1.1rem;
    }

    .content :global(p:last-child) {
        margin-bottom: 0;
    }

    .content :global(em) {
        font-style: italic;
    }

    .content :global(.hint-mobile) {
        display: none;
    }

    @media (pointer: coarse) and (hover: none) {
        .content :global(.hint-desktop) {
            display: none;
        }
        .content :global(.hint-mobile) {
            display: block;
        }
    }

    .content :global(strong) {
        font-weight: 600;
        color: #e0e0e0;
    }

    .content :global(img) {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 1rem 0;
        display: block;
    }

    .content :global(blockquote) {
        border-left: 3px solid #c4a35a;
        margin: 1rem 0;
        padding-left: 1rem;
        color: #b0b0b0;
        font-style: italic;
    }

    .items-found {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
    }

    .item-found {
        background: linear-gradient(135deg, #2d4a3e 0%, #1d3a2e 100%);
        border: 1px solid #3d6a5e;
        border-radius: 8px;
        padding: 1rem 1.25rem;
    }

    .item-found p {
        margin: 0;
        color: #a8d8c8;
    }

    .item-found strong {
        color: #c4e8d8;
    }

    .item-description {
        margin-top: 0.5rem !important;
        font-size: 0.9rem;
        opacity: 0.9;
    }

    .drop-zones {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
    }

    .choices {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .restart-link {
        display: block;
        width: 100%;
        padding: 0.875rem 1.25rem;
        background: linear-gradient(135deg, #4a3a2d 0%, #3a2a1d 100%);
        border: 1px solid #6a5a3d;
        border-radius: 8px;
        color: #d8c8a8;
        font-size: 1rem;
        text-align: left;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .restart-link:hover {
        background: linear-gradient(135deg, #6a5a3d 0%, #5a4a2d 100%);
        border-color: #8a7a5d;
        transform: translateX(4px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .restart-link:active {
        transform: translateX(2px);
    }

    .death-screen {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
        margin: 2rem 0;
    }

    .death-text {
        font-size: 3rem;
        font-weight: 400;
        letter-spacing: 0.4em;
        color: #8b0000;
        text-shadow:
            0 0 20px rgba(139, 0, 0, 0.5),
            0 0 40px rgba(139, 0, 0, 0.3),
            0 0 60px rgba(139, 0, 0, 0.2);
        animation: death-fade-in 3s ease-out forwards;
        opacity: 0;
        font-family: "Times New Roman", Times, serif;
    }

    @keyframes death-fade-in {
        0% {
            opacity: 0;
            letter-spacing: 0.6em;
            filter: blur(4px);
        }
        50% {
            opacity: 0.8;
            filter: blur(1px);
        }
        100% {
            opacity: 1;
            letter-spacing: 0.4em;
            filter: blur(0);
        }
    }

    .complete-text {
        font-size: 3rem;
        font-weight: 400;
        letter-spacing: 0.4em;
        color: #2e7d32;
        text-shadow:
            0 0 20px rgba(46, 125, 50, 0.5),
            0 0 40px rgba(46, 125, 50, 0.3),
            0 0 60px rgba(46, 125, 50, 0.2);
        animation: death-fade-in 3s ease-out forwards;
        opacity: 0;
        font-family: "Times New Roman", Times, serif;
    }
</style>
