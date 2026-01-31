<script lang="ts">
    import type { StoryPage as StoryPageType } from "../types";
    import { addItem, hasItem } from "../inventory.svelte";
    import { parseMarkdown } from "../markdown";
    import PageLink from "./PageLink.svelte";
    import DropZone from "./DropZone.svelte";

    interface Props {
        page: StoryPageType;
    }

    let { page }: Props = $props();

    // Track if we've shown the item pickup message for this page visit
    let pickedUpItem = $state(false);
    let currentPageId = $state(page.id);

    // Reset pickup state when page changes
    $effect(() => {
        if (page.id !== currentPageId) {
            pickedUpItem = false;
            currentPageId = page.id;
        }
    });

    // Automatically pick up item if present and not already in inventory
    $effect(() => {
        if (page.itemToFind && !hasItem(page.itemToFind.id) && !pickedUpItem) {
            addItem(page.itemToFind);
            pickedUpItem = true;
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

    {#if pickedUpItem && page.itemToFind}
        <div class="item-found">
            <p>You found: <strong>{page.itemToFind.name}</strong></p>
            <p class="item-description">{page.itemToFind.description}</p>
        </div>
    {/if}

    {#if page.dropZones.length > 0}
        <section class="drop-zones">
            {#each page.dropZones as zone (zone.id)}
                <DropZone {zone} />
            {/each}
        </section>
    {/if}

    <nav class="choices">
        {#each page.links as link}
            <PageLink targetPageId={link.targetPageId} text={link.text} />
        {/each}
    </nav>
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

    .content :global(strong) {
        font-weight: 600;
        color: #e0e0e0;
    }

    .content :global(blockquote) {
        border-left: 3px solid #c4a35a;
        margin: 1rem 0;
        padding-left: 1rem;
        color: #b0b0b0;
        font-style: italic;
    }

    .item-found {
        background: linear-gradient(135deg, #2d4a3e 0%, #1d3a2e 100%);
        border: 1px solid #3d6a5e;
        border-radius: 8px;
        padding: 1rem 1.25rem;
        margin-bottom: 1.5rem;
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
</style>
