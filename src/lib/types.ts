// Inventory item that can be dragged and dropped
export interface InventoryItem {
  id: string;
  name: string;
  description: string;
}

// Regular navigation link shown on a page
export interface PageLink {
  targetPageId: string;
  text: string;
}

// Hidden link revealed when correct item is dropped on a zone
export interface HiddenLink {
  targetPageId: string;
  text: string;
  revealMessage: string; // Message shown when zone is activated
}

// Drop zone that accepts a specific item
export interface DropZone {
  id: string;
  description: string; // What the zone looks like before activation
  acceptsItemId: string;
  hiddenLink: HiddenLink;
  rewardItem?: InventoryItem; // Optional item gained when activated
  consumeItem?: boolean; // If false, item stays in inventory after drop (default: true)
}

// Ending type for terminal pages
export type EndingType = "death" | "complete";

// A page in the story
export interface StoryPage {
  id: string;
  title: string;
  content: string;
  links: PageLink[];
  dropZones: DropZone[];
  itemsToFind?: InventoryItem[]; // Items automatically picked up when visiting
  ending?: EndingType; // If set, this is a terminal page with a restart link
}
