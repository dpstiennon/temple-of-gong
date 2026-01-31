import type { StoryPage } from "./types";
import startContent from "./content/start.md?raw";
import shopContent from "./content/shop.md?raw";

export const storyPages: StoryPage[] = [
  {
    id: "start",
    title: "A Mysterious Postcard",
    content: startContent,
    links: [
      { targetPageId: "shop", text: "Go inside the shop" },
      { targetPageId: "kathmandu-temple", text: "Continue on your way" },
    ],
    dropZones: [],
  },
  {
    id: "shop",
    title: "The Gong Shop",
    content: shopContent,
    links: [
      { targetPageId: "mountain-path", text: "Set off into the mountains" },
      {
        targetPageId: "kathmandu-temple",
        text: "Explore Kathmandu further first",
      },
    ],
    dropZones: [],
    itemToFind: {
      id: "brass-bell",
      name: "A brass bell",
      description:
        "A small brass bell from the gong shop. It hums faintly when you hold it to your ear. The shopkeeper insisted you show it to the monks.",
    },
  },
];

export function getPage(pageId: string): StoryPage | undefined {
  return storyPages.find((p) => p.id === pageId);
}
