import type { StoryPage } from "./types";
import startContent from "./content/start.md?raw";
import shopContent from "./content/shop.md?raw";
import shopkeeperContent from "./content/shopkeeper.md?raw";
import kathmanduTempleContent from "./content/kathmandu-temple.md?raw";
import templeMonksContent from "./content/temple-monks.md?raw";
import mountainPathContent from "./content/mountain-path.md?raw";
import lostInMountainsContent from "./content/lost-in-mountains.md?raw";
import templeOfGongContent from "./content/temple-of-gong.md?raw";
import templeCourtyardContent from "./content/temple-courtyard.md?raw";
import templeTourContent from "./content/temple-tour.md?raw";
import templeIdolContent from "./content/temple-idol.md?raw";
import templeQuartersContent from "./content/temple-quarters.md?raw";
import templeNightContent from "./content/temple-night.md?raw";
import templePrisonContent from "./content/temple-prison.md?raw";
import prisonWaitContent from "./content/prison-wait.md?raw";
import prisonEscapeContent from "./content/prison-escape.md?raw";
import rescueComicContent from "./content/rescue-comic.md?raw";
import rescueFailContent from "./content/rescue-fail.md?raw";
import templeEscapeContent from "./content/temple-escape.md?raw";
import escapePathContent from "./content/escape-path.md?raw";
import escapeZeppelinContent from "./content/escape-zeppelin.md?raw";
import zeppelinFallContent from "./content/zeppelin-fall.md?raw";
import shangriLaContent from "./content/shangri-la.md?raw";
import bellUsedContent from "./content/bell-used.md?raw";

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
      {
        targetPageId: "lost-in-mountains",
        text: "Wander deeper into the mountains",
      },
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
  {
    id: "temple-of-gong",
    title: "The Temple of Gong",
    content: templeOfGongContent,
    links: [
      { targetPageId: "temple-courtyard", text: "Enter the temple courtyard" },
    ],
    dropZones: [],
  },

  // === TEMPLE OF GONG SEQUENCE ===

  {
    id: "temple-courtyard",
    title: "The Temple Courtyard",
    content: templeCourtyardContent,
    links: [
      { targetPageId: "temple-tour", text: "Accept the tour" },
      { targetPageId: "temple-quarters", text: "Ask for a place to rest" },
    ],
    dropZones: [
      {
        id: "ring-bell-courtyard",
        description: "The monks watch you curiously",
        acceptsItemId: "brass-bell",
        consumeItem: true,
        hiddenLink: {
          targetPageId: "bell-used",
          text: "The monks seize you",
          revealMessage:
            "The clear ring of the bell echoes across the courtyard. Every monk freezes.",
        },
      },
    ],
  },
  {
    id: "temple-tour",
    title: "The Temple Tour",
    content: templeTourContent,
    links: [
      { targetPageId: "temple-idol", text: "Enter the central temple" },
      { targetPageId: "temple-quarters", text: "Ask for a place to rest" },
    ],
    dropZones: [
      {
        id: "ring-bell-tour",
        description: "The monks watch you curiously",
        acceptsItemId: "brass-bell",
        consumeItem: true,
        hiddenLink: {
          targetPageId: "bell-used",
          text: "The monks seize you",
          revealMessage:
            "The clear ring of the bell echoes through the complex. Every monk freezes.",
        },
      },
    ],
  },
  {
    id: "temple-idol",
    title: "The Idol of Gong",
    content: templeIdolContent,
    links: [
      { targetPageId: "temple-quarters", text: "Ask for a place to rest" },
      { targetPageId: "temple-courtyard", text: "Return to the courtyard" },
    ],
    dropZones: [
      {
        id: "ring-bell-idol",
        description: "The monks watch you curiously",
        acceptsItemId: "brass-bell",
        consumeItem: true,
        hiddenLink: {
          targetPageId: "bell-used",
          text: "The monks seize you",
          revealMessage:
            "The bell's ring echoes beneath the giant brass monkey. Every monk freezes.",
        },
      },
    ],
  },
  {
    id: "temple-quarters",
    title: "The Guest Quarters",
    content: templeQuartersContent,
    links: [
      { targetPageId: "temple-night", text: "Sneak out at night" },
      {
        targetPageId: "temple-tour",
        text: "Wait for morning and take the tour",
      },
    ],
    dropZones: [],
  },
  {
    id: "temple-night",
    title: "Night in the Temple",
    content: templeNightContent,
    links: [
      {
        targetPageId: "rescue-comic",
        text: "Distract the guard with something",
      },
      { targetPageId: "rescue-fail", text: "Try to sneak past the guard" },
    ],
    dropZones: [
      {
        id: "use-comic-book",
        description: "A guard sits by the prison stairs, half-asleep",
        acceptsItemId: "comic-book",
        consumeItem: true,
        hiddenLink: {
          targetPageId: "rescue-comic",
          text: "The guard is completely absorbed in the comic",
          revealMessage:
            "The guard's eyes go wide at the colorful pages. He's never seen anything like it.",
        },
      },
    ],
  },
  {
    id: "bell-used",
    title: "Blasphemy!",
    content: bellUsedContent,
    links: [
      { targetPageId: "temple-prison", text: "You are thrown into the cells" },
    ],
    dropZones: [],
  },
  {
    id: "temple-prison",
    title: "The Prison Cells",
    content: templePrisonContent,
    links: [{ targetPageId: "prison-wait", text: "Wait and see what happens" }],
    dropZones: [
      {
        id: "use-spork-prison",
        description: "The stone walls are ancient, the mortar crumbling",
        acceptsItemId: "titanium-spork",
        consumeItem: false,
        hiddenLink: {
          targetPageId: "prison-escape",
          text: "Dig through the wall",
          revealMessage:
            "The titanium spork bites into the ancient mortar. This might actually work.",
        },
      },
    ],
  },
  {
    id: "prison-wait",
    title: "The End",
    content: prisonWaitContent,
    links: [],
    dropZones: [],
    ending: "death",
  },
  {
    id: "prison-escape",
    title: "Escape!",
    content: prisonEscapeContent,
    links: [{ targetPageId: "temple-escape", text: "Run!" }],
    dropZones: [],
  },
  {
    id: "rescue-comic",
    title: "The Distraction",
    content: rescueComicContent,
    links: [{ targetPageId: "temple-escape", text: "Run!" }],
    dropZones: [],
  },
  {
    id: "rescue-fail",
    title: "Caught!",
    content: rescueFailContent,
    links: [
      { targetPageId: "temple-prison", text: "You are thrown into the cells" },
    ],
    dropZones: [],
  },
  {
    id: "temple-escape",
    title: "The Alarm",
    content: templeEscapeContent,
    links: [
      { targetPageId: "escape-path", text: "Run down the mountain path" },
      { targetPageId: "escape-zeppelin", text: "Follow Jonah's plan" },
    ],
    dropZones: [],
  },
  {
    id: "escape-path",
    title: "The End",
    content: escapePathContent,
    links: [],
    dropZones: [],
    ending: "death",
  },
  {
    id: "escape-zeppelin",
    title: "The Pocket Zeppelin",
    content: escapeZeppelinContent,
    links: [{ targetPageId: "zeppelin-fall", text: "Climb aboard" }],
    dropZones: [],
  },
  {
    id: "zeppelin-fall",
    title: "The Fall",
    content: zeppelinFallContent,
    links: [{ targetPageId: "shangri-la", text: "Look around" }],
    dropZones: [],
  },
  {
    id: "shangri-la",
    title: "Shangri-La",
    content: shangriLaContent,
    links: [],
    dropZones: [],
  },
];

export function getPage(pageId: string): StoryPage | undefined {
  return storyPages.find((p) => p.id === pageId);
}
