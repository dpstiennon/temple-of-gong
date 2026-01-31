# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Temple of Gong is an interactive text adventure / puzzle game built with Svelte 5 and TypeScript. Players explore a temple, collect items, and solve drag-and-drop puzzles to progress through the story.

## Writing Style

When composing or editing narrative content for story scenes, reference `/voice-profile-fiction.md` for the written style guide.

## Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run check    # Type check Svelte and TypeScript files
```

No linter is configured. Type checking uses `svelte-check` and `tsc`.

## Architecture

**State Management:** Uses Svelte 5 runes (`$state`, `$derived`, `$effect`) instead of stores. State files are in `/src/lib/` with `.svelte.ts` extension.

**Key State Modules:**
- `inventory.svelte.ts` - Player inventory, persisted to sessionStorage
- `router.svelte.ts` - Hash-based routing (`#/pageId`)
- `dragState.svelte.ts` - Drag-and-drop state and activated puzzle zones

**Game Data:** `/src/lib/story.ts` contains all 9 story pages with narrative content, items, drop zones, and navigation choices.

**Components:** `/src/lib/components/`
- `GameLayout.svelte` - Main grid layout with story area and inventory sidebar
- `StoryPage.svelte` - Renders current page content, items, and choices
- `DropZone.svelte` - Puzzle zones that accept specific inventory items
- `InventoryItem.svelte` - Draggable items in the sidebar

**Persistence:** Game state stored in sessionStorage:
- `temple-of-gong-inventory` - Current inventory items
- `temple-of-gong-activated-zones` - Solved puzzle zones

## Game Mechanics

Drop zones accept specific items (`acceptsItemId`). When an item is dropped:
1. Item is removed from inventory
2. Zone is marked as activated
3. Optional reward item is added
4. Hidden navigation link is revealed
