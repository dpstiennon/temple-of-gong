<script lang="ts">
    import type { DropZone as DropZoneType } from "../types";
    import { isZoneActivated } from "../dragState.svelte";
    import { navigateTo } from "../router.svelte";

    interface Props {
        zone: DropZoneType;
    }

    let { zone }: Props = $props();

    // Check if this zone is already activated
    let activated = $derived(isZoneActivated(zone.id));

    function handleNavigate() {
        navigateTo(zone.hiddenLink.targetPageId);
    }
</script>

{#if activated}
    <div
        class="drop-zone activated"
        role="region"
        aria-label={zone.description}
    >
        <div class="revealed">
            <p class="reveal-message">{zone.hiddenLink.revealMessage}</p>
            <button class="hidden-link" onclick={handleNavigate}>
                {zone.hiddenLink.text}
            </button>
        </div>
    </div>
{/if}

<style>
    .drop-zone {
        padding: 1rem 1.25rem;
        border: 2px solid #5d8a7e;
        border-radius: 8px;
        background: linear-gradient(135deg, #2d4a3e 0%, #1d3a2e 100%);
    }

    .revealed {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .reveal-message {
        margin: 0;
        color: #e4c37a;
        font-style: italic;
        line-height: 1.6;
    }

    .hidden-link {
        padding: 0.75rem 1rem;
        background: linear-gradient(135deg, #4a3a6e 0%, #3a2a5e 100%);
        border: 1px solid #6a5a8e;
        border-radius: 8px;
        color: #c8b8e8;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: left;
    }

    .hidden-link:hover {
        background: linear-gradient(135deg, #5a4a7e 0%, #4a3a6e 100%);
        border-color: #8a7aae;
        transform: translateX(4px);
    }
</style>
