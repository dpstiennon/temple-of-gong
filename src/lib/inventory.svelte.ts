// Inventory store with session storage persistence
import type { InventoryItem } from "./types";

const STORAGE_KEY = "temple-of-gong-inventory";

const STARTING_ITEMS: InventoryItem[] = [
  {
    id: "postcard",
    name: "The Postcard that Started It All",
    description:
      'Shows a Himalayan temple, and a hastily scrawled message of "Send Help -- Jonah".',
  },
  {
    id: "comic-book",
    name: "A comic book",
    description: "A well-worn comic book about a hero who talks to animals.",
  },
  {
    id: "matches",
    name: "A box of matches",
    description: "A small box of wooden matches. Most are still unused.",
  },
  {
    id: "spork",
    name: "A titanium spork",
    description:
      "A surprisingly sturdy titanium spork. Good for eating... or adventure.",
  },
];

function loadFromStorage(): InventoryItem[] {
  if (typeof window === "undefined") return [...STARTING_ITEMS];

  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [...STARTING_ITEMS];
    }
  }
  return [...STARTING_ITEMS];
}

function saveToStorage(items: InventoryItem[]) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
}

let items = $state<InventoryItem[]>(loadFromStorage());

export function addItem(item: InventoryItem) {
  if (!items.some((i) => i.id === item.id)) {
    items = [...items, item];
    saveToStorage(items);
  }
}

export function removeItem(itemId: string) {
  items = items.filter((i) => i.id !== itemId);
  saveToStorage(items);
}

export function hasItem(itemId: string): boolean {
  return items.some((i) => i.id === itemId);
}

export function getItem(itemId: string): InventoryItem | undefined {
  return items.find((i) => i.id === itemId);
}

export function resetInventory() {
  items = [...STARTING_ITEMS];
  saveToStorage(items);
  // Also clear activated zones
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("temple-of-gong-activated-zones");
  }
}

export const inventory = {
  get items() {
    return items;
  },
};
