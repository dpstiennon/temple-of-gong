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
import templeGiftShopContent from "./content/temple-gift-shop.md?raw";
import templeSideBuildingContent from "./content/temple-side-building.md?raw";
import templeIdolContent from "./content/temple-idol.md?raw";
import templeQuartersContent from "./content/temple-quarters.md?raw";
import templeNightContent from "./content/temple-night.md?raw";
import jonahCellContent from "./content/jonah-cell.md?raw";
import guardDistractedContent from "./content/guard-distracted.md?raw";
import templePrisonContent from "./content/temple-prison.md?raw";
import prisonWaitContent from "./content/prison-wait.md?raw";
import prisonEscapeContent from "./content/prison-escape.md?raw";
import rescueComicContent from "./content/rescue-comic.md?raw";
import rescueFailContent from "./content/rescue-fail.md?raw";
import templeEscapeContent from "./content/temple-escape.md?raw";
import escapePathContent from "./content/escape-path.md?raw";
import escapeZeppelinContent from "./content/escape-zeppelin.md?raw";
import escapeZeppelinEndingContent from "./content/escape-zeppelin-ending.md?raw";
import zeppelinFallContent from "./content/zeppelin-fall.md?raw";
import shangriLaContent from "./content/shangri-la.md?raw";
import bellUsedContent from "./content/bell-used.md?raw";
import templePerimeterContent from "./content/temple-perimeter.md?raw";
import templePerimeterDescentContent from "./content/temple-perimeter-descent.md?raw";
// Shangri-La sequence
import shangriDeclareContent from "./content/shangri-declare.md?raw";
import shangriHideContent from "./content/shangri-hide.md?raw";
import shangriDorjeContent from "./content/shangri-dorje.md?raw";
import shangriNightfallContent from "./content/shangri-nightfall.md?raw";
import shangriDistractFireContent from "./content/shangri-distract-fire.md?raw";
import shangriDistractComicContent from "./content/shangri-distract-comic.md?raw";
import shangriBalloonApproachContent from "./content/shangri-balloon-approach.md?raw";
import shangriSeizedContent from "./content/shangri-seized.md?raw";
import shangriBalloonRideContent from "./content/shangri-balloon-ride.md?raw";
import shangriCisternContent from "./content/shangri-cistern.md?raw";
// Cistern sequence
import cisternBobContent from "./content/cistern-bob.md?raw";
import cisternNightContent from "./content/cistern-night.md?raw";
import cisternDeathContent from "./content/cistern-death.md?raw";
import cisternCaughtContent from "./content/cistern-caught.md?raw";
import cisternVentsContent from "./content/cistern-vents.md?raw";
import cisternStayContent from "./content/cistern-stay.md?raw";
import cisternEruptionContent from "./content/cistern-eruption.md?raw";
import cisternLandingContent from "./content/cistern-landing.md?raw";

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
          "A well-worn comic book about a family of ducks going on wild adventures.",
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
        text: "The power of friendship will guide you!  Press on!",
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
        targetPageId: "temple-gift-shop",
        text: "Explore the unremarkable side building",
      },
      {
        targetPageId: "temple-perimeter",
        text: "Explore the temple perimeter",
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
      { targetPageId: "temple-gift-shop", text: 'Visit the "gift shop"' },
      { targetPageId: "temple-quarters", text: "Stay the night" },
      { targetPageId: "temple-idol", text: "Explore the main building" },
      {
        targetPageId: "temple-perimeter",
        text: "Explore the temple perimeter",
      },
    ],
    dropZones: [],
  },
  {
    id: "temple-gift-shop",
    title: "The Gift Shop",
    content: templeGiftShopContent,
    links: [
      {
        targetPageId: "temple-side-building",
        text: "Continue exploring the side buildings",
      },
      { targetPageId: "temple-idol", text: "Visit the main temple" },
      {
        targetPageId: "temple-perimeter",
        text: "Explore the temple perimeter",
      },
    ],
    dropZones: [],
  },
  {
    id: "temple-side-building",
    title: "The Side Buildings",
    content: templeSideBuildingContent,
    links: [{ targetPageId: "jonah-cell", text: "Talk to Jonah" }],
    dropZones: [],
  },
  {
    id: "jonah-cell",
    title: "Jonah",
    content: jonahCellContent,
    links: [
      {
        targetPageId: "temple-quarters",
        text: "Head back and wait for nightfall",
      },
      {
        targetPageId: "temple-idol",
        text: "Explore main temple",
      },
      {
        targetPageId: "temple-perimeter",
        text: "Explore the temple perimeter",
      },
    ],
    dropZones: [],
  },
  {
    id: "temple-idol",
    title: "The Idol of Gong",
    content: templeIdolContent,
    links: [
      { targetPageId: "temple-quarters", text: "Ask for a place to rest" },
      {
        targetPageId: "temple-gift-shop",
        text: "Explore the side buildings",
      },
      {
        targetPageId: "temple-perimeter",
        text: "Explore the temple perimeter",
      },
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
      { targetPageId: "temple-night", text: "Explore the temple at night" },
      {
        targetPageId: "temple-festival",
        text: "Wait for the Festival of Ten Thousand Gongs",
      },
    ],
    dropZones: [],
  },
  {
    id: "temple-night",
    title: "Night in the Temple",
    content: templeNightContent,
    links: [
      { targetPageId: "rescue-fail", text: "Try to sneak past the guard" },
      {
        targetPageId: "temple-festival",
        text: "Head back to your quarters and wait for the festival tomorrow",
      },
    ],
    dropZones: [
      {
        id: "use-comic-book",
        description: "The guard paces back and forth between the torches",
        acceptsItemId: "comic-book",
        consumeItem: true,
        hiddenLink: {
          targetPageId: "guard-distracted",
          text: "The guard is completely absorbed in the comic",
          revealMessage:
            "The guard's eyes go wide at the colorful pages. He's never seen anything like it.",
        },
      },
    ],
  },
  {
    id: "guard-distracted",
    title: "The Distraction",
    content: guardDistractedContent,
    links: [
      { targetPageId: "rescue-comic", text: "Take the keys and rescue Jonah" },
    ],
    itemsToFind: [
      {
        id: "jail-keys",
        name: "Jail keys",
        description:
          "A ring of heavy iron keys, still warm from the guard's belt.",
      },
    ],
    dropZones: [],
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
    title: "The Rescue",
    content: rescueComicContent,
    links: [],
    dropZones: [
      {
        id: "use-jail-keys",
        description: "The cell door is locked with a heavy iron bolt",
        acceptsItemId: "jail-keys",
        consumeItem: true,
        hiddenLink: {
          targetPageId: "temple-escape",
          text: "Free Jonah and run",
          revealMessage:
            "The key turns. The bolt slides. Jonah is on his feet before the door is fully open.",
        },
      },
    ],
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
    title: "The Escape",
    content: templeEscapeContent,
    links: [
      {
        targetPageId: "escape-path",
        text: "Come on! We'll be safe if we hurry",
      },
      {
        targetPageId: "escape-zeppelin",
        text: "Go with Jonah to find his pack",
      },
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
    links: [
      { targetPageId: "escape-zeppelin-ending", text: "Fly into the dawn" },
    ],
    dropZones: [],
  },
  {
    id: "escape-zeppelin-ending",
    title: "The Dawn",
    content: escapeZeppelinEndingContent,
    links: [],
    dropZones: [],
    ending: "complete",
  },
  {
    id: "zeppelin-fall",
    title: "The Fall",
    content: zeppelinFallContent,
    links: [{ targetPageId: "shangri-la", text: "Look around" }],
    dropZones: [],
  },

  // === TEMPLE PERIMETER / ROPE LADDER ===

  {
    id: "temple-perimeter",
    title: "The Ledge",
    content: templePerimeterContent,
    links: [
      {
        targetPageId: "temple-perimeter-descent",
        text: "Climb down the rope ladder",
      },
      { targetPageId: "temple-idol", text: "Visit the main temple" },
      { targetPageId: "temple-gift-shop", text: "Explore the side buildings" },
      { targetPageId: "temple-quarters", text: "Stay the night" },
    ],
    dropZones: [],
  },
  {
    id: "temple-perimeter-descent",
    title: "The Descent",
    content: templePerimeterDescentContent,
    links: [
      { targetPageId: "shangri-declare", text: "Approach the city openly" },
      { targetPageId: "shangri-hide", text: "Hide and observe" },
    ],
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
    title: "The Festival of Silence",
    content: shangriHideContent,
    links: [
      {
        targetPageId: "shangri-dorje",
        text: "Duck into the gong-maker's shop",
      },
      { targetPageId: "shangri-cistern", text: "Dive into the cistern" },
    ],
    dropZones: [],
  },
  {
    id: "shangri-dorje",
    title: "The Gong-Maker",
    content: shangriDorjeContent,
    links: [{ targetPageId: "shangri-nightfall", text: "Wait for nightfall" }],
    dropZones: [],
  },
  {
    id: "shangri-nightfall",
    title: "The Great Balloon",
    content: shangriNightfallContent,
    links: [
      {
        targetPageId: "shangri-seized",
        text: "Nah, I'll just be extra careful",
      },
    ],
    dropZones: [
      {
        id: "use-matches-distraction",
        description:
          "Dorje watches you expectantly. Do you have anything from the outside?",
        acceptsItemId: "matches",
        consumeItem: true,
        hiddenLink: {
          targetPageId: "shangri-distract-fire",
          text: "Hand Dorje the matches",
          revealMessage:
            "Dorje turns the matchbox over in his hands. His eyes widen. He nods once.",
        },
      },
      {
        id: "use-comic-distraction",
        description:
          "Dorje watches you expectantly. Do you have anything from the outside?",
        acceptsItemId: "comic-book",
        consumeItem: true,
        hiddenLink: {
          targetPageId: "shangri-distract-comic",
          text: "Hand Dorje the comic book",
          revealMessage:
            "Dorje opens the comic book. His mouth twitches. His shoulders shake.",
        },
      },
    ],
  },
  {
    id: "shangri-distract-fire",
    title: "The Fire",
    content: shangriDistractFireContent,
    links: [
      {
        targetPageId: "shangri-balloon-approach",
        text: "Head for the balloon",
      },
    ],
    dropZones: [],
  },
  {
    id: "shangri-distract-comic",
    title: "The Comic Book",
    content: shangriDistractComicContent,
    links: [
      {
        targetPageId: "shangri-balloon-approach",
        text: "Head for the balloon",
      },
    ],
    dropZones: [],
  },
  {
    id: "shangri-balloon-approach",
    title: "The Balloon",
    content: shangriBalloonApproachContent,
    links: [
      {
        targetPageId: "shangri-seized",
        text: "Try to untie the ropes by hand",
      },
    ],
    dropZones: [
      {
        id: "use-spork-tethers",
        description:
          "Four hemp tethers, thick as your wrist, anchor the balloon to iron stakes",
        acceptsItemId: "spork",
        consumeItem: true,
        hiddenLink: {
          targetPageId: "shangri-balloon-ride",
          text: "Cut the tethers with the spork",
          revealMessage:
            "The titanium edge bites into the hemp. One tether parts. Then another. Then a third. The fourth screams under the strain and snaps on its own.",
        },
      },
    ],
  },
  {
    id: "shangri-seized",
    title: "The End",
    content: shangriSeizedContent,
    links: [],
    dropZones: [],
    ending: "death",
  },
  {
    id: "shangri-balloon-ride",
    title: "The Dawn",
    content: shangriBalloonRideContent,
    links: [],
    dropZones: [],
    ending: "complete",
  },
  {
    id: "shangri-cistern",
    title: "The Cistern",
    content: shangriCisternContent,
    links: [
      { targetPageId: "cistern-bob", text: "Follow the voice into the dark" },
    ],
    dropZones: [],
  },

  // === CISTERN SEQUENCE ===

  {
    id: "cistern-bob",
    title: "Bob",
    content: cisternBobContent,
    links: [{ targetPageId: "cistern-night", text: "Fall asleep" }],
    dropZones: [],
  },
  {
    id: "cistern-night",
    title: "The Dark",
    content: cisternNightContent,
    links: [
      {
        targetPageId: "cistern-death",
        text: "Hold still and hope for the best",
      },
    ],
    dropZones: [
      {
        id: "use-matches-cistern",
        description: "The darkness is total. The breathing is getting closer.",
        acceptsItemId: "matches",
        consumeItem: true,
        hiddenLink: {
          targetPageId: "cistern-caught",
          text: "Strike a match",
          revealMessage:
            "Your fingers close around the matchbox in your pocket.",
        },
      },
    ],
  },
  {
    id: "cistern-death",
    title: "The End",
    content: cisternDeathContent,
    links: [],
    dropZones: [],
    ending: "death",
  },
  {
    id: "cistern-caught",
    title: "Caught",
    content: cisternCaughtContent,
    links: [
      { targetPageId: "cistern-vents", text: "Head for the volcanic vents" },
    ],
    dropZones: [],
  },
  {
    id: "cistern-vents",
    title: "The Volcanic Vents",
    content: cisternVentsContent,
    links: [
      { targetPageId: "cistern-stay", text: "Nah, that's crazy" },
      { targetPageId: "cistern-eruption", text: "Plug the vent" },
    ],
    dropZones: [],
  },
  {
    id: "cistern-stay",
    title: "The End",
    content: cisternStayContent,
    links: [],
    dropZones: [],
    ending: "death",
  },
  {
    id: "cistern-eruption",
    title: "The Eruption",
    content: cisternEruptionContent,
    links: [{ targetPageId: "cistern-landing", text: "Brace for impact" }],
    dropZones: [],
  },
  {
    id: "cistern-landing",
    title: "The Courtyard",
    content: cisternLandingContent,
    links: [
      { targetPageId: "escape-zeppelin", text: "Find somewhere to hide" },
    ],
    dropZones: [],
  },
];

export function getPage(pageId: string): StoryPage | undefined {
  return storyPages.find((p) => p.id === pageId);
}
