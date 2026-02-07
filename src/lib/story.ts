import type { StoryPage } from "./types";
import homeContent from "./content/home.md?raw";
import startContent from "./content/start.md?raw";
import kathmanduStreetsContent from "./content/kathmandu-streets.md?raw";
import shopContent from "./content/shop.md?raw";
import shopkeeperContent from "./content/shopkeeper.md?raw";
import kathmanduTempleContent from "./content/kathmandu-temple.md?raw";
import templeMonksContent from "./content/temple-monks.md?raw";
import mountainPathContent from "./content/mountain-path.md?raw";
import lostInMountainsContent from "./content/lost-in-mountains.md?raw";
import templeOfGongContent from "./content/temple-of-gong.md?raw";
import templeCourtyardContent from "./content/temple-courtyard.md?raw";
import templeCourtyardPostcardContent from "./content/temple-courtyard-postcard.md?raw";
import templeSideBuildingContent from "./content/temple-side-building.md?raw";
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
// Shangri-La sequence
import shangriDeclareContent from "./content/shangri-declare.md?raw";
import shangriHideContent from "./content/shangri-hide.md?raw";
import shangriFestivalContent from "./content/shangri-festival.md?raw";
import shangriMaskStallContent from "./content/shangri-mask-stall.md?raw";
import shangriMaskStorageContent from "./content/shangri-mask-storage.md?raw";
import shangriNoMaskContent from "./content/shangri-no-mask.md?raw";
import shangriMaskedContent from "./content/shangri-masked.md?raw";
import shangriCloseCallContent from "./content/shangri-close-call.md?raw";
import shangriDorjeContent from "./content/shangri-dorje.md?raw";
import shangriMeiContent from "./content/shangri-mei.md?raw";

export const storyPages: StoryPage[] = [
  {
    id: "home",
    title: "An Ordinary Day",
    content: homeContent,
    links: [],
    dropZones: [
      {
        id: "open-mailbox",
        description: "Your mailbox awaits",
        acceptsItemId: "mailbox-key",
        consumeItem: true,
        rewardItem: {
          id: "postcard",
          name: "The mysterious postcard",
          description:
            "A worn postcard from Kathmandu. The image shows a temple high in the Himalayas with an immense golden gong. On the back, in Jonah's handwriting: 'Send Help'.",
        },
        hiddenLink: {
          targetPageId: "start",
          text: "Book the first flight to Kathmandu",
          revealMessage:
            "Inside the mailbox, a single postcard. The stamp is faded, the edges worn soft. The postmark reads Kathmandu, Nepal. You flip it over. Just two words in Jonah's handwriting: Send Help.",
        },
      },
    ],
  },
  {
    id: "start",
    title: "Kathmandu",
    content: startContent,
    links: [
      { targetPageId: "kathmandu-streets", text: "Head into the streets" },
    ],
    dropZones: [],
    itemsToFind: [
      {
        id: "comic-book",
        name: "A comic book",
        description:
          "A well-worn comic book about a hero who talks to animals.",
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
    ],
  },
  {
    id: "kathmandu-streets",
    title: "The Streets of Kathmandu",
    content: kathmanduStreetsContent,
    links: [
      { targetPageId: "shop", text: "Go inside the shop" },
      { targetPageId: "mountain-path", text: "Set off into the mountains" },
      { targetPageId: "kathmandu-temple", text: "Continue to the temple" },
    ],
    dropZones: [],
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
            "You unfold the yellowed paper and trace the route with your finger. There—the fork to the right, then up through the snow line.",
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
      { targetPageId: "temple-quarters", text: "Stay the night" },
      { targetPageId: "temple-idol", text: "Explore the main building" },
      {
        targetPageId: "temple-side-building",
        text: "Explore the unremarkable side building",
      },
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
      {
        id: "show-postcard-tenzin",
        description: "Tenzin watches you with that fixed smile",
        acceptsItemId: "postcard",
        consumeItem: false,
        hiddenLink: {
          targetPageId: "temple-courtyard-postcard",
          text: "See what Tenzin makes of the postcard",
          revealMessage:
            "Tenzin takes the postcard between thumb and forefinger. His expression does not change.",
        },
      },
    ],
  },
  {
    id: "temple-courtyard-postcard",
    title: "The Gift Shop",
    content: templeCourtyardPostcardContent,
    links: [
      { targetPageId: "temple-side-building", text: 'Visit the "gift shop"' },
      { targetPageId: "temple-quarters", text: "Stay the night" },
      { targetPageId: "temple-idol", text: "Explore the main building" },
    ],
    dropZones: [],
  },
  {
    id: "temple-side-building",
    title: "The Side Building",
    content: templeSideBuildingContent,
    links: [
      { targetPageId: "temple-courtyard", text: "Return to the courtyard" },
    ],
    dropZones: [],
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
        targetPageId: "temple-idol",
        text: "Wait for morning and explore the temple",
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

  // === SHANGRI-LA SEQUENCE ===

  {
    id: "shangri-la",
    title: "Shangri-La",
    content: shangriLaContent,
    links: [
      { targetPageId: "shangri-declare", text: "Approach the city openly" },
      { targetPageId: "shangri-hide", text: "Hide and observe" },
    ],
    dropZones: [],
  },
  {
    id: "shangri-declare",
    title: "The End",
    content: shangriDeclareContent,
    links: [],
    dropZones: [],
    ending: "death",
  },
  {
    id: "shangri-hide",
    title: "The Hidden Valley",
    content: shangriHideContent,
    links: [
      {
        targetPageId: "shangri-festival",
        text: "Wait for nightfall and approach the festival",
      },
    ],
    dropZones: [],
  },
  {
    id: "shangri-festival",
    title: "The Festival of Silence",
    content: shangriFestivalContent,
    links: [
      {
        targetPageId: "shangri-mask-stall",
        text: "Steal a mask from an unattended stall",
      },
      {
        targetPageId: "shangri-mask-storage",
        text: "Sneak into the temple's costume storage",
      },
      {
        targetPageId: "shangri-no-mask",
        text: "Try to blend in without a mask",
      },
    ],
    dropZones: [],
  },
  {
    id: "shangri-mask-stall",
    title: "The Stolen Mask",
    content: shangriMaskStallContent,
    links: [
      { targetPageId: "shangri-masked", text: "Join the festival crowd" },
    ],
    dropZones: [],
    itemsToFind: [
      {
        id: "festival-mask",
        name: "A festival mask",
        description:
          "A monkey mask of painted wood and lacquered paper, red and gold with bared teeth. It smells of incense and old festivals.",
      },
    ],
  },
  {
    id: "shangri-mask-storage",
    title: "The Temple Storage",
    content: shangriMaskStorageContent,
    links: [
      { targetPageId: "shangri-masked", text: "Join the festival crowd" },
    ],
    dropZones: [],
    itemsToFind: [
      {
        id: "festival-mask",
        name: "A festival mask",
        description:
          "A demon mask with a snarling face, carved wood painted in fierce reds and blacks. It feels heavier than it should.",
      },
    ],
  },
  {
    id: "shangri-no-mask",
    title: "The End",
    content: shangriNoMaskContent,
    links: [],
    dropZones: [],
    ending: "death",
  },
  {
    id: "shangri-masked",
    title: "Among the Masks",
    content: shangriMaskedContent,
    links: [
      {
        targetPageId: "shangri-close-call",
        text: "Continue through the crowd",
      },
    ],
    dropZones: [],
  },
  {
    id: "shangri-close-call",
    title: "The Patrol",
    content: shangriCloseCallContent,
    links: [
      {
        targetPageId: "shangri-dorje",
        text: "Duck into the gong-maker's shop",
      },
      { targetPageId: "shangri-mei", text: "Dive into the cistern" },
    ],
    dropZones: [],
  },
  {
    id: "shangri-dorje",
    title: "The Gong-Maker",
    content: shangriDorjeContent,
    links: [],
    dropZones: [],
  },
  {
    id: "shangri-mei",
    title: "The Cistern",
    content: shangriMeiContent,
    links: [],
    dropZones: [],
  },
];

export function getPage(pageId: string): StoryPage | undefined {
  return storyPages.find((p) => p.id === pageId);
}
