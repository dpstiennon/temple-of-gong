import type { StoryPage } from "./types";

export const storyPages: StoryPage[] = [
  {
    id: "start",
    title: "A Mysterious Postcard",
    content: `One day in the mail, you receive a mysterious postcard.

The stamp is faded, the edges worn soft from what must have been a long journey. The postmark reads *Kathmandu, Nepal*.

You flip it over. The message is hastily scrawled in familiar handwriting—just two words:

> Send Help

It's signed by your old friend Jonah.

That was about a week ago. Of course, you are not the type to abandon a friend in need. You've canceled your appointments, packed a weathered rucksack, and booked the first flight east. Now, after twenty hours of cramped seats and turbulent skies, you find yourself stepping off a plane into the thin mountain air of Kathmandu.

Your only clue is the postcard itself. The image on the front shows a pagoda-style temple perched impossibly high in the Himalayas, its tiered roofs dusted with snow. But what catches your eye is what stands in the foreground: an immense golden gong, easily twice the height of a man. Embossed in its gleaming center is the face of a monkey—ancient, knowing, its expression caught somewhere between mischief and menace.

You tuck the postcard into your jacket pocket and set off into the city.

The streets of Kathmandu swirl around you—a riot of color, incense, and noise. Prayer flags flutter overhead in tangles of red and gold. Merchants call out from cramped stalls. Somewhere nearby, temple bells ring out in hollow, overlapping tones.

You're making your way toward the nearest tall temple to ask around when something stops you mid-stride.

A narrow shop, half-hidden in shadow, wedged between two crumbling buildings. No sign marks its entrance—just a low doorway draped with a beaded curtain. But through the dim interior, you can see them: gongs. Dozens of them. Hundreds, perhaps. Brass and bronze and gleaming gold, covering every wall, hanging from the ceiling, stacked in precarious towers. Some are no bigger than your palm. Others look large enough to swallow you whole.

The air hums faintly, as if the metal itself is vibrating with some unheard frequency.`,
    links: [
      { targetPageId: "shop", text: "Go inside the shop" },
      { targetPageId: "kathmandu-temple", text: "Continue on your way" },
    ],
    dropZones: [],
  },
  {
    id: "temple-entrance",
    title: "The Temple Entrance",
    content: `You stand before the ancient Temple of Gong, its weathered stone walls covered in creeping vines. The massive wooden doors are open, revealing a shadowy interior that beckons you forward.

A cool breeze carries the faint scent of incense from within. To your left, you notice a dark alcove with an unlit torch mounted on the wall. The shadows there seem unusually deep.

The main hall awaits straight ahead, while a overgrown path leads around the side to what appears to be a garden.`,
    links: [
      { targetPageId: "main-hall", text: "Enter the main hall" },
      { targetPageId: "garden", text: "Follow the path to the garden" },
    ],
    dropZones: [
      {
        id: "entrance-alcove",
        description: "The dark alcove with the unlit torch",
        acceptsItemId: "matches",
        hiddenLink: {
          targetPageId: "secret-cellar",
          text: "Descend the revealed stairway",
          revealMessage:
            "You light the torch with a match. As the flames dance to life, you hear a grinding sound. A section of the wall slides away, revealing a hidden stairway descending into darkness!",
        },
      },
    ],
  },
  {
    id: "main-hall",
    title: "The Great Hall",
    content: `The great hall stretches before you, its vaulted ceiling lost in shadow. Massive pillars line either side, carved with scenes of monks striking an enormous gong.

In the center of the hall, a faded map lies discarded on a stone pedestal. It appears to show the temple's layout.

Against the far wall, you spot an ornate chest with a peculiar lock - it has a small slot rather than a keyhole. A spiral staircase in the corner leads upward to what must be a tower.`,
    links: [
      { targetPageId: "start", text: "Return to the entrance" },
      { targetPageId: "tower", text: "Climb the spiral staircase" },
    ],
    dropZones: [
      {
        id: "chest-lock",
        description: "The ornate chest with the strange slot-lock",
        acceptsItemId: "spork",
        hiddenLink: {
          targetPageId: "treasury",
          text: "Open the chest and examine its contents",
          revealMessage:
            "You insert the titanium spork into the slot. It fits perfectly! With a satisfying click, the lock disengages. The spork is wedged in tight - you'll have to leave it behind.",
        },
        rewardItem: {
          id: "golden-key",
          name: "A golden key",
          description: "An ornate golden key with a gong symbol on its handle.",
        },
      },
    ],
    itemToFind: {
      id: "temple-map",
      name: "A temple map",
      description:
        "A faded map showing the temple layout. Some areas are marked with mysterious symbols.",
    },
  },
  {
    id: "garden",
    title: "The Temple Garden",
    content: `You step into a serene garden that has grown wild over the years. Cherry blossom trees, their branches heavy with pink blooms, shade a meandering stone path.

Near a small herb garden, you spot some useful-looking dried herbs that might come in handy.

In the center of the garden, a stone turtle fountain sits in a dry pool. The turtle's eyes seem to follow you, and there's a small shelf carved into its shell - as if something is meant to be placed there.`,
    links: [{ targetPageId: "start", text: "Return to the entrance" }],
    dropZones: [
      {
        id: "turtle-fountain",
        description: "The stone turtle fountain with the mysterious shelf",
        acceptsItemId: "comic-book",
        hiddenLink: {
          targetPageId: "pond-secret",
          text: "Investigate what the turtle revealed",
          revealMessage:
            "You place the comic book on the turtle's shell. Water suddenly begins flowing from its mouth! The pool fills rapidly, and as the water settles, you see something glinting at the bottom. The comic book floats away, but you've discovered something important...",
        },
        rewardItem: {
          id: "jade-amulet",
          name: "A jade amulet",
          description:
            "A beautiful jade amulet in the shape of a gong. It feels warm to the touch.",
        },
      },
    ],
    itemToFind: {
      id: "herbs",
      name: "Dried herbs",
      description:
        "A bundle of fragrant dried herbs. They smell of lavender and sage.",
    },
  },
  {
    id: "secret-cellar",
    title: "The Secret Cellar",
    content: `You descend the narrow stairway, your footsteps echoing off ancient stone. The cellar is small but filled with dusty artifacts and forgotten treasures.

On a wooden rack against the wall, you spot what appears to be a ceremonial mallet - exactly the kind used to strike a gong. This must be what the temple monks used in their rituals!

There's nothing else of interest here, but this mallet could be exactly what you need.`,
    links: [{ targetPageId: "start", text: "Climb back up to the entrance" }],
    dropZones: [],
    itemToFind: {
      id: "gong-mallet",
      name: "The Gong Mallet",
      description:
        "A ceremonial mallet wrapped in worn leather. It feels perfectly balanced in your hand.",
    },
  },
  {
    id: "tower",
    title: "The Bell Tower",
    content: `You emerge at the top of the tower, breathless from the climb. The wind whips around you, carrying the sounds of distant birds.

Before you hangs the legendary Gong of Gong - an enormous bronze disc that gleams even in the diffused light. It's said that whoever strikes this gong with the proper mallet will receive enlightenment... or at least a really good story to tell.

The gong hangs silent, waiting for someone worthy to sound it.`,
    links: [
      { targetPageId: "main-hall", text: "Descend back to the main hall" },
    ],
    dropZones: [
      {
        id: "the-gong",
        description: "The magnificent Gong of Gong",
        acceptsItemId: "gong-mallet",
        hiddenLink: {
          targetPageId: "ending",
          text: "Bask in your moment of glory",
          revealMessage:
            "You raise the ceremonial mallet and strike the gong with all your might. GOOOOOOONG! The sound resonates through your very soul, echoing across the mountains. You feel... different. Wiser. More complete. Also, your ears are ringing quite a bit.",
        },
      },
    ],
  },
  {
    id: "treasury",
    title: "The Temple Treasury",
    content: `Inside the chest, you find a small chamber filled with glittering treasures - gold coins, precious gems, and ancient scrolls. Among the riches, you notice the golden key that was hidden within.

The treasures are fascinating, but most seem too heavy or fragile to take. The key, however, might open something important elsewhere in the temple.`,
    links: [{ targetPageId: "main-hall", text: "Return to the main hall" }],
    dropZones: [],
  },
  {
    id: "pond-secret",
    title: "The Turtle's Gift",
    content: `You reach into the now-filled pool and retrieve a beautiful jade amulet from its depths. The turtle fountain seems to regard you with approval, water still trickling peacefully from its mouth.

The amulet pulses with a gentle warmth. You sense it has protective properties, though you're not sure exactly what it protects against. Perhaps enlightenment? Bad luck? Indigestion?`,
    links: [{ targetPageId: "garden", text: "Return to the garden" }],
    dropZones: [],
  },
  {
    id: "ending",
    title: "Enlightenment Achieved!",
    content: `Congratulations, brave adventurer! You have successfully navigated the Temple of Gong and sounded the legendary gong!

As the reverberations fade, you feel a profound sense of accomplishment. The monks of old would be proud. You've proven yourself worthy of the temple's secrets.

The sound of the gong carries far and wide, and somewhere in the distance, you hear what might be applause. Or possibly just more birds. It's hard to tell at this elevation.

Your adventure is complete, but the temple will always be here, waiting for the next seeker of enlightenment (or just someone who really wanted to hit a big gong).`,
    links: [{ targetPageId: "start", text: "Begin a new adventure" }],
    dropZones: [],
  },
];

export function getPage(pageId: string): StoryPage | undefined {
  return storyPages.find((p) => p.id === pageId);
}
