import type { StoryPage } from "./types";
import startContent from "./content/start.md?raw";
import shopContent from "./content/shop.md?raw";
import shopkeeperContent from "./content/shopkeeper.md?raw";

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
    itemToFind: {
      id: "postcard",
      name: "The mysterious postcard",
      description:
        "A worn postcard from Kathmandu. The image shows a temple high in the Himalayas with an immense golden gong. On the back, in Jonah's handwriting: 'Send Help'.",
    },
  },
  {
    id: "shop",
    title: "The Gong Shop",
    content: shopContent,
    links: [
      {
        targetPageId: "kathmandu-temple",
        text: "Leave the shop and explore Kathmandu",
      },
    ],
    dropZones: [
      {
        id: "show-postcard",
        description: "The shopkeeper watches you expectantly",
        acceptsItemId: "postcard",
        consumeItem: false,
        hiddenLink: {
          targetPageId: "shopkeeper",
          text: "See what the shopkeeper has to say",
          revealMessage:
            "The shopkeeper's eyes light up with recognition as he sees the image on the postcard.",
        },
      },
    ],
  },
  {
    id: "shopkeeper",
    title: "The Shopkeeper's Tale",
    content: shopkeeperContent,
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
