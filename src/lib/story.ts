import type { StoryPage } from "./types";
import startContent from "./content/start.md?raw";
import shopContent from "./content/shop.md?raw";
import shopkeeperContent from "./content/shopkeeper.md?raw";
import kathmanduTempleContent from "./content/kathmandu-temple.md?raw";
import templeMonksContent from "./content/temple-monks.md?raw";
import mountainPathContent from "./content/mountain-path.md?raw";
import lostInMountainsContent from "./content/lost-in-mountains.md?raw";

export const storyPages: StoryPage[] = [
  {
    id: "start",
    title: "A Mysterious Postcard",
    content: startContent,
    links: [
      { targetPageId: "shop", text: "Go inside the shop" },
      { targetPageId: "mountain-path", text: "Set off into the mountains" },
      { targetPageId: "kathmandu-temple", text: "Continue on your way" },
    ],
    dropZones: [],
    itemsToFind: [
      {
        id: "postcard",
        name: "The mysterious postcard",
        description:
          "A worn postcard from Kathmandu. The image shows a temple high in the Himalayas with an immense golden gong. On the back, in Jonah's handwriting: 'Send Help'.",
      },
    ],
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
      {
        targetPageId: "mountain-path",
        text: "Leave the shop and set off into the mountains",
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
    itemsToFind: [
      {
        id: "brass-bell",
        name: "A brass bell",
        description:
          "A small brass bell from the gong shop. It hums faintly when you hold it to your ear. The shopkeeper insisted you show it to the monks.",
      },
      {
        id: "temple-map",
        name: "A hand-drawn map",
        description:
          "A rough map sketched on yellowed paper, showing the mountain path north of Kathmandu. The Temple of Gong is marked with a small drawing of a monkey face.",
      },
    ],
  },
  {
    id: "kathmandu-temple",
    title: "The Great Temple",
    content: kathmanduTempleContent,
    links: [
      { targetPageId: "shop", text: "Visit the gong shop" },
      { targetPageId: "mountain-path", text: "Set off into the mountains" },
    ],
    dropZones: [
      {
        id: "show-postcard-monks",
        description: "The monk waits patiently",
        acceptsItemId: "postcard",
        consumeItem: false,
        hiddenLink: {
          targetPageId: "temple-monks",
          text: "Ask the monks about the temple in the photograph",
          revealMessage:
            "The monk's expression grows thoughtful as he studies the image on the postcard.",
        },
      },
    ],
  },
  {
    id: "temple-monks",
    title: "The Monks' Warning",
    content: templeMonksContent,
    links: [
      { targetPageId: "mountain-path", text: "Set off into the mountains" },
      { targetPageId: "shop", text: "Visit the gong shop first" },
    ],
    dropZones: [],
    itemsToFind: [
      {
        id: "temple-map",
        name: "A hand-drawn map",
        description:
          "A rough map sketched on yellowed paper, showing the mountain path north of Kathmandu. The Temple of Gong is marked with a small drawing of a monkey face.",
      },
    ],
  },
  {
    id: "mountain-path",
    title: "The Mountain Path",
    content: mountainPathContent,
    links: [
      { targetPageId: "lost-in-mountains", text: "Wander deeper into the mountains" },
      { targetPageId: "kathmandu-temple", text: "Return to Kathmandu" },
    ],
    dropZones: [
      {
        id: "consult-map",
        description: "The path branches ahead, unmarked and uncertain",
        acceptsItemId: "temple-map",
        consumeItem: false,
        hiddenLink: {
          targetPageId: "temple-of-gong",
          text: "Follow the map to the Temple of Gong",
          revealMessage:
            "You unfold the yellowed paper and trace the route with your finger. There—the fork to the right, then up through the snow line. The monkey face marking is unmistakable.",
        },
      },
    ],
  },
  {
    id: "lost-in-mountains",
    title: "The End",
    content: lostInMountainsContent,
    links: [],
    dropZones: [],
    ending: "death",
  },
];

export function getPage(pageId: string): StoryPage | undefined {
  return storyPages.find((p) => p.id === pageId);
}
