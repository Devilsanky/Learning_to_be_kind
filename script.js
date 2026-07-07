/* =========================
   Persistence
   ========================= */
const STORAGE_KEY = "learning-kind-platform-state-v3";

/* =========================
   Static Theme Helpers
   ========================= */
const ageButtonThemes = [
  ["#6f8cff", "#6bdcff"],
  ["#7d74ff", "#9f7bff"],
  ["#8b64ff", "#ff7fb8"],
  ["#ff7b9f", "#ffb06f"],
  ["#ff9b63", "#ffd36e"],
  ["#41c7ff", "#6ef3d3"],
  ["#58d38f", "#87f0af"],
  ["#4c91ff", "#8f7dff"],
  ["#7a71ff", "#c67eff"],
  ["#ff7da5", "#ff9cd6"],
  ["#ff9f62", "#ffd36c"],
  ["#56c8ff", "#88e7ff"],
  ["#63d9c7", "#7cb8ff"],
];

/* =========================
   Personality Engine
   ========================= */
const personalityEngines = {
  calm: {
    label: "Calm and comforting",
    welcome: [
      "Let's take this slowly and kindly.",
      "We're in no rush. Good choices grow from calm minds.",
    ],
    tip: [
      "Pause, notice feelings, and choose what helps most.",
      "Kindness often starts with simply paying attention.",
    ],
    success: [
      "That was thoughtful and gentle.",
      "Beautiful choice. That showed real care.",
    ],
    retry: [
      "That's okay. Let's think one more time.",
      "We can pause and choose a kinder path.",
    ],
    daily: [
      "Real-world kindness matters just as much as in-app kindness.",
      "Small actions outside the screen still count in a big way.",
    ],
  },
  friendly: {
    label: "Friendly and encouraging",
    welcome: [
      "Yay, let's do this together.",
      "I'm so glad we're starting this kindness adventure.",
    ],
    tip: [
      "A little help can brighten someone's whole day.",
      "Look for chances to include, share, and support.",
    ],
    success: [
      "Great job. That was a kind action.",
      "You nailed it. That answer was full of care.",
    ],
    retry: [
      "Almost. Let's try that again together.",
      "We can do better, and I know you can find the kind choice.",
    ],
    daily: [
      "Today's challenge is a fun chance to practice kindness for real.",
      "Let's bring kindness off the screen and into the day.",
    ],
  },
  funny: {
    label: "Funny and playful",
    welcome: [
      "Time to out-fun unkindness.",
      "Let's make kindness the coolest move in the room.",
    ],
    tip: [
      "If someone needs help, don't just freeze like a statue. Jump in.",
      "A smart, kind move always beats an awkward one.",
    ],
    success: [
      "Boom. That was a top-tier kindness move.",
      "That choice deserves a gold star and maybe a happy dance.",
    ],
    retry: [
      "Oops. Let's rewind and try a better move.",
      "Not our best plot twist. Let's fix it.",
    ],
    daily: [
      "A real-life challenge? Nice. Let's make it count.",
      "Kindness mission time. This one is worth doing properly.",
    ],
  },
  smart: {
    label: "Smart and strategic",
    welcome: [
      "Let's solve situations with empathy and logic.",
      "Kindness works best when we think clearly and care deeply.",
    ],
    tip: [
      "Ask which action helps the person and improves the situation.",
      "The best response is both caring and practical.",
    ],
    success: [
      "Correct. That was the strongest people-first decision.",
      "Excellent. Empathy and reasoning both checked out.",
    ],
    retry: [
      "Let's recalculate and try the more helpful answer.",
      "Not optimal yet. We can improve the response.",
    ],
    daily: [
      "A daily task is a practical test of what you've learned.",
      "Let's turn kindness into a real-world habit.",
    ],
  },
  strict: {
    label: "Strict but guiding",
    welcome: [
      "We are here to make strong, respectful choices.",
      "Kindness matters, and I expect you to take it seriously.",
    ],
    tip: [
      "Do not ignore what needs fixing. Step up and help.",
      "Respect means doing the right thing, even when it is inconvenient.",
    ],
    success: [
      "Good. That was responsible and respectful.",
      "Exactly. That's the standard we're aiming for.",
    ],
    retry: [
      "Not good enough yet. Try again with more care.",
      "Let's correct that and choose the better response.",
    ],
    daily: [
      "Daily tasks build discipline. Complete them with intention.",
      "Kindness is a habit. Practice it properly.",
    ],
  },
  confident: {
    label: "Confident and guiding",
    welcome: [
      "Let's turn kindness into action.",
      "You can handle this. Let's lead with care.",
    ],
    tip: [
      "Strong communities grow from everyday helpful choices.",
      "When you know the kind action, be confident enough to do it.",
    ],
    success: [
      "Strong choice. That was leadership in action.",
      "Exactly. That is how trust is built.",
    ],
    retry: [
      "Let's tighten that up and try again.",
      "We can do this better. Choose the response that helps most.",
    ],
    daily: [
      "A real challenge is your chance to prove what you've learned.",
      "Show up with intention and complete today's mission.",
    ],
  },
};

/* =========================
   Guide Data
   ========================= */
const guideGroups = {
  tiny: {
    label: "Cartoon Animal Heroes",
    ageText: "Ages 4 to 6",
    levelBand: [1, 7],
    guides: [
      {
        id: "kiko",
        name: "Kiko",
        avatar: "&#128060;",
        intro: "Hi! I'm Kiko the Panda Shield, and I help tiny heroes take kind, calm steps.",
        personality: "kind and calm",
        personalityType: "calm",
        tag: "Shield Panda",
        species: "panda",
        theme: ["#54d7b5", "#4f9cff"],
        voice: { pitch: 1.05, rate: 0.94 },
      },
      {
        id: "mimi",
        name: "Mimi",
        avatar: "&#128048;",
        intro: "Hi! I'm Mimi Starhop, a bunny hero who turns kind ideas into cheerful adventures.",
        personality: "friendly and bright",
        personalityType: "friendly",
        tag: "Star Bunny",
        species: "bunny",
        theme: ["#ff8fd1", "#ffbf7b"],
        voice: { pitch: 1.25, rate: 1.02 },
      },
      {
        id: "pogo",
        name: "Pogo",
        avatar: "&#128054;",
        intro: "Hey! I'm Pogo Zoompup, and I cheer for super teamwork and helping hands.",
        personality: "friendly and energetic",
        personalityType: "friendly",
        tag: "Zoom Pup",
        species: "puppy",
        theme: ["#ff9a63", "#ffd36d"],
        voice: { pitch: 1.18, rate: 1.03 },
      },
      {
        id: "lulu",
        name: "Lulu",
        avatar: "&#128049;",
        intro: "Hello! I'm Lulu Glowtail, your cozy little kindness hero.",
        personality: "calm and thoughtful",
        personalityType: "calm",
        tag: "Glow Cat",
        species: "kitten",
        theme: ["#7f7dff", "#ff8acb"],
        voice: { pitch: 1.16, rate: 0.96 },
      },
    ],
  },
  young: {
    label: "Fun Cartoon Hero Guides",
    ageText: "Ages 7 to 10",
    levelBand: [8, 14],
    guides: [
      {
        id: "flick",
        name: "Flick",
        avatar: "&#129418;",
        intro: "Hi! I'm Flick Trailfox, and I love clever, brave, and playful kind choices.",
        personality: "smart and playful",
        personalityType: "funny",
        tag: "Trail Fox",
        species: "fox",
        theme: ["#ff8b5d", "#ffcd6c"],
        voice: { pitch: 1.08, rate: 1.06 },
      },
      {
        id: "roar",
        name: "Roar",
        avatar: "&#129409;",
        intro: "Hey! I'm Roar Sunmane, and I believe brave kindness is a real superpower.",
        personality: "confident and encouraging",
        personalityType: "confident",
        tag: "Sun Lion",
        species: "lion",
        theme: ["#ffc14f", "#ff8d68"],
        voice: { pitch: 0.95, rate: 0.98 },
      },
      {
        id: "byte",
        name: "Byte",
        avatar: "&#129302;",
        intro: "Hello! I'm Byte Sparkbot, and I turn thoughtful teamwork into mission success.",
        personality: "logical and helpful",
        personalityType: "smart",
        tag: "Spark Bot",
        species: "robot",
        theme: ["#55d1ff", "#7d8bff"],
        voice: { pitch: 0.88, rate: 0.92 },
      },
      {
        id: "momo",
        name: "Momo",
        avatar: "&#128018;",
        intro: "Hi! I'm Momo Flipvine, and I bring playful energy to helping others shine.",
        personality: "funny and playful",
        personalityType: "funny",
        tag: "Flip Monkey",
        species: "monkey",
        theme: ["#6fdd95", "#57b8ff"],
        voice: { pitch: 1.12, rate: 1.04 },
      },
    ],
  },
  tween: {
    label: "Mentor Adventure Guides",
    ageText: "Ages 11 to 13",
    levelBand: [15, 21],
    guides: [
      {
        id: "nova",
        name: "Nova",
        avatar: "&#129489;",
        intro: "Hi! I'm Nova Orbit, and I love discovering respectful ways to lead a team.",
        personality: "confident and observant",
        personalityType: "confident",
        tag: "Orbit Scout",
        species: "explorer",
        theme: ["#4cc3ff", "#7b77ff"],
        voice: { pitch: 0.98, rate: 0.96 },
      },
      {
        id: "aria",
        name: "Aria",
        avatar: "&#128105;",
        intro: "Hello! I'm Aria Brightline, and I care deeply about fairness and courage.",
        personality: "friendly and fair",
        personalityType: "friendly",
        tag: "Bright Hero",
        species: "hero",
        theme: ["#ff7eaf", "#ffb26b"],
        voice: { pitch: 1.05, rate: 0.98 },
      },
      {
        id: "zed",
        name: "Zed",
        avatar: "&#128104;",
        intro: "Hey! I'm Zed Pulse, and I love solving people-first problems with calm focus.",
        personality: "smart and practical",
        personalityType: "smart",
        tag: "Pulse Mentor",
        species: "tech",
        theme: ["#57d3c8", "#5d94ff"],
        voice: { pitch: 0.92, rate: 0.94 },
      },
    ],
  },
  teen: {
    label: "Hero Mentor Avatars",
    ageText: "Ages 14 to 16",
    levelBand: [22, 28],
    guides: [
      {
        id: "mira",
        name: "Mira",
        avatar: "&#128105;",
        intro: "Hi! I'm Mira Northstar, and I help turn kindness into confident action.",
        personality: "strict and guiding",
        personalityType: "strict",
        tag: "Northstar",
        species: "mentor",
        theme: ["#6e80ff", "#aa79ff"],
        voice: { pitch: 0.88, rate: 0.92 },
      },
      {
        id: "axel",
        name: "Axel",
        avatar: "&#128104;",
        intro: "Hey! I'm Axel Drift, and I believe kindness should feel practical, real, and brave.",
        personality: "confident and guiding",
        personalityType: "confident",
        tag: "Drift Lead",
        species: "leader",
        theme: ["#4fd4ff", "#58d79e"],
        voice: { pitch: 0.9, rate: 0.96 },
      },
      {
        id: "sol",
        name: "Sol",
        avatar: "&#129489;",
        intro: "Hello! I'm Sol Ember, and I help ideas turn into meaningful impact for everyone.",
        personality: "friendly and imaginative",
        personalityType: "friendly",
        tag: "Ember Mind",
        species: "creative",
        theme: ["#ff8f7b", "#ffc86c"],
        voice: { pitch: 1.0, rate: 0.98 },
      },
    ],
  },
};

const guideVisualProfiles = {
  panda: {
    shape: "animal",
    crest: "&#128737;",
    sidekick: "&#127811;",
    focus: "gentle helping",
    callSign: {
      welcome: "Panda pause:",
      tip: "Bamboo tip:",
      success: "Paws up:",
      retry: "Gentle reset:",
      daily: "Kind quest:",
    },
  },
  bunny: {
    shape: "animal",
    crest: "&#11088;",
    sidekick: "&#127752;",
    focus: "bright sharing",
    callSign: {
      welcome: "Bunny bounce:",
      tip: "Star hop:",
      success: "Hop hooray:",
      retry: "Little hop back:",
      daily: "Rainbow mission:",
    },
  },
  puppy: {
    shape: "animal",
    crest: "&#9889;",
    sidekick: "&#128062;",
    focus: "teamwork adventures",
    callSign: {
      welcome: "Pup patrol:",
      tip: "Zoom tip:",
      success: "Tail wag win:",
      retry: "Back to the trail:",
      daily: "Hero fetch:",
    },
  },
  kitten: {
    shape: "animal",
    crest: "&#127769;",
    sidekick: "&#10084;",
    focus: "calm caring moments",
    callSign: {
      welcome: "Glow cat hello:",
      tip: "Soft paws:",
      success: "Purr-fect:",
      retry: "Cozy reset:",
      daily: "Moonlight mission:",
    },
  },
  fox: {
    shape: "animal",
    crest: "&#129517;",
    sidekick: "&#127818;",
    focus: "clever kindness clues",
    callSign: {
      welcome: "Fox flash:",
      tip: "Trail clue:",
      success: "Sharp move:",
      retry: "New clue:",
      daily: "Forest mission:",
    },
  },
  lion: {
    shape: "hero",
    crest: "&#9728;",
    sidekick: "&#128081;",
    focus: "brave leadership",
    callSign: {
      welcome: "Lion lead:",
      tip: "Sunmane says:",
      success: "Roaring success:",
      retry: "Strong reset:",
      daily: "Pride mission:",
    },
  },
  robot: {
    shape: "robot",
    crest: "&#9881;",
    sidekick: "&#128161;",
    focus: "smart problem-solving",
    callSign: {
      welcome: "Sparkbot check:",
      tip: "Logic link:",
      success: "Mission solved:",
      retry: "Recalculating:",
      daily: "Helpful system task:",
    },
  },
  monkey: {
    shape: "animal",
    crest: "&#127880;",
    sidekick: "&#127820;",
    focus: "playful encouragement",
    callSign: {
      welcome: "Flipvine fun:",
      tip: "Monkey move:",
      success: "Banana boost:",
      retry: "Let's swing back:",
      daily: "Playful mission:",
    },
  },
  explorer: {
    shape: "hero",
    crest: "&#129517;",
    sidekick: "&#128506;",
    focus: "adventure leadership",
    callSign: {
      welcome: "Scout signal:",
      tip: "Compass tip:",
      success: "Path cleared:",
      retry: "Check the map:",
      daily: "Discovery mission:",
    },
  },
  hero: {
    shape: "hero",
    crest: "&#127775;",
    sidekick: "&#10024;",
    focus: "fairness and courage",
    callSign: {
      welcome: "Hero hello:",
      tip: "Brightline hint:",
      success: "Star result:",
      retry: "Hero reset:",
      daily: "Justice mission:",
    },
  },
  tech: {
    shape: "hero",
    crest: "&#128187;",
    sidekick: "&#128218;",
    focus: "calm strategy",
    callSign: {
      welcome: "Pulse plan:",
      tip: "Tech tip:",
      success: "System success:",
      retry: "Debug the choice:",
      daily: "Focus mission:",
    },
  },
  mentor: {
    shape: "mentor",
    crest: "&#128737;",
    sidekick: "&#128226;",
    focus: "high standards with care",
    callSign: {
      welcome: "Northstar check:",
      tip: "Mentor note:",
      success: "Standard met:",
      retry: "Let's correct course:",
      daily: "Leadership task:",
    },
  },
  leader: {
    shape: "mentor",
    crest: "&#128640;",
    sidekick: "&#129309;",
    focus: "confident action",
    callSign: {
      welcome: "Drift lead:",
      tip: "Action cue:",
      success: "Team secured:",
      retry: "Let's tighten that up:",
      daily: "Momentum mission:",
    },
  },
  creative: {
    shape: "mentor",
    crest: "&#127912;",
    sidekick: "&#10024;",
    focus: "creative empathy",
    callSign: {
      welcome: "Ember spark:",
      tip: "Creative clue:",
      success: "Beautiful solve:",
      retry: "Let's redraw that choice:",
      daily: "Imagination mission:",
    },
  },
  default: {
    shape: "hero",
    crest: "&#127775;",
    sidekick: "&#10024;",
    focus: "kind choices",
    callSign: {
      welcome: "Guide hello:",
      tip: "Guide tip:",
      success: "Great job:",
      retry: "Try again:",
      daily: "Today's mission:",
    },
  },
};

/* =========================
   Shorts Content
   ========================= */
const shorts = [
  {
    id: "crayons",
    label: "Short 1",
    title: "Sharing Crayons",
    scenario: "A classmate cannot find a blue crayon for their drawing and looks worried.",
    narration: "Kindness can be as simple as noticing a need and sharing what you already have.",
    message: "Sharing tools can help someone feel supported and included.",
    visual: "&#127912;",
    chipOne: "Art Time",
    chipTwo: "Share",
    colors: ["#6d86ff", "#ff7db8"],
    question: {
      prompt: "What should you do?",
      correct: "Help",
      feedback: {
        Help: "Yes. Offering to share is a kind and practical way to help.",
        Ignore: "Ignoring the problem can leave someone feeling left out.",
        "Ask teacher": "A teacher can help, but sharing your own crayon is a direct kind action.",
      },
    },
  },
  {
    id: "line",
    label: "Short 2",
    title: "Waiting in Line",
    scenario: "Everyone is waiting for lunch, and one child wants to push ahead.",
    narration: "Sometimes kindness means waiting fairly instead of putting yourself first.",
    message: "Patience and fairness help shared spaces feel calm and respectful.",
    visual: "&#127828;",
    chipOne: "Lunch Queue",
    chipTwo: "Fairness",
    colors: ["#53c8ff", "#68d8a4"],
  },
  {
    id: "books",
    label: "Short 3",
    title: "Dropped Books",
    scenario: "A friend drops several books in the hallway and looks embarrassed.",
    narration: "Quick help can turn an awkward moment into a supported one.",
    message: "Helping quickly shows care, respect, and teamwork.",
    visual: "&#128218;",
    chipOne: "Hallway",
    chipTwo: "Teamwork",
    colors: ["#ff9968", "#ffd468"],
    question: {
      prompt: "What should you do?",
      correct: "Help",
      feedback: {
        Help: "Correct. Helping right away can reduce stress and show kindness.",
        Ignore: "Walking by can make the person feel even more alone.",
        "Ask teacher": "That can help in some moments, but here you can offer direct help yourself.",
      },
    },
  },
  {
    id: "upset",
    label: "Short 4",
    title: "A Friend Looks Upset",
    scenario: "Someone is sitting alone and looks very upset after a disagreement.",
    narration: "Kindness is not only about comfort. Sometimes it means getting the safest support.",
    message: "Sometimes the kindest step is getting trusted adult support.",
    visual: "&#128172;",
    chipOne: "Feelings",
    chipTwo: "Support",
    colors: ["#7c79ff", "#c26fff"],
    question: {
      prompt: "What should you do?",
      correct: "Ask teacher",
      feedback: {
        Help: "Checking in is kind, but if someone is very upset, a trusted adult may be the best support too.",
        Ignore: "Ignoring strong feelings can leave someone without support.",
        "Ask teacher": "Yes. Getting a trusted adult can be the safest and kindest next step.",
      },
    },
  },
  {
    id: "playground",
    label: "Short 5",
    title: "Clean Playground",
    scenario: "You notice litter near the slide where everyone plays.",
    narration: "Caring for shared places is part of caring for other people too.",
    message: "Caring for shared places is part of being responsible and kind.",
    visual: "&#127795;",
    chipOne: "Playground",
    chipTwo: "Responsibility",
    colors: ["#4fd2ff", "#8e7dff"],
  },
];

/* =========================
   Daily Task Pool
   ========================= */
const dailyTaskPool = [
  { id: "say-thanks", title: "Say thank you", description: "Thank someone today for something they did for you.", points: 8 },
  { id: "clean-space", title: "Keep your area clean", description: "Tidy a shared space or your own area without being asked.", points: 10 },
  { id: "help-someone", title: "Help someone today", description: "Offer help to a friend, classmate, or family member.", points: 12 },
  { id: "kind-words", title: "Use kind words", description: "Choose calm and respectful language in a tricky moment.", points: 9 },
  { id: "include-someone", title: "Include someone", description: "Invite someone into a game, talk, or activity.", points: 11 },
  { id: "share-something", title: "Share something", description: "Share a tool, idea, or turn with someone else.", points: 8 },
  { id: "listen-carefully", title: "Listen carefully", description: "Give someone your full attention when they are speaking.", points: 9 },
  { id: "respect-space", title: "Respect shared spaces", description: "Take care of a common area and leave it better than you found it.", points: 10 },
];

/* =========================
   Games Content
   ========================= */
const drawColorLabels = {
  "#7a57ff": "Purple",
  "#ff7db8": "Pink",
  "#68d1ff": "Blue",
  "#ffd763": "Yellow",
  "#7be3a3": "Green",
};

const fillColorLabels = {
  "#8b74ff": "Purple",
  "#ff9f6f": "Orange",
  "#68d1ff": "Blue",
  "#7be3a3": "Green",
  "#ffd763": "Yellow",
};

const parkTrashItems = [
  { id: "juice-box", label: "Juice box", icon: "&#129380;" },
  { id: "wrapper", label: "Wrapper", icon: "&#127852;" },
  { id: "paper", label: "Paper", icon: "&#128196;" },
  { id: "can", label: "Can", icon: "&#129689;" },
];

const helpFriendChoices = {
  help: {
    correct: true,
    feedback: "Yes. Helping your friend pick up their books is the kind choice.",
    lesson: "Helping others is kind.",
  },
  ignore: {
    correct: false,
    feedback: "Ignoring a friend can leave them feeling alone. Helping is the kinder choice.",
    lesson: "Helping others is kind.",
  },
};

const levelModeLabels = {
  drag: "Clean the Environment",
  choice: "Help Others Game",
  "visual-choice": "Picture Choice Game",
  memory: "Visual Match Game",
  match: "Match the Pair",
  count: "Counting Game",
  complete: "Complete the Drawing",
  "drag-sort": "Sort and Clean",
  "decision-sim": "Decision Simulation",
  pattern: "Pattern Puzzle",
  difference: "Find the Difference",
  "match-pair": "Match the Pair",
  "memory-puzzle": "Memory Puzzle",
  relation: "Relational Game",
  "complete-drawing": "Complete the Drawing",
  sequence: "Sequence Puzzle",
  jigsaw: "Image Jigsaw",
};

/* =========================
   Level Templates and Generation
   ========================= */
const levelBandTemplates = {
  tiny: {
    label: "Visual Kindness Starters",
    min: 1,
    max: 7,
  },
  young: {
    label: "Kind Explorer Missions",
    min: 8,
    max: 14,
  },
  tween: {
    label: "Responsibility Puzzle Lab",
    min: 15,
    max: 21,
  },
  teen: {
    label: "Leadership and Ethics Missions",
    min: 22,
    max: 28,
  },
};

const legacyLevelCatalog = [
  {
    id: "level-1",
    number: 1,
    bandKey: "tiny",
    bandLabel: levelBandTemplates.tiny.label,
    title: "Level 1: Toy Trail Rescue",
    scenario: "A play corner in the park is messy and younger children are waiting for a safe place to play.",
    task: "Drag the toys into the rainbow kindness chest.",
    reward: 12,
    mode: "drag",
    scene: { place: "Sunny Park", label: "Toy Rescue", colors: ["#69d4ff", "#7de6a6"], art: ["&#127795;", "&#129529;", "&#11088;"] },
    mission: {
      items: [
        { id: "toy-train", label: "Train", icon: "&#128646;" },
        { id: "toy-cube", label: "Cube", icon: "&#129513;" },
        { id: "toy-teddy", label: "Teddy", icon: "&#129528;" },
      ],
      zoneLabel: "Kindness Chest",
      zoneIcon: "&#127873;",
      success: "You tidied the play space so everyone can join in safely.",
    },
  },
  {
    id: "level-2",
    number: 2,
    bandKey: "tiny",
    bandLabel: levelBandTemplates.tiny.label,
    title: "Level 2: Bottle Count Patrol",
    scenario: "The picnic corner has reusable water bottles ready for a group of friends.",
    task: "Count the bottles and tap the correct number.",
    reward: 10,
    mode: "count",
    scene: { place: "Picnic Meadow", label: "Count and Care", colors: ["#84c8ff", "#ffd36d"], art: ["&#127794;", "&#129380;", "&#9728;"] },
    mission: {
      countIcon: "&#129380;",
      objects: ["&#129380;", "&#129380;", "&#129380;", "&#129380;"],
      options: [2, 3, 4],
      correctCount: 4,
      success: "Nice counting. Being careful helps everyone get what they need.",
    },
  },
  {
    id: "level-3",
    number: 3,
    bandKey: "tiny",
    bandLabel: levelBandTemplates.tiny.label,
    title: "Level 3: Playground Picture Pairs",
    scenario: "Big kindness picture cards are mixed up around the playground board.",
    task: "Flip two cards to find the pictures that belong together.",
    reward: 12,
    mode: "memory",
    scene: { place: "Playground", label: "Visual Match Game", colors: ["#7f9bff", "#ff93c5"], art: ["&#128747;", "&#127912;", "&#129309;"] },
    mission: {
      cards: [
        { id: "share-crayon-a", pairId: "share-crayon", icon: "&#127912;", label: "Crayon" },
        { id: "share-crayon-b", pairId: "share-crayon", icon: "&#129309;", label: "Share" },
        { id: "trash-bin-a", pairId: "trash-bin", icon: "&#127850;", label: "Trash" },
        { id: "trash-bin-b", pairId: "trash-bin", icon: "&#128465;", label: "Bin" },
        { id: "friend-help-a", pairId: "friend-help", icon: "&#128100;", label: "Friend" },
        { id: "friend-help-b", pairId: "friend-help", icon: "&#128170;", label: "Help" },
      ],
      success: "You found all the kindness picture pairs.",
    },
  },
  {
    id: "level-4",
    number: 4,
    bandKey: "tiny",
    bandLabel: levelBandTemplates.tiny.label,
    title: "Level 4: Rainbow Poster Repair",
    scenario: "A kindness poster is missing its happy finishing pieces.",
    task: "Tap each missing part to complete the drawing.",
    reward: 10,
    mode: "complete",
    scene: { place: "Art Room", label: "Complete the Drawing", colors: ["#ff9bd0", "#ffd86d"], art: ["&#127752;", "&#128396;", "&#11088;"] },
    mission: {
      drawingLabel: "Rainbow kindness poster",
      parts: [
        { id: "sun", label: "Sunny corner", icon: "&#9728;" },
        { id: "rainbow", label: "Rainbow arc", icon: "&#127752;" },
        { id: "heart", label: "Kind heart", icon: "&#10084;" },
      ],
      success: "Your poster is complete and full of cheerful kindness.",
    },
  },
  {
    id: "level-5",
    number: 5,
    bandKey: "tiny",
    bandLabel: levelBandTemplates.tiny.label,
    title: "Level 5: Snack Share Decision",
    scenario: "A friend forgot their snack and looks a little sad.",
    task: "Choose the response that shows kindness.",
    reward: 10,
    mode: "choice",
    scene: { place: "Lunch Corner", label: "Help Others", colors: ["#ffb374", "#ff7fb9"], art: ["&#129360;", "&#128522;", "&#127775;"] },
    mission: {
      options: [
        { label: "Share a little snack", correct: true, explanation: "Sharing what you can is a kind and caring choice." },
        { label: "Hide your snack", correct: false, explanation: "Hiding food misses a chance to help." },
        { label: "Laugh at them", correct: false, explanation: "Laughing would make your friend feel worse." },
      ],
    },
  },
  {
    id: "level-6",
    number: 6,
    bandKey: "tiny",
    bandLabel: levelBandTemplates.tiny.label,
    title: "Level 6: Classroom Care Picture Pick",
    scenario: "Two classroom pictures show different ways to treat a shared space.",
    task: "Tap the picture that shows the kind classroom choice.",
    reward: 12,
    mode: "visual-choice",
    scene: { place: "Bright Classroom", label: "Picture Choice Game", colors: ["#69cfff", "#9f88ff"], art: ["&#127979;", "&#129533;", "&#127775;"] },
    mission: {
      options: [
        {
          label: "Help clean the art table",
          visual: "&#127912; &#129533;",
          caption: "Wipe the table so everyone can use it again.",
          correct: true,
          explanation: "Helping clean shared spaces is a kind choice.",
        },
        {
          label: "Leave the art mess behind",
          visual: "&#127912; &#128533;",
          caption: "Walk away and leave the mess for someone else.",
          correct: false,
          explanation: "Shared spaces feel better when everyone helps.",
        },
      ],
    },
  },
  {
    id: "level-7",
    number: 7,
    bandKey: "tiny",
    bandLabel: levelBandTemplates.tiny.label,
    title: "Level 7: Garden Leaf Patrol",
    scenario: "Leaves and wrappers are scattered near the school garden path.",
    task: "Clean the garden path by dragging the loose items into the green bin.",
    reward: 12,
    mode: "drag",
    scene: { place: "School Garden", label: "Clean the Environment", colors: ["#7fe1a0", "#7bc7ff"], art: ["&#127793;", "&#127810;", "&#128465;"] },
    mission: {
      items: [
        { id: "leaf-1", label: "Leaf", icon: "&#127810;" },
        { id: "leaf-2", label: "Paper", icon: "&#128196;" },
        { id: "leaf-3", label: "Cup", icon: "&#129380;" },
      ],
      zoneLabel: "Green Bin",
      zoneIcon: "&#128465;",
      success: "You kept the garden clean and welcoming for everyone.",
    },
  },
  {
    id: "level-8",
    number: 8,
    bandKey: "tiny",
    bandLabel: levelBandTemplates.tiny.label,
    title: "Level 8: Line Time Picture Choice",
    scenario: "Two line-up pictures show different ways to wait for a turn.",
    task: "Tap the picture that shows patient waiting.",
    reward: 14,
    mode: "visual-choice",
    scene: { place: "Lunch Hall", label: "Picture Choice Game", colors: ["#7f89ff", "#ff8cb8"], art: ["&#127857;", "&#128694;", "&#10024;"] },
    mission: {
      options: [
        {
          label: "Wait your turn",
          visual: "&#128694; &#128522;",
          caption: "Stand calmly and wait for the line to move.",
          correct: true,
          explanation: "Waiting your turn keeps the line fair.",
        },
        {
          label: "Push to the front",
          visual: "&#128168; &#128694;",
          caption: "Push ahead so you go first.",
          correct: false,
          explanation: "Pushing can make others feel upset and unsafe.",
        },
      ],
    },
  },
  {
    id: "level-9",
    number: 9,
    bandKey: "tiny",
    bandLabel: levelBandTemplates.tiny.label,
    title: "Level 9: Library Kindness Pairs",
    scenario: "Quiet library picture cards need matching before story time starts.",
    task: "Flip cards to match the pictures that belong together.",
    reward: 14,
    mode: "memory",
    scene: { place: "Library", label: "Visual Match Game", colors: ["#65c7ff", "#8e87ff"], art: ["&#128214;", "&#128218;", "&#127775;"] },
    mission: {
      cards: [
        { id: "book-cart-a", pairId: "book-cart", icon: "&#128214;", label: "Book" },
        { id: "book-cart-b", pairId: "book-cart", icon: "&#128722;", label: "Return" },
        { id: "reader-whisper-a", pairId: "reader-whisper", icon: "&#128218;", label: "Reader" },
        { id: "reader-whisper-b", pairId: "reader-whisper", icon: "&#128483;", label: "Whisper" },
        { id: "chair-share-a", pairId: "chair-share", icon: "&#128186;", label: "Seat" },
        { id: "chair-share-b", pairId: "chair-share", icon: "&#129309;", label: "Share" },
      ],
      success: "You matched every quiet library picture pair.",
    },
  },
  {
    id: "level-10",
    number: 10,
    bandKey: "tiny",
    bandLabel: levelBandTemplates.tiny.label,
    title: "Level 10: Recycle Count Challenge",
    scenario: "The eco club is sorting cans and bottles before the park festival.",
    task: "Count the items and pick the correct number.",
    reward: 14,
    mode: "count",
    scene: { place: "Eco Tent", label: "Counting Game", colors: ["#6ed9b8", "#6eb8ff"], art: ["&#129689;", "&#127795;", "&#11088;"] },
    mission: {
      countIcon: "&#129689;",
      objects: ["&#129689;", "&#129689;", "&#129689;", "&#129689;", "&#129689;"],
      options: [4, 5, 6],
      correctCount: 5,
      success: "Great counting. Careful sorting helps the environment.",
    },
  },
  {
    id: "level-11",
    number: 11,
    bandKey: "young",
    bandLabel: levelBandTemplates.young.label,
    title: "Level 11: Chalk Hero Finish",
    scenario: "A kindness mural on the playground path is missing its final pieces.",
    task: "Complete the chalk drawing by placing every missing part.",
    reward: 16,
    mode: "complete",
    scene: { place: "Playground Path", label: "Complete the Drawing", colors: ["#ff8fc5", "#7fd2ff"], art: ["&#127912;", "&#127752;", "&#10024;"] },
    mission: {
      drawingLabel: "Playground kindness mural",
      parts: [
        { id: "star", label: "Star burst", icon: "&#11088;" },
        { id: "cloud", label: "Happy cloud", icon: "&#9729;" },
        { id: "balloon", label: "Celebration balloon", icon: "&#127880;" },
      ],
      success: "The mural is glowing with cheerful teamwork.",
    },
  },
  {
    id: "level-12",
    number: 12,
    bandKey: "young",
    bandLabel: levelBandTemplates.young.label,
    title: "Level 12: Art Cart Rescue",
    scenario: "The art cart is crowded with supplies, and the next group is waiting.",
    task: "Drag the art tools back into the supply basket.",
    reward: 16,
    mode: "drag",
    scene: { place: "Maker Studio", label: "Clean the Environment", colors: ["#ffb26f", "#ff7db5"], art: ["&#127912;", "&#128396;", "&#127775;"] },
    mission: {
      items: [
        { id: "brush-1", label: "Brush", icon: "&#128396;" },
        { id: "paint-1", label: "Paint", icon: "&#127912;" },
        { id: "glue-1", label: "Glue", icon: "&#129513;" },
      ],
      zoneLabel: "Supply Basket",
      zoneIcon: "&#129530;",
      success: "You reset the art station for the next creative team.",
    },
  },
  {
    id: "level-13",
    number: 13,
    bandKey: "young",
    bandLabel: levelBandTemplates.young.label,
    title: "Level 13: New Friend Welcome",
    scenario: "A new student is standing alone at recess and looking unsure.",
    task: "Choose the action that helps them feel included.",
    reward: 14,
    mode: "choice",
    scene: { place: "Recess Yard", label: "Help Others", colors: ["#68d5ff", "#7de4a1"], art: ["&#128100;", "&#128075;", "&#127752;"] },
    mission: {
      options: [
        { label: "Invite them into your game", correct: true, explanation: "Inviting them in helps them feel welcome and seen." },
        { label: "Pretend not to notice", correct: false, explanation: "Ignoring them can make them feel even more left out." },
        { label: "Tell them to wait alone", correct: false, explanation: "That is not a kind or inclusive response." },
      ],
    },
  },
  {
    id: "level-14",
    number: 14,
    bandKey: "young",
    bandLabel: levelBandTemplates.young.label,
    title: "Level 14: Playground Patrol Pairing",
    scenario: "A hero guide needs help matching playground problems with helpful actions.",
    task: "Pair each playground problem with the best caring response.",
    reward: 16,
    mode: "match",
    scene: { place: "Adventure Playground", label: "Match the Pair", colors: ["#8b84ff", "#ffd36d"], art: ["&#127918;", "&#128170;", "&#11088;"] },
    mission: {
      leftTitle: "Problem",
      rightTitle: "Helpful Action",
      pairs: [
        { id: "lost-ball", left: "A ball rolls away", right: "Help bring it back", leftIcon: "&#9917;", rightIcon: "&#128170;" },
        { id: "wet-slide", left: "Slide is wet after rain", right: "Warn others kindly", leftIcon: "&#127783;", rightIcon: "&#128276;" },
        { id: "left-trash", left: "Snack wrapper on bench", right: "Put it in the bin", leftIcon: "&#127850;", rightIcon: "&#128465;" },
      ],
      success: "You matched every playground problem to a kind solution.",
    },
  },
  {
    id: "level-15",
    number: 15,
    bandKey: "young",
    bandLabel: levelBandTemplates.young.label,
    title: "Level 15: Study Circle Signals",
    scenario: "Your study group has different moments that need respectful responses.",
    task: "Connect each group moment to the fairest behavior.",
    reward: 18,
    mode: "relation",
    scene: { place: "Study Circle", label: "Relational Game", colors: ["#65cbff", "#7f8fff"], art: ["&#128218;", "&#128161;", "&#10024;"] },
    mission: {
      leftTitle: "Moment",
      rightTitle: "Fair Response",
      pairs: [
        { id: "quiet-member", left: "A quiet teammate has an idea", right: "Pause and invite them in", leftIcon: "&#128172;", rightIcon: "&#128587;" },
        { id: "too-much-work", left: "One person is doing everything", right: "Rebalance the tasks", leftIcon: "&#128221;", rightIcon: "&#9878;" },
        { id: "missed-note", left: "Someone missed a note", right: "Catch them up kindly", leftIcon: "&#9997;", rightIcon: "&#129309;" },
      ],
      success: "You handled every group signal with respect and fairness.",
    },
  },
  {
    id: "level-16",
    number: 16,
    bandKey: "young",
    bandLabel: levelBandTemplates.young.label,
    title: "Level 16: Garden Tool Count",
    scenario: "The community garden team needs a quick count before cleanup starts.",
    task: "Count the tools and choose the right number.",
    reward: 18,
    mode: "count",
    scene: { place: "Community Garden", label: "Counting Game", colors: ["#7fe3a5", "#68c8ff"], art: ["&#127793;", "&#128668;", "&#11088;"] },
    mission: {
      countIcon: "&#128668;",
      objects: ["&#128668;", "&#128668;", "&#128668;", "&#128668;", "&#128668;", "&#128668;"],
      options: [5, 6, 7],
      correctCount: 6,
      success: "Accurate counting helps the whole team stay organized.",
    },
  },
  {
    id: "level-17",
    number: 17,
    bandKey: "young",
    bandLabel: levelBandTemplates.young.label,
    title: "Level 17: Science Fair Setup",
    scenario: "Before visitors arrive, the science fair table needs a respectful reset.",
    task: "Drag the materials into the project station.",
    reward: 20,
    mode: "drag",
    scene: { place: "Science Hall", label: "Team Setup", colors: ["#6ed0ff", "#a082ff"], art: ["&#128300;", "&#128161;", "&#11088;"] },
    mission: {
      items: [
        { id: "poster-board", label: "Poster", icon: "&#128209;" },
        { id: "battery-pack", label: "Battery", icon: "&#128267;" },
        { id: "lab-notes", label: "Notes", icon: "&#128221;" },
      ],
      zoneLabel: "Project Station",
      zoneIcon: "&#128300;",
      success: "You prepared the display so the whole team can shine.",
    },
  },
  {
    id: "level-18",
    number: 18,
    bandKey: "young",
    bandLabel: levelBandTemplates.young.label,
    title: "Level 18: Club Chat Response",
    scenario: "A team chat starts sounding impatient when someone asks for help.",
    task: "Choose the response that is supportive and respectful.",
    reward: 18,
    mode: "choice",
    scene: { place: "Digital Club Room", label: "Help Others", colors: ["#7b8dff", "#6fd3d0"], art: ["&#128241;", "&#128172;", "&#127775;"] },
    mission: {
      options: [
        { label: "Reply kindly and offer help", correct: true, explanation: "Supportive replies keep the space calm and useful." },
        { label: "Tell them to stop asking", correct: false, explanation: "That would make the space less welcoming." },
        { label: "Post a rude joke", correct: false, explanation: "Rude jokes damage trust and teamwork." },
      ],
    },
  },
  {
    id: "level-19",
    number: 19,
    bandKey: "young",
    bandLabel: levelBandTemplates.young.label,
    title: "Level 19: Poster Lab Complete",
    scenario: "A responsibility poster for the club room is missing a few final design parts.",
    task: "Complete the drawing by adding each missing piece.",
    reward: 20,
    mode: "complete",
    scene: { place: "Club Studio", label: "Complete the Drawing", colors: ["#ff8aae", "#ffca6f"], art: ["&#128396;", "&#127912;", "&#127775;"] },
    mission: {
      drawingLabel: "Club responsibility poster",
      parts: [
        { id: "badge", label: "Hero badge", icon: "&#127894;" },
        { id: "leaf", label: "Green leaf", icon: "&#127810;" },
        { id: "spark", label: "Spark line", icon: "&#10024;" },
      ],
      success: "The poster looks complete and ready to inspire the room.",
    },
  },
  {
    id: "level-20",
    number: 20,
    bandKey: "young",
    bandLabel: levelBandTemplates.young.label,
    title: "Level 20: Respect Route Match",
    scenario: "In a shared school space, respectful choices keep everyone included.",
    task: "Match each situation to the response that shows responsibility.",
    reward: 18,
    mode: "match",
    scene: { place: "School Walkway", label: "Match the Pair", colors: ["#7bd0ff", "#7de09f"], art: ["&#127979;", "&#128694;", "&#10024;"] },
    mission: {
      leftTitle: "Situation",
      rightTitle: "Responsible Response",
      pairs: [
        { id: "busy-hall", left: "Hallway is crowded", right: "Keep to one side", leftIcon: "&#128694;", rightIcon: "&#128587;" },
        { id: "dropped-notes", left: "Papers spill from a folder", right: "Help pick them up", leftIcon: "&#128193;", rightIcon: "&#128170;" },
        { id: "shared-seat", left: "Someone needs a chair", right: "Offer one calmly", leftIcon: "&#129489;", rightIcon: "&#129309;" },
      ],
      success: "You matched every respectful action to the right moment.",
    },
  },
  {
    id: "level-21",
    number: 21,
    bandKey: "teen",
    bandLabel: levelBandTemplates.teen.label,
    title: "Level 21: Help Route Sequence",
    scenario: "A younger student looks lost after class, and the best support needs to happen in the right order.",
    task: "Tap the steps in the order that solves the situation kindly.",
    reward: 20,
    mode: "sequence",
    scene: { place: "Mentor Hall", label: "Logic Puzzle Game", colors: ["#7f86ff", "#ff9bc3"], art: ["&#128506;", "&#128161;", "&#127775;"] },
    mission: {
      steps: [
        { id: "ask-help", label: "Ask if they need help", icon: "&#128172;" },
        { id: "guide-route", label: "Guide them to the right room or trusted adult", icon: "&#128506;" },
        { id: "check-feelings", label: "Check that they feel okay before leaving", icon: "&#10084;" },
      ],
      success: "Kind leadership means helping in the right order.",
      retry: "Start by listening, then guide the person, then make sure they feel okay.",
    },
  },
  {
    id: "level-22",
    number: 22,
    bandKey: "teen",
    bandLabel: levelBandTemplates.teen.label,
    title: "Level 22: Welcome Table Reset",
    scenario: "A community event is opening soon, and the welcome table needs a quick reset.",
    task: "Drag the supplies into the welcome station before guests arrive.",
    reward: 22,
    mode: "drag",
    scene: { place: "Community Hall", label: "Clean the Environment", colors: ["#68d2ff", "#69ddb6"], art: ["&#127970;", "&#127991;", "&#10024;"] },
    mission: {
      items: [
        { id: "badge-pack", label: "Badges", icon: "&#127991;" },
        { id: "info-sheet", label: "Sheets", icon: "&#128196;" },
        { id: "marker-pack", label: "Markers", icon: "&#128396;" },
      ],
      zoneLabel: "Welcome Station",
      zoneIcon: "&#128230;",
      success: "You made the space ready and respectful for every visitor.",
    },
  },
  {
    id: "level-23",
    number: 23,
    bandKey: "teen",
    bandLabel: levelBandTemplates.teen.label,
    title: "Level 23: Debate Tone Choice",
    scenario: "A discussion gets intense, and one voice is starting to dominate the room.",
    task: "Choose the response that protects respect and fairness.",
    reward: 20,
    mode: "choice",
    scene: { place: "Debate Room", label: "Help Others", colors: ["#7b8cff", "#ffa26d"], art: ["&#128483;", "&#128172;", "&#11088;"] },
    mission: {
      options: [
        { label: "Pause and invite quieter voices in", correct: true, explanation: "That keeps the discussion respectful and balanced." },
        { label: "Talk even louder", correct: false, explanation: "More noise does not create fairness." },
        { label: "Mock the quieter person", correct: false, explanation: "Mocking someone damages trust and dignity." },
      ],
    },
  },
  {
    id: "level-24",
    number: 24,
    bandKey: "teen",
    bandLabel: levelBandTemplates.teen.label,
    title: "Level 24: Donation Plan Puzzle",
    scenario: "A service project needs a smart plan before the donation packs are ready.",
    task: "Tap the planning steps from first to last.",
    reward: 20,
    mode: "sequence",
    scene: { place: "Service Hub", label: "Logic Puzzle Game", colors: ["#7de1b4", "#7ac7ff"], art: ["&#127873;", "&#128230;", "&#127775;"] },
    mission: {
      steps: [
        { id: "check-needs", label: "Check which supplies are needed", icon: "&#128221;" },
        { id: "sort-supplies", label: "Sort items into clear groups", icon: "&#128230;" },
        { id: "pack-boxes", label: "Pack each donation box carefully", icon: "&#127873;" },
      ],
      success: "Excellent. Good planning makes helping fair and organized.",
      retry: "Think about what needs to happen before any box can be packed.",
    },
  },
  {
    id: "level-25",
    number: 25,
    bandKey: "teen",
    bandLabel: levelBandTemplates.teen.label,
    title: "Level 25: Community Banner Finish",
    scenario: "A banner for a kindness campaign still needs its final graphic pieces.",
    task: "Complete the drawing so the message is ready for everyone to see.",
    reward: 22,
    mode: "complete",
    scene: { place: "Town Square Studio", label: "Complete the Drawing", colors: ["#ff95c4", "#ffd470"], art: ["&#127970;", "&#127760;", "&#10024;"] },
    mission: {
      drawingLabel: "Kindness campaign banner",
      parts: [
        { id: "globe", label: "Community globe", icon: "&#127760;" },
        { id: "star", label: "Guiding star", icon: "&#11088;" },
        { id: "leaf", label: "Growth leaf", icon: "&#127810;" },
      ],
      success: "The campaign banner is finished and ready to inspire action.",
    },
  },
  {
    id: "level-26",
    number: 26,
    bandKey: "teen",
    bandLabel: levelBandTemplates.teen.label,
    title: "Level 26: Team Repair Sequence",
    scenario: "A group project feels tense after someone is left out, and the team needs a smart repair plan.",
    task: "Tap the repair steps from first to last.",
    reward: 20,
    mode: "sequence",
    scene: { place: "Leadership Lab", label: "Logic Puzzle Game", colors: ["#71d1ff", "#9885ff"], art: ["&#127919;", "&#129504;", "&#127775;"] },
    mission: {
      steps: [
        { id: "listen-first", label: "Listen to what happened", icon: "&#128066;" },
        { id: "apologize-include", label: "Apologize and include the person again", icon: "&#129309;" },
        { id: "agree-next-step", label: "Agree on a fair next team step", icon: "&#128161;" },
      ],
      success: "You repaired the team plan with empathy and logic.",
      retry: "Start by understanding the problem before trying to solve it.",
    },
  },
  {
    id: "level-27",
    number: 27,
    bandKey: "teen",
    bandLabel: levelBandTemplates.teen.label,
    title: "Level 27: Social Feed Respect Links",
    scenario: "Online situations need careful, people-first responses.",
    task: "Connect each online situation to the action that shows social awareness.",
    reward: 22,
    mode: "relation",
    scene: { place: "Digital Commons", label: "Relational Game", colors: ["#6ec8ff", "#ff92b5"], art: ["&#128241;", "&#128172;", "&#10024;"] },
    mission: {
      leftTitle: "Online Situation",
      rightTitle: "Respectful Action",
      pairs: [
        { id: "harsh-thread", left: "A thread turns rude", right: "Reply calmly or step back", leftIcon: "&#128172;", rightIcon: "&#128588;" },
        { id: "private-share", left: "Someone posts private info", right: "Protect their privacy", leftIcon: "&#128274;", rightIcon: "&#128737;" },
        { id: "ignored-idea", left: "A useful idea is overlooked", right: "Lift it back into the chat", leftIcon: "&#128161;", rightIcon: "&#11014;" },
      ],
      success: "You linked every online moment to a socially aware response.",
    },
  },
  {
    id: "level-28",
    number: 28,
    bandKey: "teen",
    bandLabel: levelBandTemplates.teen.label,
    title: "Level 28: Sunset Square Cleanup",
    scenario: "After a neighborhood kindness fair, the square needs one final cleanup mission.",
    task: "Drag the leftover items into the community recycling station.",
    reward: 24,
    mode: "drag",
    scene: { place: "Sunset Square", label: "Final Cleanup", colors: ["#ff9d79", "#7d8dff"], art: ["&#127749;", "&#127970;", "&#128465;"] },
    mission: {
      items: [
        { id: "flyer-last", label: "Flyer", icon: "&#128196;" },
        { id: "cup-last", label: "Cup", icon: "&#129380;" },
        { id: "ribbon-last", label: "Badge Ribbon", icon: "&#127991;" },
      ],
      zoneLabel: "Recycling Station",
      zoneIcon: "&#128465;",
      success: "Mission complete. You cared for the community from start to finish.",
    },
  },
];

function getBandKeyFromAgeGroup(ageGroup) {
  if (ageGroup === "4-6") {
    return "tiny";
  }

  if (ageGroup === "7-10") {
    return "young";
  }

  if (ageGroup === "11-13") {
    return "tween";
  }

  return "teen";
}

function buildLevelScene(levelDefinition) {
  const background = levelDefinition.background || {};
  const image = levelDefinition.image || {};
  const artTokens = [image.cover, ...(image.tokens || [])].filter(Boolean).slice(0, 3);

  return {
    place: background.place || "Kindness World",
    label: background.label || "Kindness Mission",
    colors: Array.isArray(background.colors) && background.colors.length >= 2 ? background.colors : ["#7a57ff", "#68d1ff"],
    art: artTokens.length ? artTokens : ["&#10024;", "&#127752;", "&#11088;"],
    landscape: image.landscape || levelDefinition.description || "Kindness scene",
  };
}

function buildMatchMission(gameData = {}) {
  const uniqueCards = Array.isArray(gameData.cards) ? gameData.cards : [];

  return {
    visualOnly: Boolean(gameData.visualOnly),
    cards: uniqueCards.flatMap((card, index) => [
      {
        id: `${card.pairId || `pair-${index + 1}`}-a`,
        pairId: card.pairId || `pair-${index + 1}`,
        icon: card.icon || "&#10024;",
        label: card.label || "Kindness",
      },
      {
        id: `${card.pairId || `pair-${index + 1}`}-b`,
        pairId: card.pairId || `pair-${index + 1}`,
        icon: card.icon || "&#10024;",
        label: card.label || "Kindness",
      },
    ]),
    success: gameData.success || "You found every caring picture pair.",
  };
}

function buildMissionFromLevel(levelDefinition) {
  const gameData = levelDefinition.gameData || {};
  const lesson = levelDefinition.rewards?.lesson || "Kind choices help communities grow.";

  if (levelDefinition.gameType === "match-pair" || levelDefinition.gameType === "memory-puzzle") {
    return buildMatchMission(gameData);
  }

  if (levelDefinition.gameType === "drag-sort") {
    return {
      items: Array.isArray(gameData.items) ? gameData.items : [],
      zoneLabel: gameData.zoneLabel || "Kindness Zone",
      zoneIcon: gameData.zoneIcon || "&#127873;",
      success: gameData.success || lesson,
    };
  }

  if (levelDefinition.gameType === "relation") {
    return {
      leftTitle: gameData.leftTitle || "Situation",
      rightTitle: gameData.rightTitle || "Response",
      pairs: Array.isArray(gameData.pairs) ? gameData.pairs : [],
      success: gameData.success || lesson,
    };
  }

  if (levelDefinition.gameType === "sequence") {
    return {
      steps: Array.isArray(gameData.steps) ? gameData.steps : [],
      success: gameData.success || lesson,
      retry: gameData.retry || "Try again from the beginning and think about what should happen first.",
    };
  }

  if (levelDefinition.gameType === "jigsaw") {
    return {
      previewLabel: gameData.previewLabel || levelDefinition.title,
      pieces: Array.isArray(gameData.pieces) ? gameData.pieces : [],
      success: gameData.success || lesson,
      retry: gameData.retry || "Start from the first picture piece and rebuild the scene step by step.",
    };
  }

  if (levelDefinition.gameType === "complete-drawing") {
    return {
      drawingLabel: gameData.drawingLabel || levelDefinition.title,
      parts: Array.isArray(gameData.parts) ? gameData.parts : [],
      success: gameData.success || lesson,
    };
  }

  if (["pattern", "difference", "decision-sim"].includes(levelDefinition.gameType)) {
    return {
      prompt: gameData.prompt || levelDefinition.instructions,
      options: Array.isArray(gameData.options) ? gameData.options : [],
      success: gameData.success || lesson,
    };
  }

  return {
    prompt: levelDefinition.instructions,
    options: Array.isArray(gameData.options) ? gameData.options : [],
    success: lesson,
  };
}

function createLevelCatalog(levelDefinitions) {
  const seenIds = new Set();
  const sourceLevels = Array.isArray(levelDefinitions) && levelDefinitions.length ? levelDefinitions : legacyLevelCatalog;

  return sourceLevels.reduce((catalog, definition, index) => {
    if (!definition || !definition.id || seenIds.has(definition.id)) {
      return catalog;
    }

    seenIds.add(definition.id);
    const bandKey = definition.number ? definition.bandKey : getBandKeyFromAgeGroup(definition.ageGroup);
    const bandTemplate = levelBandTemplates[bandKey] || levelBandTemplates.teen;

    if (definition.number) {
      catalog.push(definition);
      return catalog;
    }

    const levelNumber = index + 1;
    catalog.push({
      id: definition.id,
      number: levelNumber,
      ageGroup: definition.ageGroup,
      bandKey,
      bandLabel: bandTemplate.label,
      title: `Level ${levelNumber}: ${definition.title}`,
      rawTitle: definition.title,
      scenario: definition.description,
      task: definition.instructions,
      reward: definition.points,
      points: definition.points,
      difficulty: definition.difficulty,
      mode: definition.gameType,
      voiceMessage: definition.voiceMessage,
      rewards: definition.rewards || {},
      badge: definition.badge || null,
      nextLevelId: definition.nextLevel || null,
      scene: buildLevelScene(definition),
      mission: buildMissionFromLevel(definition),
      source: definition,
    });

    return catalog;
  }, []);
}

const levelCatalog = createLevelCatalog(window.LEARNING_KIND_LEVELS || []);

const LevelManager = {
  getAll() {
    return levelCatalog;
  },
  getByNumber(levelNumber) {
    return levelCatalog.find((level) => level.number === levelNumber) || null;
  },
  getById(levelId) {
    return levelCatalog.find((level) => level.id === levelId) || null;
  },
  getForAge(age) {
    if (!age) {
      return [];
    }

    const band = getLevelBandForAge(age);
    return levelCatalog.filter((level) => level.bandKey === band.key);
  },
  getNextLevel(level) {
    if (!level) {
      return null;
    }

    if (level.nextLevelId) {
      return this.getById(level.nextLevelId);
    }

    return this.getByNumber(level.number + 1);
  },
  getBadges() {
    return levelCatalog
      .filter((level) => level.badge)
      .map((level) => ({
        id: level.badge.id,
        name: level.badge.name,
        description: level.badge.description,
        icon: level.badge.icon,
        unlocked: (snapshot) => Array.isArray(snapshot.completedLevels) && snapshot.completedLevels.includes(level.number),
      }));
  },
};

/* =========================
   Badges
   ========================= */
const badgeCatalog = [
  {
    id: "guide-found",
    name: "Kind Beginner",
    description: "Reveal your first guide.",
    icon: "&#127942;",
    unlocked: (snapshot) => Boolean(snapshot.guideId),
  },
  {
    id: "short-starter",
    name: "Story Starter",
    description: "Complete your first kindness short.",
    icon: "&#127909;",
    unlocked: (snapshot) => snapshot.completedShorts.length >= 1,
  },
  {
    id: "kind-helper",
    name: "Kind Helper",
    description: "Make your first correct kindness decision.",
    icon: "&#129309;",
    unlocked: (snapshot) => snapshot.scoredShorts.length >= 1,
  },
  {
    id: "level-one",
    name: "Helping Hero",
    description: "Complete your first level mission.",
    icon: "&#127919;",
    unlocked: (snapshot) => snapshot.completedLevels.length >= 1,
  },
  {
    id: "daily-doer",
    name: "Daily Doer",
    description: "Complete all daily kindness tasks in one day.",
    icon: "&#128197;",
    unlocked: (snapshot) => getCompletedDailyCount(snapshot.dailyTasks) >= 3,
  },
  {
    id: "respect-master",
    name: "Respect Master",
    description: "Reach 120 kindness points.",
    icon: "&#11088;",
    unlocked: (snapshot) => snapshot.points >= 120,
  },
];

/* =========================
   App State
   ========================= */
function createDefaultState() {
  return {
    age: null,
    guideId: null,
    screen: "welcome",
    hasEnteredPlatform: false,
    points: 0,
    coins: 0,
    completedShorts: [],
    answeredShorts: {},
    scoredShorts: [],
    likedShorts: [],
    completedLevels: [],
    unlockedBadges: [],
    favoriteGames: [],
    currentShortIndex: 0,
    currentLevelNumber: null,
    currentLevelBand: null,
    dailyTasks: { date: "", tasks: [] },
    voiceEnabled: true,
    assistantState: "idle",
    games: {
      selectedDrawColor: "#7a57ff",
      selectedFillColor: "#8b74ff",
      coloring: {
        circle: "",
        house: "",
        tree: "",
      },
      coloringRewarded: false,
      cleanParkCollected: [],
      cleanParkDone: false,
      helpFriendChoice: null,
      helpFriendRewarded: false,
      drawingCelebrated: false,
    },
    touchStartY: null,
    wheelLocked: false,
    hasInteracted: false,
  };
}

const state = createDefaultState();
const simulationState = {
  levelNumber: null,
  movedItems: [],
  completed: false,
  selectedItemId: null,
  selectedLeftId: null,
  selectedRightId: null,
  matchedPairs: [],
  completedParts: [],
  selectedCount: null,
  revealedCards: [],
  solvedCardIds: [],
   wrongCardIds: [],
   shuffledCards: [],
   shuffledRightPairs: [],
  memoryLocked: false,
  sequenceOrder: [],
  sequenceLocked: false,
};
const drawingState = {
  context: null,
  isDrawing: false,
  lastX: 0,
  lastY: 0,
};

function clearSimulationTimers() {
  window.clearTimeout(handleMemoryCard.timer);
  window.clearTimeout(handleSequenceStep.timer);
  window.clearTimeout(handleJigsawPiece.timer);
}

function resetSimulationState(levelNumber = null) {
  clearSimulationTimers();
  simulationState.levelNumber = levelNumber;
  simulationState.movedItems = [];
  simulationState.completed = false;
  simulationState.selectedItemId = null;
  simulationState.selectedLeftId = null;
  simulationState.selectedRightId = null;
  simulationState.matchedPairs = [];
  simulationState.completedParts = [];
  simulationState.selectedCount = null;
  simulationState.revealedCards = [];
  simulationState.solvedCardIds = [];
  simulationState.wrongCardIds = [];
  simulationState.shuffledCards = [];
  simulationState.shuffledRightPairs = [];
  simulationState.memoryLocked = false;
  simulationState.sequenceOrder = [];
  simulationState.sequenceLocked = false;
}

/* =========================
   DOM References
   ========================= */
const refs = {
  screens: document.querySelectorAll(".screen"),
  startButton: document.getElementById("start-button"),
  ageGrid: document.getElementById("age-grid"),
  agePanelStatus: document.getElementById("age-panel-status"),
  selectedAgeLabel: document.getElementById("selected-age-label"),
  ageGroupLabel: document.getElementById("age-group-label"),
  revealGuideButton: document.getElementById("reveal-guide-button"),
  backToWelcome: document.getElementById("back-to-welcome"),
  backToAge: document.getElementById("back-to-age"),
  continueButton: document.getElementById("continue-button"),
  revealAgeChip: document.getElementById("reveal-age-chip"),
  revealAvatar: document.getElementById("reveal-avatar"),
  revealName: document.getElementById("reveal-name"),
  revealIntro: document.getElementById("reveal-intro"),
  revealPersonality: document.getElementById("reveal-personality"),
  revealStyle: document.getElementById("reveal-style"),
  pointsCount: document.getElementById("points-count"),
  coinsCount: document.getElementById("coins-count"),
  activityCount: document.getElementById("activity-count"),
  currentLevelIndicator: document.getElementById("current-level-indicator"),
  voiceToggle: document.getElementById("voice-toggle"),
  voiceToggleIcon: document.getElementById("voice-toggle-icon"),
  voiceToggleLabel: document.getElementById("voice-toggle-label"),
  bottomNav: document.getElementById("bottom-nav"),
  navItems: document.querySelectorAll(".nav-item"),
  platformGuideAvatar: document.getElementById("platform-guide-avatar"),
  platformTitle: document.getElementById("platform-title"),
  platformSubtitle: document.getElementById("platform-subtitle"),
  platformDialogue: document.getElementById("platform-dialogue"),
  platformAge: document.getElementById("platform-age"),
  platformGuideName: document.getElementById("platform-guide-name"),
  platformBadgeCount: document.getElementById("platform-badge-count"),
  platformLevelWindow: document.getElementById("platform-level-window"),
  restartButton: document.getElementById("restart-button"),
  homeGamesButton: document.getElementById("home-games-button"),
  homeLevelsButton: document.getElementById("home-levels-button"),
  homeDashboardButton: document.getElementById("home-dashboard-button"),
  homeShortsButton: document.getElementById("home-shorts-button"),
  dailyTaskList: document.getElementById("daily-task-list"),
  gamesGuideMessage: document.getElementById("games-guide-message"),
  gamesPoints: document.getElementById("games-points"),
  gamesCompleteCount: document.getElementById("games-complete-count"),
  gamesColorCount: document.getElementById("games-color-count"),
  drawingCanvas: document.getElementById("drawing-canvas"),
  clearCanvasButton: document.getElementById("clear-canvas-button"),
  selectedFillLabel: document.getElementById("selected-fill-label"),
  coloringBoard: document.getElementById("coloring-board"),
  coloringFeedback: document.getElementById("coloring-feedback"),
  parkTrashBank: document.getElementById("park-trash-bank"),
  parkBin: document.getElementById("park-bin"),
  parkFeedback: document.getElementById("park-feedback"),
  friendFeedback: document.getElementById("friend-feedback"),
  gamesOpenShortsButton: document.getElementById("games-open-shorts-button"),
  gamesOpenLevelsButton: document.getElementById("games-open-levels-button"),
  gamesOpenDashboardButton: document.getElementById("games-open-dashboard-button"),
  shortsTrack: document.getElementById("shorts-track"),
  shortsViewport: document.getElementById("shorts-viewport"),
  shortProgressText: document.getElementById("short-progress-text"),
  shortProgressFill: document.getElementById("short-progress-fill"),
  likeButton: document.getElementById("like-button"),
  previousShortButton: document.getElementById("previous-short-button"),
  nextShortButton: document.getElementById("next-short-button"),
  narratorGuideStage: document.getElementById("narrator-guide-stage"),
  narratorText: document.getElementById("narrator-text"),
  levelBandLabel: document.getElementById("level-band-label"),
  currentLevelTitle: document.getElementById("current-level-title"),
  currentLevelCopy: document.getElementById("current-level-copy"),
  levelProgressText: document.getElementById("level-progress-text"),
  levelProgressFill: document.getElementById("level-progress-fill"),
  levelOverviewGuide: document.getElementById("level-overview-guide"),
  levelGrid: document.getElementById("level-grid"),
  simulationLevelName: document.getElementById("simulation-level-name"),
  simulationLevelScenario: document.getElementById("simulation-level-scenario"),
  simulationRewardPill: document.getElementById("simulation-reward-pill"),
  simulationLevelNumber: document.getElementById("simulation-level-number"),
  simulationLevelType: document.getElementById("simulation-level-type"),
  simulationLevelPlace: document.getElementById("simulation-level-place"),
  simulationTaskStrip: document.getElementById("simulation-task-strip"),
  favoriteGameButton: document.getElementById("favorite-game-button"),
  favoriteGameIcon: document.getElementById("favorite-game-icon"),
  favoriteGameLabel: document.getElementById("favorite-game-label"),
  levelSceneCard: document.getElementById("level-scene-card"),
  levelSceneBackdrop: document.getElementById("level-scene-backdrop"),
  levelSceneSparkles: document.getElementById("level-scene-sparkles"),
  levelSceneKicker: document.getElementById("level-scene-kicker"),
  levelSceneTitle: document.getElementById("level-scene-title"),
  levelSceneArt: document.getElementById("level-scene-art"),
  simulationStage: document.getElementById("simulation-stage"),
  simulationFeedback: document.getElementById("simulation-feedback"),
  simulationPrevButton: document.getElementById("simulation-prev-button"),
  simulationResetButton: document.getElementById("simulation-reset-button"),
  simulationNextButton: document.getElementById("simulation-next-button"),
  dashboardGuideAvatar: document.getElementById("dashboard-guide-avatar"),
  dashboardGuideName: document.getElementById("dashboard-guide-name"),
  dashboardAge: document.getElementById("dashboard-age"),
  dashboardPersonality: document.getElementById("dashboard-personality"),
  dashboardCoins: document.getElementById("dashboard-coins"),
  dashboardFavorites: document.getElementById("dashboard-favorites"),
  dashboardShorts: document.getElementById("dashboard-shorts"),
  dashboardShortsFill: document.getElementById("dashboard-shorts-fill"),
  dashboardLevels: document.getElementById("dashboard-levels"),
  dashboardLevelsFill: document.getElementById("dashboard-levels-fill"),
  dashboardPointsProgress: document.getElementById("dashboard-points-progress"),
  dashboardPointsFill: document.getElementById("dashboard-points-fill"),
  dashboardDaily: document.getElementById("dashboard-daily"),
  dashboardDailyFill: document.getElementById("dashboard-daily-fill"),
  badgeList: document.getElementById("badge-list"),
  celebrationLayer: document.getElementById("celebration-layer"),
  unlockBadge: document.getElementById("unlock-badge"),
  unlockBadgeCopy: document.getElementById("unlock-badge-copy"),
  lessonPopup: document.getElementById("lesson-popup"),
  lessonPopupTitle: document.getElementById("lesson-popup-title"),
  lessonPopupCopy: document.getElementById("lesson-popup-copy"),
  lessonPopupClose: document.getElementById("lesson-popup-close"),
  assistant: document.getElementById("assistant"),
  assistantAvatar: document.getElementById("assistant-avatar"),
  assistantMessage: document.getElementById("assistant-message"),
  assistantState: document.getElementById("assistant-state"),
};

/* =========================
   Generic Utilities
   ========================= */
function decodeEntity(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function getTodayKey() {
  return new Date().toLocaleDateString("en-CA");
}

function getGuideById(guideId) {
  for (const group of Object.values(guideGroups)) {
    const found = group.guides.find((guide) => guide.id === guideId);
    if (found) {
      return found;
    }
  }

  return null;
}

function getGuideVisualProfile(guide) {
  return guideVisualProfiles[guide.species] || guideVisualProfiles.default;
}

function getGuideGroupForAge(age) {
  if (age >= 4 && age <= 6) {
    return { key: "tiny", ...guideGroups.tiny };
  }

  if (age >= 7 && age <= 10) {
    return { key: "young", ...guideGroups.young };
  }

  if (age >= 11 && age <= 13) {
    return { key: "tween", ...guideGroups.tween };
  }

  return { key: "teen", ...guideGroups.teen };
}

function getLevelBandForAge(age) {
  if (age >= 4 && age <= 6) {
    return { key: "tiny", ...levelBandTemplates.tiny };
  }

  if (age >= 7 && age <= 10) {
    return { key: "young", ...levelBandTemplates.young };
  }

  if (age >= 11 && age <= 13) {
    return { key: "tween", ...levelBandTemplates.tween };
  }

  return { key: "teen", ...levelBandTemplates.teen };
}

function getGuide() {
  return state.guideId ? getGuideById(state.guideId) : null;
}

function getLevelsForCurrentAge() {
  if (!state.age) {
    return [];
  }

  return LevelManager.getForAge(state.age);
}

function getLevelByNumber(levelNumber) {
  return LevelManager.getByNumber(levelNumber);
}

function getCompletedDailyCount(taskState) {
  if (!taskState || !Array.isArray(taskState.tasks)) {
    return 0;
  }

  return taskState.tasks.filter((task) => task.completed).length;
}

function getActivityCount() {
  return state.completedShorts.length + state.completedLevels.length + getCompletedDailyCount(state.dailyTasks) + getCompletedGameCount();
}

function getColoredShapeCount() {
  return Object.values(state.games.coloring).filter(Boolean).length;
}

function getCompletedGameCount() {
  return Number(state.games.cleanParkDone) + Number(state.games.helpFriendRewarded) + Number(state.games.coloringRewarded);
}

function getBandProgress() {
  if (!state.age) {
    return { completed: 0, total: 0, min: 1, max: 1 };
  }

  const band = getLevelBandForAge(state.age);
  const completedInBand = state.completedLevels.filter((levelNumber) => levelNumber >= band.min && levelNumber <= band.max).length;

  return {
    completed: completedInBand,
    total: band.max - band.min + 1,
    min: band.min,
    max: band.max,
  };
}

function getUnlockedLevelNumber() {
  if (!state.age) {
    return 1;
  }

  const band = getLevelBandForAge(state.age);
  const completedInBand = state.completedLevels.filter((levelNumber) => levelNumber >= band.min && levelNumber <= band.max).length;
  return Math.min(band.max, band.min + completedInBand);
}

function isLevelAvailable(levelNumber) {
  if (!state.age) {
    return false;
  }

  const band = getLevelBandForAge(state.age);
  if (levelNumber < band.min || levelNumber > band.max) {
    return false;
  }

  return levelNumber <= getUnlockedLevelNumber() || state.completedLevels.includes(levelNumber);
}

function pickRandomGuide(age) {
  const group = getGuideGroupForAge(age);
  const guide = group.guides[Math.floor(Math.random() * group.guides.length)];

  return {
    ...guide,
    ageText: group.ageText,
    groupLabel: group.label,
    styleLabel: personalityEngines[guide.personalityType].label,
  };
}

function getGuideStyleLabel(guide) {
  return personalityEngines[guide.personalityType]?.label || "Guide personality";
}

function pickPersonalityLine(guide, type) {
  const engine = personalityEngines[guide.personalityType] || personalityEngines.friendly;
  const profile = getGuideVisualProfile(guide);
  const list = engine[type] || engine.tip;
  const index = (state.points + type.length + guide.name.length) % list.length;
  const prefix = profile.callSign[type] || profile.callSign.tip || "";
  return prefix ? `${prefix} ${list[index]}` : list[index];
}

/* =========================
   State Persistence
   ========================= */
function persistableState() {
  return {
    age: state.age,
    guideId: state.guideId,
    screen: state.screen,
    hasEnteredPlatform: state.hasEnteredPlatform,
    points: state.points,
    coins: state.coins,
    completedShorts: state.completedShorts,
    answeredShorts: state.answeredShorts,
    scoredShorts: state.scoredShorts,
    likedShorts: state.likedShorts,
    completedLevels: state.completedLevels,
    unlockedBadges: state.unlockedBadges,
    favoriteGames: state.favoriteGames,
    currentShortIndex: state.currentShortIndex,
    currentLevelNumber: state.currentLevelNumber,
    currentLevelBand: state.currentLevelBand,
    dailyTasks: state.dailyTasks,
    voiceEnabled: state.voiceEnabled,
    assistantState: state.assistantState,
    games: state.games,
  };
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistableState()));
  } catch (error) {
    console.warn("Could not save app state.", error);
  }
}

function loadState() {
  let raw;

  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Could not read saved state.", error);
    return null;
  }

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.warn("Could not restore saved state.", error);
    return null;
  }
}

function hydrateState(saved) {
  const nextState = {
    ...createDefaultState(),
    ...(saved || {}),
  };

  nextState.completedShorts = Array.isArray(nextState.completedShorts) ? nextState.completedShorts : [];
  nextState.answeredShorts = nextState.answeredShorts && typeof nextState.answeredShorts === "object" ? nextState.answeredShorts : {};
  nextState.scoredShorts = Array.isArray(nextState.scoredShorts) ? nextState.scoredShorts : [];
  nextState.likedShorts = Array.isArray(nextState.likedShorts) ? nextState.likedShorts : [];
  nextState.completedLevels = Array.isArray(nextState.completedLevels) ? nextState.completedLevels : [];
  nextState.unlockedBadges = Array.isArray(nextState.unlockedBadges) ? nextState.unlockedBadges : [];
  nextState.favoriteGames = Array.isArray(nextState.favoriteGames) ? nextState.favoriteGames : [];
  nextState.coins = Number.isFinite(Number(nextState.coins)) ? Number(nextState.coins) : 0;
  nextState.dailyTasks =
    nextState.dailyTasks && typeof nextState.dailyTasks === "object"
      ? {
          date: typeof nextState.dailyTasks.date === "string" ? nextState.dailyTasks.date : "",
          tasks: Array.isArray(nextState.dailyTasks.tasks) ? nextState.dailyTasks.tasks : [],
        }
      : { date: "", tasks: [] };
  nextState.games =
    nextState.games && typeof nextState.games === "object"
      ? {
          ...createDefaultState().games,
          ...nextState.games,
          coloring:
            nextState.games.coloring && typeof nextState.games.coloring === "object"
              ? { ...createDefaultState().games.coloring, ...nextState.games.coloring }
              : { ...createDefaultState().games.coloring },
          cleanParkCollected: Array.isArray(nextState.games.cleanParkCollected) ? nextState.games.cleanParkCollected : [],
        }
      : { ...createDefaultState().games };

  Object.assign(state, nextState);

  if (saved && saved.guideId && !getGuideById(saved.guideId) && saved.guide && saved.guide.name) {
    const fallbackGuide = Object.values(guideGroups)
      .flatMap((group) => group.guides)
      .find((guide) => guide.name === saved.guide.name);

    state.guideId = fallbackGuide ? fallbackGuide.id : null;
  }
}

function shuffleList(items) {
  const nextItems = [...items];

  for (let index = nextItems.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [nextItems[index], nextItems[swapIndex]] = [nextItems[swapIndex], nextItems[index]];
  }

  return nextItems;
}

const SaveManager = {
  save() {
    saveState();
  },
  load() {
    return loadState();
  },
  hydrate(savedState) {
    hydrateState(savedState);
  },
};

const AudioManager = {
  context: null,
  ensureContext() {
    if (!state.hasInteracted) {
      return null;
    }

    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) {
      return null;
    }

    if (!this.context || this.context.state === "closed") {
      this.context = new Context();
    }

    if (this.context.state === "suspended") {
      this.context.resume().catch(() => {});
    }

    return this.context;
  },
  play(kind = "soft") {
    const context = this.ensureContext();
    if (!context) {
      return;
    }

    const profiles = {
      soft: { notes: [440], duration: 0.08, type: "sine", gain: 0.025 },
      match: { notes: [660, 880], duration: 0.09, type: "triangle", gain: 0.03 },
      wrong: { notes: [260, 210], duration: 0.1, type: "sawtooth", gain: 0.025 },
      success: { notes: [523, 659, 784], duration: 0.1, type: "triangle", gain: 0.035 },
      unlock: { notes: [523, 659, 784, 1046], duration: 0.11, type: "sine", gain: 0.04 },
    };
    const profile = profiles[kind] || profiles.soft;
    const now = context.currentTime;

    profile.notes.forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      const startAt = now + index * profile.duration * 0.7;

      oscillator.type = profile.type;
      oscillator.frequency.value = frequency;
      gainNode.gain.setValueAtTime(0.0001, startAt);
      gainNode.gain.exponentialRampToValueAtTime(profile.gain, startAt + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startAt + profile.duration);
      oscillator.connect(gainNode);
      gainNode.connect(context.destination);
      oscillator.start(startAt);
      oscillator.stop(startAt + profile.duration + 0.03);
    });
  },
};

const VoiceManager = {
  voices: [],
  initialized: false,
  init() {
    if (this.initialized || !("speechSynthesis" in window)) {
      return;
    }

    const loadVoices = () => {
      this.voices = window.speechSynthesis.getVoices().filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("en"));
    };

    loadVoices();
    if (typeof window.speechSynthesis.addEventListener === "function") {
      window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    } else {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    this.initialized = true;
  },
  getProfile(guide) {
    const speciesProfiles = {
      panda: { volume: 0.82, pitch: 1.02, rate: 0.92, keywords: ["samantha", "aria", "zira", "female", "soft"] },
      bunny: { volume: 0.88, pitch: 1.2, rate: 1.02, keywords: ["samantha", "zira", "ava", "female", "bright"] },
      puppy: { volume: 0.9, pitch: 1.14, rate: 1.04, keywords: ["junior", "zira", "friendly", "female"] },
      kitten: { volume: 0.86, pitch: 1.12, rate: 0.98, keywords: ["aria", "samantha", "warm", "female"] },
      fox: { volume: 0.9, pitch: 1.14, rate: 1.05, keywords: ["zira", "aria", "female", "playful"] },
      lion: { volume: 0.92, pitch: 0.95, rate: 0.98, keywords: ["david", "guy", "male", "confident"] },
      robot: { volume: 0.84, pitch: 0.78, rate: 0.9, keywords: ["david", "mark", "guy", "male"] },
      monkey: { volume: 0.9, pitch: 1.12, rate: 1.04, keywords: ["zira", "aria", "bright", "fun"] },
      explorer: { volume: 0.9, pitch: 0.98, rate: 0.97, keywords: ["guy", "jenny", "male", "female"] },
      hero: { volume: 0.9, pitch: 1.02, rate: 0.98, keywords: ["aria", "jenny", "female", "confident"] },
      tech: { volume: 0.88, pitch: 0.9, rate: 0.94, keywords: ["david", "guy", "male", "clear"] },
      mentor: { volume: 0.9, pitch: 0.88, rate: 0.92, keywords: ["guy", "davis", "male", "calm"] },
      leader: { volume: 0.92, pitch: 0.9, rate: 0.95, keywords: ["david", "guy", "confident", "male"] },
      creative: { volume: 0.9, pitch: 1, rate: 0.98, keywords: ["aria", "samantha", "female", "warm"] },
      default: { volume: 0.88, pitch: 1, rate: 0.98, keywords: ["en-us", "en-gb"] },
    };
    const base = speciesProfiles[guide?.species] || speciesProfiles.default;

    return {
      ...base,
      ...(guide?.voice || {}),
      keywords: [...(base.keywords || []), guide?.personalityType || "", guide?.species || ""].filter(Boolean),
    };
  },
  getBestVoice(guide) {
    this.init();

    if (!this.voices.length) {
      return null;
    }

    const profile = this.getProfile(guide);
    return this.voices
      .map((voice) => {
        const voiceText = `${voice.name} ${voice.lang}`.toLowerCase();
        let score = voice.lang.toLowerCase() === "en-us" ? 4 : voice.lang.toLowerCase().startsWith("en") ? 2 : 0;

        profile.keywords.forEach((keyword) => {
          if (voiceText.includes(String(keyword).toLowerCase())) {
            score += 3;
          }
        });

        return { voice, score };
      })
      .sort((left, right) => right.score - left.score)[0]?.voice || null;
  },
  speak(message, guide) {
    if (!state.voiceEnabled || !state.hasInteracted || !guide || !("speechSynthesis" in window)) {
      return;
    }

    stopSpeaking();
    this.init();

    const profile = this.getProfile(guide);
    const utterance = new SpeechSynthesisUtterance(message);
    const bestVoice = this.getBestVoice(guide);

    utterance.rate = profile.rate;
    utterance.pitch = profile.pitch;
    utterance.volume = profile.volume;
    utterance.lang = "en-US";

    if (bestVoice) {
      utterance.voice = bestVoice;
      utterance.lang = bestVoice.lang;
    }

    window.speechSynthesis.speak(utterance);
  },
};

const CharacterManager = {
  getCurrentGuide() {
    return getGuide();
  },
  getDialogue(guide, type) {
    return pickPersonalityLine(guide, type);
  },
  speak(message, options = {}) {
    guideSpeak(message, options);
  },
};

const AnimationManager = {
  celebrate(kind = "confetti") {
    triggerCelebration();
    AudioManager.play(kind === "soft" ? "soft" : kind === "confetti" ? "unlock" : "success");
  },
  pulseScene(tone = "soft") {
    triggerLevelSceneEffect(tone);
    AudioManager.play(tone === "warning" ? "wrong" : tone === "success" ? "success" : "soft");
  },
};

const MatchGameManager = {
  prepare(level) {
    if (simulationState.levelNumber !== level.number || simulationState.shuffledCards.length !== level.mission.cards.length) {
      simulationState.shuffledCards = shuffleList(level.mission.cards);
      simulationState.wrongCardIds = [];
    }

    return simulationState.shuffledCards;
  },
};

const PuzzleManager = {
  preparePairs(level) {
    if (simulationState.levelNumber !== level.number || simulationState.shuffledRightPairs.length !== level.mission.pairs.length) {
      simulationState.shuffledRightPairs = shuffleList(level.mission.pairs);
    }

    return simulationState.shuffledRightPairs;
  },
};

const RewardManager = {
  award(amount, reason, options = {}) {
    const coins = options.coins ?? Math.max(1, Math.round(amount / 6));
    awardPoints(amount, reason, { ...options, coins });
  },
  unlockBadge(badge) {
    if (!badge || state.unlockedBadges.includes(badge.id)) {
      return;
    }

    state.unlockedBadges.push(badge.id);
    renderBadges();
    refs.platformBadgeCount.textContent = String(state.unlockedBadges.length);
    showBadgeToast(badge.name);
    AnimationManager.celebrate("confetti");

    const guide = getGuide();
    if (guide) {
      guideSpeak(`${pickPersonalityLine(guide, "success")} Badge unlocked: ${badge.name}.`, {
        stateName: "happy",
        assistant: true,
        platform: state.screen === "platform",
      });
    }

    SaveManager.save();
  },
};

const GameManager = {
  resetLevelState(level) {
    resetSimulationState(level?.number || null);
  },
  loadLevel(level) {
    this.resetLevelState(level);
    this.renderLevel(level);
  },
  renderLevel(level) {
    if (level.mode === "drag-sort" || level.mode === "drag") {
      renderDragSimulation(level);
      return;
    }

    if (["decision-sim", "pattern", "difference", "choice", "visual-choice"].includes(level.mode)) {
      renderChoiceSimulation(level);
      return;
    }

    if (level.mode === "count") {
      renderCountSimulation(level);
      return;
    }

    if (level.mode === "match-pair" || level.mode === "memory-puzzle" || level.mode === "memory") {
      renderMemorySimulation(level);
      return;
    }

    if (level.mode === "relation" || level.mode === "match") {
      renderPairSimulation(level);
      return;
    }

    if (level.mode === "sequence") {
      renderSequenceSimulation(level);
      return;
    }

    if (level.mode === "jigsaw") {
      renderJigsawSimulation(level);
      return;
    }

    renderCompleteSimulation(level);
  },
};

/* =========================
   Voice System
   ========================= */
function updateVoiceUi() {
  refs.voiceToggle.classList.toggle("is-muted", !state.voiceEnabled);
  refs.voiceToggle.setAttribute("aria-pressed", String(state.voiceEnabled));
  refs.voiceToggleIcon.innerHTML = state.voiceEnabled ? "&#128266;" : "&#128263;";
  refs.voiceToggleLabel.textContent = state.voiceEnabled ? "Voice On" : "Voice Off";
}

function stopSpeaking() {
  window.clearTimeout(guideSpeak.resetTimer);
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function speakMessage(message) {
  const guide = getGuide();

  VoiceManager.speak(message, guide);
}

function toggleVoice() {
  state.voiceEnabled = !state.voiceEnabled;
  updateVoiceUi();
  saveState();

  if (!state.voiceEnabled) {
    stopSpeaking();
  } else if (getGuide()) {
    guideSpeak(pickPersonalityLine(getGuide(), "welcome"), { stateName: "talking", speak: true });
  }
}

/* =========================
   Character Rendering
   ========================= */
function renderCharacterMarkup(guide, size = "medium", stateName = "idle") {
  const emoji = decodeEntity(guide.avatar);
  const personalityLabel = guide.personalityType;
  const sizeClass = size === "large" ? "" : size;
  const profile = getGuideVisualProfile(guide);

  return `
    <div class="character-shell ${sizeClass} state-${stateName} shape-${profile.shape}" style="--guide-start:${guide.theme[0]}; --guide-end:${guide.theme[1]}">
      <span class="character-halo"></span>
      <span class="character-sidekick">${profile.sidekick}</span>
      <div class="character-body-wrap">
        <span class="character-shadow"></span>
        <span class="character-cape"></span>
        <span class="character-leg left"></span>
        <span class="character-leg right"></span>
        <span class="character-shoe left"></span>
        <span class="character-shoe right"></span>
        <span class="character-arm left"></span>
        <span class="character-arm right"></span>
        <div class="character-torso">
          <span class="character-crest">${profile.crest}</span>
          <span class="character-badge">${guide.tag}</span>
        </div>
        <div class="character-head">
          <div class="character-ears">
            <span class="character-ear left"></span>
            <span class="character-ear right"></span>
          </div>
          <span class="character-face">${emoji}</span>
          <span class="character-mouth"></span>
        </div>
      </div>
      <div class="character-orbit">
        <span class="character-orbit-dot one"></span>
        <span class="character-orbit-dot two"></span>
        <span class="character-orbit-dot three"></span>
      </div>
      <span class="character-personality">${personalityLabel}</span>
    </div>
  `;
}

function renderGuideSurfaces() {
  const guide = getGuide();

  if (!guide) {
    return;
  }

  const currentState = state.assistantState || "idle";
  refs.revealAvatar.innerHTML = renderCharacterMarkup(guide, "large", currentState);
  refs.platformGuideAvatar.innerHTML = renderCharacterMarkup(guide, "medium", currentState);
  refs.narratorGuideStage.innerHTML = renderCharacterMarkup(guide, "medium", currentState);
  refs.dashboardGuideAvatar.innerHTML = renderCharacterMarkup(guide, "medium", currentState);
  refs.assistantAvatar.innerHTML = renderCharacterMarkup(guide, "small", currentState);
}

function setAssistantState(stateName) {
  state.assistantState = stateName;
  refs.assistantState.textContent = `State: ${stateName.charAt(0).toUpperCase()}${stateName.slice(1)}`;
  renderGuideSurfaces();
}

function guideSpeak(message, options = {}) {
  const guide = getGuide();
  const settings = {
    stateName: "talking",
    speak: true,
    assistant: true,
    narrator: false,
    level: false,
    platform: false,
    ...options,
  };

  if (!guide) {
    return;
  }

  if (settings.assistant) {
    refs.assistantMessage.textContent = message;
  }

  if (settings.narrator) {
    refs.narratorText.textContent = message;
  }

  if (settings.level) {
    refs.levelOverviewGuide.textContent = message;
  }

  if (settings.platform) {
    refs.platformDialogue.textContent = message;
  }

  setAssistantState(settings.stateName);

  if (settings.speak) {
    speakMessage(message);
  }

  if (settings.stateName !== "idle") {
    window.clearTimeout(guideSpeak.resetTimer);
    guideSpeak.resetTimer = window.setTimeout(() => {
      setAssistantState("idle");
    }, 1800);
  }

  saveState();
}

function syncAssistantVisibility() {
  const showAssistant = Boolean(getGuide()) && state.screen !== "welcome";
  refs.assistant.hidden = !showAssistant;
  refs.assistant.classList.toggle("visible", showAssistant);
}

function showLessonPopup(title, copy) {
  refs.lessonPopupTitle.textContent = title;
  refs.lessonPopupCopy.textContent = copy;
  refs.lessonPopup.hidden = false;
  refs.lessonPopup.classList.add("visible");
  window.clearTimeout(showLessonPopup.timer);
  showLessonPopup.timer = window.setTimeout(() => {
    hideLessonPopup();
  }, 3200);
}

function hideLessonPopup() {
  refs.lessonPopup.classList.remove("visible");
  window.clearTimeout(showLessonPopup.timer);
  window.setTimeout(() => {
    refs.lessonPopup.hidden = true;
  }, 220);
}

/* =========================
   Celebration and Feedback
   ========================= */
function buildCelebrationPieces() {
  const palette = ["#ffd86c", "#7fe3ff", "#ff86b0", "#88ffbf", "#8d7fff"];

  refs.celebrationLayer.innerHTML = Array.from({ length: 30 }, (_, index) => {
    const left = 4 + Math.random() * 92;
    const delay = (index % 7) * 0.04;
    const drift = `${Math.round((Math.random() - 0.5) * 220)}px`;
    const rotate = `${Math.round(Math.random() * 120)}deg`;
    const color = palette[index % palette.length];

    return `
      <span
        class="celebration-piece"
        style="left:${left}%; background:${color}; animation-delay:${delay}s; --drift:${drift}; transform:rotate(${rotate});"
      ></span>
    `;
  }).join("");
}

function triggerCelebration() {
  refs.celebrationLayer.classList.remove("is-active");
  window.requestAnimationFrame(() => {
    refs.celebrationLayer.classList.add("is-active");
  });

  window.setTimeout(() => {
    refs.celebrationLayer.classList.remove("is-active");
  }, 2800);
}

function showBadgeToast(name) {
  refs.unlockBadgeCopy.textContent = name;
  refs.unlockBadge.hidden = false;
  refs.unlockBadge.classList.add("visible");

  window.setTimeout(() => {
    refs.unlockBadge.classList.remove("visible");
    window.setTimeout(() => {
      refs.unlockBadge.hidden = true;
    }, 260);
  }, 2200);
}

function awardPoints(amount, reason, options = {}) {
  const coins = options.coins ?? Math.max(1, Math.round(amount / 6));
  state.points += amount;
  state.coins += coins;
  updateTopbar();
  updateDashboard();
  updateGamesScreen();
  saveState();
  AnimationManager.celebrate(options.celebration === "sparkle" ? "soft" : "confetti");

  const guide = getGuide();
  if (guide) {
    const message = `${pickPersonalityLine(guide, "success")} +${amount} points and +${coins} coins. ${reason}`;
    guideSpeak(message, { stateName: "happy", assistant: true, platform: state.screen === "platform" });
  }

  checkBadges();
}

/* =========================
   Badges
   ========================= */
function checkBadges() {
  const snapshot = { ...state };
  const allBadges = [...badgeCatalog, ...LevelManager.getBadges()];

  allBadges.forEach((badge) => {
    if (state.unlockedBadges.includes(badge.id)) {
      return;
    }

    if (badge.unlocked(snapshot)) {
      state.unlockedBadges.push(badge.id);
      renderBadges();
      refs.platformBadgeCount.textContent = String(state.unlockedBadges.length);
      showBadgeToast(badge.name);
      AnimationManager.celebrate("confetti");

      const guide = getGuide();
      if (guide) {
        guideSpeak(`${pickPersonalityLine(guide, "success")} Badge unlocked: ${badge.name}.`, {
          stateName: "happy",
          assistant: true,
          platform: state.screen === "platform",
        });
      }
    }
  });

  saveState();
}

function renderBadges() {
  refs.badgeList.innerHTML = [...badgeCatalog, ...LevelManager.getBadges()]
    .map((badge) => {
      const unlocked = state.unlockedBadges.includes(badge.id);

      return `
        <div class="badge-item ${unlocked ? "unlocked" : "locked"}">
          <span class="badge-icon">${badge.icon}</span>
          <div class="badge-meta">
            <strong>${badge.name}</strong>
            <span>${badge.description}</span>
          </div>
        </div>
      `;
    })
    .join("");
}

/* =========================
   Daily Tasks
   ========================= */
function taskSeedFromDate(dateKey) {
  return dateKey.split("").reduce((total, char) => total + char.charCodeAt(0), 0);
}

function ensureDailyTasks() {
  const today = getTodayKey();

  if (state.dailyTasks.date === today && Array.isArray(state.dailyTasks.tasks) && state.dailyTasks.tasks.length) {
    return;
  }

  const seed = taskSeedFromDate(today) + (state.age || 0);
  const tasks = [];

  for (let index = 0; index < 3; index += 1) {
    const task = dailyTaskPool[(seed + index * 2) % dailyTaskPool.length];
    tasks.push({
      id: `${today}-${task.id}`,
      title: task.title,
      description: task.description,
      points: task.points,
      completed: false,
    });
  }

  state.dailyTasks = { date: today, tasks };
}

function renderDailyTasks() {
  ensureDailyTasks();

  refs.dailyTaskList.innerHTML = state.dailyTasks.tasks
    .map(
      (task) => `
        <div class="daily-task-item ${task.completed ? "completed" : ""}">
          <div class="daily-task-copy">
            <strong>${task.title}</strong>
            <span>${task.description}</span>
          </div>
          <div>
            <div class="task-points">+${task.points}</div>
            <button class="daily-complete-button" type="button" data-task-id="${task.id}" ${task.completed ? "disabled" : ""}>
              ${task.completed ? "Done" : "Complete"}
            </button>
          </div>
        </div>
      `
    )
    .join("");

  refs.dailyTaskList.querySelectorAll("[data-task-id]").forEach((button) => {
    button.addEventListener("click", () => {
      completeDailyTask(button.dataset.taskId);
    });
  });
}

function completeDailyTask(taskId) {
  const task = state.dailyTasks.tasks.find((item) => item.id === taskId);

  if (!task || task.completed) {
    return;
  }

  task.completed = true;
  renderDailyTasks();
  updateTopbar();
  updateDashboard();
  awardPoints(task.points, "Daily kindness task complete.");

  const guide = getGuide();
  if (guide) {
    guideSpeak(`${pickPersonalityLine(guide, "daily")} ${task.title} is complete.`, {
      stateName: "happy",
      assistant: true,
      platform: state.screen === "platform",
    });
  }

  saveState();
}

/* =========================
   Age Selection and Reveal
   ========================= */
function buildAgeButtons() {
  const ages = Array.from({ length: 13 }, (_, index) => index + 4);

  refs.ageGrid.innerHTML = ages
    .map((age, index) => {
      const [startColor, endColor] = ageButtonThemes[index];
      return `
        <button class="age-button" type="button" data-age="${age}" style="--button-start:${startColor}; --button-end:${endColor};">
          <span class="age-number">${age}</span>
          <span class="age-caption">years old</span>
        </button>
      `;
    })
    .join("");

  refs.ageGrid.querySelectorAll(".age-button").forEach((button) => {
    button.addEventListener("click", () => {
      selectAge(Number(button.dataset.age));
    });
  });
}

function updateAgeSelectionUi() {
  refs.ageGrid.querySelectorAll(".age-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.age) === state.age);
  });

  if (!state.age) {
    refs.selectedAgeLabel.textContent = "Pick an age to continue";
    refs.ageGroupLabel.textContent = "Guide group waiting...";
    refs.agePanelStatus.textContent = "Waiting for selection";
    refs.revealGuideButton.disabled = true;
    return;
  }

  const group = getGuideGroupForAge(state.age);
  const levelBand = getLevelBandForAge(state.age);
  refs.selectedAgeLabel.textContent = `${state.age} years old`;
  refs.ageGroupLabel.textContent = `${group.label} | ${levelBand.label}`;
  refs.agePanelStatus.textContent = "Ready to reveal";
  refs.revealGuideButton.disabled = false;
}

function selectAge(age) {
  if (state.age !== age) {
    state.dailyTasks = { date: "", tasks: [] };
    state.currentShortIndex = 0;
    state.games = createDefaultState().games;
  }

  state.age = age;
  state.guideId = null;
  state.currentLevelNumber = getLevelBandForAge(age).min;
  state.currentLevelBand = getLevelBandForAge(age).key;
  updateAgeSelectionUi();
  updateTopbar();
  saveState();
}

function updateRevealScreen() {
  const guide = getGuide();

  if (!guide || !state.age) {
    return;
  }

  const group = getGuideGroupForAge(state.age);
  const levelBand = getLevelBandForAge(state.age);
  const profile = getGuideVisualProfile(guide);
  refs.revealAgeChip.textContent = `${group.ageText} | ${levelBand.label}`;
  refs.revealAvatar.innerHTML = renderCharacterMarkup(guide, "large", state.assistantState);
  refs.revealName.textContent = `${guide.name} ${decodeEntity(guide.avatar)}`;
  refs.revealIntro.textContent = guide.intro;
  refs.revealPersonality.textContent = `${guide.name} is ${guide.personality} and specializes in ${profile.focus}.`;
  refs.revealStyle.textContent = `Dialogue style: ${getGuideStyleLabel(guide)} | ${profile.callSign.tip}`;
}

function revealGuide() {
  if (!state.age) {
    return;
  }

  const chosenGuide = pickRandomGuide(state.age);
  state.guideId = chosenGuide.id;
  state.currentLevelBand = getLevelBandForAge(state.age).key;
  state.currentLevelNumber = getLevelBandForAge(state.age).min;
  updateRevealScreen();
  renderGuideSurfaces();
  showScreen("reveal");
  guideSpeak(`${chosenGuide.intro} ${pickPersonalityLine(chosenGuide, "welcome")}`, {
    stateName: "talking",
    assistant: true,
  });
  checkBadges();
  triggerCelebration();
}

function enterPlatform() {
  const guide = getGuide();

  if (!guide) {
    return;
  }

  state.hasEnteredPlatform = true;
  ensureDailyTasks();
  renderDailyTasks();
  renderLevels();
  updatePlatformScreen();
  updateDashboard();
  updateNavigation();
  showScreen("platform");
  guideSpeak(pickPersonalityLine(guide, "welcome"), {
    stateName: "talking",
    assistant: true,
    platform: true,
  });
  saveState();
}

/* =========================
   Topbar, Navigation, and Screens
   ========================= */
function updateTopbar() {
  refs.pointsCount.textContent = String(state.points);
  refs.coinsCount.textContent = String(state.coins);
  refs.activityCount.textContent = String(getActivityCount());
  refs.currentLevelIndicator.textContent = `Level ${state.currentLevelNumber || getUnlockedLevelNumber()}`;
}

function updateNavigation() {
  refs.bottomNav.hidden = !state.hasEnteredPlatform;

  refs.navItems.forEach((item) => {
    const target = item.dataset.nav;
    const active =
      (target === "home" && ["platform", "dashboard"].includes(state.screen)) ||
      (target === "games" && ["games", "levels"].includes(state.screen)) ||
      (target === "shorts" && state.screen === "shorts");

    item.classList.toggle("active", active);
  });
}

function getRequestedScreenFromUrl() {
  try {
    return new URLSearchParams(window.location.search).get("screen");
  } catch (error) {
    return null;
  }
}

function syncRouteForScreen(screenName) {
  if (!window.history?.replaceState || window.location.protocol === "file:") {
    return;
  }

  const nextUrl = new URL(window.location.href);

  if (screenName && screenName !== "welcome") {
    nextUrl.searchParams.set("screen", screenName);
  } else {
    nextUrl.searchParams.delete("screen");
  }

  window.history.replaceState({ screen: screenName }, "", nextUrl);
}

function openRequestedScreen(screenName) {
  if (!screenName) {
    return false;
  }

  if (screenName === "welcome") {
    showScreen("welcome", { syncRoute: false });
    return true;
  }

  if (screenName === "age") {
    showScreen("age", { syncRoute: false });
    return true;
  }

  if (screenName === "reveal" && getGuide()) {
    showScreen("reveal", { syncRoute: false });
    return true;
  }

  if (!state.hasEnteredPlatform) {
    return false;
  }

  if (screenName === "platform") {
    updatePlatformScreen();
    showScreen("platform", { syncRoute: false });
    return true;
  }

  if (screenName === "games") {
    navigateTo("games");
    return true;
  }

  if (screenName === "shorts") {
    navigateTo("shorts");
    return true;
  }

  if (screenName === "levels") {
    navigateTo("levels");
    return true;
  }

  if (screenName === "dashboard") {
    navigateTo("dashboard");
    return true;
  }

  return false;
}

function showScreen(screenName, options = {}) {
  const settings = {
    syncRoute: true,
    ...options,
  };

  state.screen = screenName;

  refs.screens.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === screenName);
  });

  updateNavigation();
  syncAssistantVisibility();
  window.scrollTo({
    top: 0,
    behavior: state.hasInteracted ? "smooth" : "auto",
  });

  if (settings.syncRoute) {
    syncRouteForScreen(screenName);
  }

  saveState();
}

/* =========================
   Home and Dashboard
   ========================= */
function updatePlatformScreen() {
  const guide = getGuide();

  if (!guide || !state.age) {
    return;
  }

  const band = getLevelBandForAge(state.age);
  refs.platformGuideAvatar.innerHTML = renderCharacterMarkup(guide, "medium", state.assistantState);
  refs.platformTitle.textContent = `Welcome, ${guide.name} is with you`;
  refs.platformSubtitle.textContent = `${guide.personality} | ${band.label}`;
  refs.platformDialogue.textContent = pickPersonalityLine(guide, "tip");
  refs.platformAge.textContent = String(state.age);
  refs.platformGuideName.textContent = guide.name;
  refs.platformBadgeCount.textContent = String(state.unlockedBadges.length);
  refs.platformLevelWindow.textContent = `Level ${getUnlockedLevelNumber()}`;
}

function updateDashboard() {
  const guide = getGuide();
  const dailyCompleted = getCompletedDailyCount(state.dailyTasks);

  refs.dashboardGuideAvatar.innerHTML = guide ? renderCharacterMarkup(guide, "medium", state.assistantState) : "";
  refs.dashboardGuideName.textContent = guide ? guide.name : "Guide not selected";
  refs.dashboardAge.textContent = state.age ? String(state.age) : "--";
  refs.dashboardPersonality.textContent = guide ? getGuideStyleLabel(guide) : "--";
  refs.dashboardCoins.textContent = String(state.coins);
  refs.dashboardFavorites.textContent = String(state.favoriteGames.length);
  refs.dashboardShorts.textContent = `${state.completedShorts.length} / ${shorts.length}`;
  refs.dashboardShortsFill.style.width = `${(state.completedShorts.length / shorts.length) * 100}%`;
  refs.dashboardLevels.textContent = `${state.completedLevels.length} / ${levelCatalog.length}`;
  refs.dashboardLevelsFill.style.width = `${(state.completedLevels.length / levelCatalog.length) * 100}%`;
  refs.dashboardPointsProgress.textContent = `${state.points} / 300`;
  refs.dashboardPointsFill.style.width = `${Math.min(100, (state.points / 300) * 100)}%`;
  refs.dashboardDaily.textContent = `${dailyCompleted} / 3`;
  refs.dashboardDailyFill.style.width = `${(dailyCompleted / 3) * 100}%`;
  renderBadges();
}

/* =========================
   Games Section
   ========================= */
function updateGamesScreen() {
  const guide = getGuide();

  refs.gamesPoints.textContent = String(state.points);
  refs.gamesCompleteCount.textContent = String(getCompletedGameCount());
  refs.gamesColorCount.textContent = String(getColoredShapeCount());
  refs.selectedFillLabel.textContent = `Selected: ${fillColorLabels[state.games.selectedFillColor] || "Color"}`;

  document.querySelectorAll("[data-draw-color]").forEach((button) => {
    button.classList.toggle("active", button.dataset.drawColor === state.games.selectedDrawColor);
  });

  document.querySelectorAll("[data-fill-color]").forEach((button) => {
    button.classList.toggle("active", button.dataset.fillColor === state.games.selectedFillColor);
  });

  refs.gamesGuideMessage.textContent = guide
    ? `${pickPersonalityLine(guide, "tip")} Try drawing, coloring, or one of the kindness games.`
    : "Choose a game to start practicing kindness.";

  renderColoringBoard();
  renderParkGame();
  renderHelpFriendGame();
}

function setupDrawingCanvas() {
  const canvas = refs.drawingCanvas;

  if (!canvas) {
    return;
  }

  const width = Math.max(320, Math.floor(canvas.clientWidth || 640));
  const height = Math.max(280, Math.floor((canvas.clientWidth || 640) * 0.62));
  const dpr = window.devicePixelRatio || 1;
  const context = canvas.getContext("2d");

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);

  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineWidth = 9;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "rgba(255, 255, 255, 0.98)";
  context.fillRect(0, 0, width, height);

  drawingState.context = context;
  drawingState.isDrawing = false;
}

function clearDrawingCanvas() {
  setupDrawingCanvas();
  refs.gamesGuideMessage.textContent = "Fresh canvas ready. Draw a kind message or a happy helpful scene.";
}

function getCanvasPoint(event) {
  const rect = refs.drawingCanvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function startDrawing(event) {
  if (!drawingState.context) {
    setupDrawingCanvas();
  }

  event.preventDefault();
  state.hasInteracted = true;
  drawingState.isDrawing = true;
  const point = getCanvasPoint(event);

  drawingState.lastX = point.x;
  drawingState.lastY = point.y;
  drawingState.context.beginPath();
  drawingState.context.moveTo(point.x, point.y);
  drawingState.context.strokeStyle = state.games.selectedDrawColor;

  if (!state.games.drawingCelebrated) {
    state.games.drawingCelebrated = true;
    showLessonPopup("Creative kindness", "Sharing makes everyone happy.");

    const guide = getGuide();
    if (guide) {
      guideSpeak("Kind art can brighten someone's whole day.", {
        stateName: "happy",
        assistant: true,
        speak: false,
      });
    }

    saveState();
  }
}

function drawOnCanvas(event) {
  if (!drawingState.isDrawing || !drawingState.context) {
    return;
  }

  const point = getCanvasPoint(event);

  drawingState.context.strokeStyle = state.games.selectedDrawColor;
  drawingState.context.lineTo(point.x, point.y);
  drawingState.context.stroke();
  drawingState.context.beginPath();
  drawingState.context.moveTo(point.x, point.y);
  drawingState.lastX = point.x;
  drawingState.lastY = point.y;
}

function stopDrawing() {
  if (!drawingState.context) {
    return;
  }

  drawingState.isDrawing = false;
  drawingState.context.beginPath();
}

function selectDrawColor(color) {
  state.games.selectedDrawColor = color;
  updateGamesScreen();
  saveState();
}

function selectFillColor(color) {
  state.games.selectedFillColor = color;
  updateGamesScreen();
  saveState();
}

function renderColoringBoard() {
  refs.coloringBoard.querySelectorAll("[data-color-target]").forEach((shape) => {
    const target = shape.dataset.colorTarget;
    shape.setAttribute("fill", state.games.coloring[target] || "rgba(255, 255, 255, 0.96)");
  });
}

function colorShape(target) {
  state.games.coloring[target] = state.games.selectedFillColor;
  refs.coloringFeedback.textContent = `${target.charAt(0).toUpperCase()}${target.slice(1)} filled with ${fillColorLabels[state.games.selectedFillColor] || "color"}.`;
  renderColoringBoard();

  if (getColoredShapeCount() === 3 && !state.games.coloringRewarded) {
    state.games.coloringRewarded = true;
    awardPoints(10, "You completed the coloring game.");
    showLessonPopup("Color complete", "Sharing makes everyone happy.");
  } else {
    saveState();
    updateGamesScreen();
  }
}

function renderParkGame() {
  const collected = new Set(state.games.cleanParkCollected);

  refs.parkTrashBank.innerHTML = parkTrashItems
    .map((item) => {
      const isCollected = collected.has(item.id);

      return `
        <button class="trash-item ${isCollected ? "collected" : ""}" type="button" draggable="${isCollected ? "false" : "true"}" data-trash-id="${item.id}" ${isCollected ? "disabled" : ""}>
          <span class="trash-item-icon">${item.icon}</span>
          <span>${item.label}</span>
        </button>
      `;
    })
    .join("");

  refs.parkFeedback.textContent = state.games.cleanParkDone
    ? "Great job! The park is sparkling clean."
    : `${state.games.cleanParkCollected.length} of ${parkTrashItems.length} items cleaned.`;

  refs.parkTrashBank.querySelectorAll("[data-trash-id]").forEach((button) => {
    button.addEventListener("click", () => {
      collectParkTrash(button.dataset.trashId);
    });

    button.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", button.dataset.trashId);
      button.classList.add("dragging");
    });

    button.addEventListener("dragend", () => {
      button.classList.remove("dragging");
      refs.parkBin.classList.remove("active-drop");
    });
  });
}

function collectParkTrash(itemId) {
  if (!itemId || state.games.cleanParkCollected.includes(itemId)) {
    return;
  }

  state.games.cleanParkCollected.push(itemId);
  renderParkGame();

  if (state.games.cleanParkCollected.length === parkTrashItems.length && !state.games.cleanParkDone) {
    state.games.cleanParkDone = true;
    refs.parkFeedback.textContent = "Great job! The park is clean and safe for everyone.";
    awardPoints(10, "You cleaned the park.");
    showLessonPopup("Great job!", "Keep your surroundings clean.");
  } else {
    saveState();
    updateGamesScreen();
  }
}

function renderHelpFriendGame() {
  const choice = state.games.helpFriendChoice;

  document.querySelectorAll("[data-help-choice]").forEach((button) => {
    button.classList.remove("is-correct", "is-wrong");

    if (choice && button.dataset.helpChoice === choice) {
      button.classList.add(helpFriendChoices[choice].correct ? "is-correct" : "is-wrong");
    }
  });

  refs.friendFeedback.textContent = choice
    ? helpFriendChoices[choice].feedback
    : "Choose the action that shows kindness and respect.";
}

function handleHelpFriendChoice(choice) {
  const result = helpFriendChoices[choice];
  const guide = getGuide();

  state.games.helpFriendChoice = choice;
  renderHelpFriendGame();
  showLessonPopup(result.correct ? "Kind choice" : "Try a kinder choice", result.lesson);

  if (result.correct && !state.games.helpFriendRewarded) {
    state.games.helpFriendRewarded = true;
    awardPoints(10, "You chose to help a friend.");
  } else {
    if (guide) {
      guideSpeak(result.feedback, {
        stateName: result.correct ? "happy" : "thinking",
        assistant: true,
        speak: false,
      });
    }

    saveState();
    updateGamesScreen();
    updateTopbar();
    updateDashboard();
  }
}

/* =========================
   Shorts Feed
   ========================= */
function renderShortCard(shortItem) {
  const decisionBlock = shortItem.question
    ? `
        <div class="decision-block">
          <div class="decision-title">${shortItem.question.prompt}</div>
          <div class="choice-row">
            <button class="choice-button" type="button" data-short-id="${shortItem.id}" data-choice="Help">Help</button>
            <button class="choice-button" type="button" data-short-id="${shortItem.id}" data-choice="Ignore">Ignore</button>
            <button class="choice-button" type="button" data-short-id="${shortItem.id}" data-choice="Ask teacher">Ask teacher</button>
          </div>
          <div class="choice-feedback" data-feedback="${shortItem.id}"></div>
        </div>
      `
    : "";

  return `
    <article class="short-card" data-short-id="${shortItem.id}" style="--short-start:${shortItem.colors[0]}; --short-end:${shortItem.colors[1]};">
      <div class="short-visual">
        <span class="short-visual-chip one">${shortItem.chipOne}</span>
        <span class="short-visual-chip two">${shortItem.chipTwo}</span>
        <span class="short-visual-face">${shortItem.visual}</span>
      </div>
      <div class="short-content">
        <span class="short-tag">${shortItem.label}</span>
        <h3>${shortItem.title}</h3>
        <p class="short-scenario">${shortItem.scenario}</p>
        <p class="short-message">${shortItem.message}</p>
        ${decisionBlock}
      </div>
    </article>
  `;
}

function renderShorts() {
  refs.shortsTrack.innerHTML = shorts.map(renderShortCard).join("");
  bindShortDecisionButtons();
  restoreShortAnswers();
  updateShortLayout();
}

function bindShortDecisionButtons() {
  refs.shortsTrack.querySelectorAll(".choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      handleShortDecision(button);
    });
  });
}

function restoreShortAnswers() {
  Object.entries(state.answeredShorts).forEach(([shortId, answer]) => {
    const shortItem = shorts.find((item) => item.id === shortId);
    const feedback = refs.shortsTrack.querySelector(`[data-feedback="${shortId}"]`);
    const buttons = refs.shortsTrack.querySelectorAll(`[data-short-id="${shortId}"]`);

    if (!shortItem || !feedback) {
      return;
    }

    buttons.forEach((button) => {
      button.classList.remove("is-correct", "is-wrong");

      if (button.dataset.choice === answer.choice) {
        button.classList.add(answer.correct ? "is-correct" : "is-wrong");
      }
    });

    feedback.textContent = shortItem.question.feedback[answer.choice];
  });
}

function updateShortLayout() {
  const viewportHeight = refs.shortsViewport.clientHeight;

  if (!viewportHeight) {
    return;
  }

  refs.shortsTrack.style.height = `${viewportHeight * shorts.length}px`;
  refs.shortsTrack.querySelectorAll(".short-card").forEach((card) => {
    card.style.height = `${viewportHeight}px`;
  });
  refs.shortsTrack.style.transform = `translateY(-${state.currentShortIndex * viewportHeight}px)`;
}

function updateShortUi() {
  const currentShort = shorts[state.currentShortIndex];

  if (!currentShort) {
    return;
  }

  refs.shortProgressText.textContent = `${state.currentShortIndex + 1} / ${shorts.length}`;
  refs.shortProgressFill.style.width = `${((state.currentShortIndex + 1) / shorts.length) * 100}%`;
  refs.likeButton.classList.toggle("is-liked", state.likedShorts.includes(currentShort.id));
}

function markShortComplete(shortId, reward = 0) {
  if (!state.completedShorts.includes(shortId)) {
    state.completedShorts.push(shortId);

    if (reward > 0) {
      awardPoints(reward, "You completed a kindness short.");
    } else {
      updateTopbar();
      updateDashboard();
      saveState();
      checkBadges();
    }
  }
}

function showShort(index, options = {}) {
  const nextIndex = Math.max(0, Math.min(index, shorts.length - 1));
  const shortItem = shorts[nextIndex];
  const guide = getGuide();
  const viewportHeight = refs.shortsViewport.clientHeight;
  const settings = {
    award: true,
    speak: true,
    ...options,
  };

  state.currentShortIndex = nextIndex;

  if (viewportHeight) {
    refs.shortsTrack.style.transform = `translateY(-${nextIndex * viewportHeight}px)`;
  }

  updateShortUi();

  if (!shortItem.question && settings.award) {
    markShortComplete(shortItem.id, 6);
  }

  if (guide) {
    guideSpeak(`${shortItem.narration} ${pickPersonalityLine(guide, "tip")}`, {
      stateName: shortItem.question ? "thinking" : "talking",
      assistant: true,
      narrator: true,
      speak: settings.speak,
    });
  } else {
    refs.narratorText.textContent = shortItem.narration;
  }

  saveState();
}

function moveShort(direction) {
  const nextIndex = state.currentShortIndex + direction;

  if (nextIndex < 0 || nextIndex >= shorts.length) {
    return;
  }

  showShort(nextIndex);
}

function toggleLikeCurrentShort() {
  const shortId = shorts[state.currentShortIndex].id;
  const existingIndex = state.likedShorts.indexOf(shortId);

  if (existingIndex >= 0) {
    state.likedShorts.splice(existingIndex, 1);
  } else {
    state.likedShorts.push(shortId);
    const guide = getGuide();
    if (guide) {
      guideSpeak(`${pickPersonalityLine(guide, "success")} You saved this short as a favorite.`, {
        stateName: "happy",
        assistant: true,
        narrator: true,
      });
    }
  }

  updateShortUi();
  saveState();
}

function handleShortDecision(button) {
  const shortId = button.dataset.shortId;
  const choice = button.dataset.choice;
  const shortItem = shorts.find((item) => item.id === shortId);
  const isCorrect = shortItem.question.correct === choice;
  const feedbackText = shortItem.question.feedback[choice];
  const feedback = refs.shortsTrack.querySelector(`[data-feedback="${shortId}"]`);
  const buttons = refs.shortsTrack.querySelectorAll(`[data-short-id="${shortId}"]`);
  const guide = getGuide();

  buttons.forEach((item) => {
    item.classList.remove("is-correct", "is-wrong");
    if (item === button) {
      item.classList.add(isCorrect ? "is-correct" : "is-wrong");
    }
  });

  feedback.textContent = feedbackText;
  state.answeredShorts[shortId] = { choice, correct: isCorrect };
  markShortComplete(shortId);

  if (isCorrect && !state.scoredShorts.includes(shortId)) {
    state.scoredShorts.push(shortId);
    awardPoints(10, "You chose a kind response.");
  } else if (guide) {
    guideSpeak(`${isCorrect ? pickPersonalityLine(guide, "success") : pickPersonalityLine(guide, "retry")} ${feedbackText}`, {
      stateName: isCorrect ? "happy" : "thinking",
      assistant: true,
      narrator: true,
    });
    updateTopbar();
    updateDashboard();
    saveState();
    checkBadges();
  }
}

function getModeLabel(mode) {
  return levelModeLabels[mode] || "Kindness Mission";
}

function renderLevelScene(level) {
  if (!level || !level.scene) {
    refs.levelSceneCard.classList.remove("effect-soft", "effect-success", "effect-warning");
    refs.levelSceneSparkles.innerHTML = "";
    refs.levelSceneKicker.textContent = "Scene Preview";
    refs.levelSceneTitle.textContent = "Kindness world";
    refs.levelSceneArt.innerHTML = "";
    refs.levelSceneBackdrop.style.setProperty("--scene-start", "#7a57ff");
    refs.levelSceneBackdrop.style.setProperty("--scene-end", "#68d1ff");
    return;
  }

  refs.levelSceneKicker.textContent = level.scene.label;
  refs.levelSceneTitle.textContent = level.scene.place;
  refs.levelSceneBackdrop.style.setProperty("--scene-start", level.scene.colors[0]);
  refs.levelSceneBackdrop.style.setProperty("--scene-end", level.scene.colors[1]);
  refs.levelSceneArt.innerHTML = level.scene.art
    .map(
      (token, index) => `
        <span class="scene-art-token token-${index + 1}">${token}</span>
      `
    )
    .join("");
}

function triggerLevelSceneEffect(tone = "soft") {
  refs.levelSceneCard.classList.remove("effect-soft", "effect-success", "effect-warning");
  refs.levelSceneSparkles.innerHTML = Array.from({ length: 8 }, (_, index) => {
    const left = 8 + Math.random() * 84;
    const top = 10 + Math.random() * 68;
    const delay = index * 0.04;
    const icon = tone === "warning" ? "&#9889;" : "&#10024;";

    return `<span class="scene-sparkle ${tone}" style="left:${left}%; top:${top}%; animation-delay:${delay}s;">${icon}</span>`;
  }).join("");

  refs.levelSceneCard.classList.add(`effect-${tone}`);
  window.clearTimeout(triggerLevelSceneEffect.timer);
  triggerLevelSceneEffect.timer = window.setTimeout(() => {
    refs.levelSceneCard.classList.remove("effect-soft", "effect-success", "effect-warning");
    refs.levelSceneSparkles.innerHTML = "";
  }, 980);
}

function updateFavoriteGameButton(level) {
  if (!refs.favoriteGameButton) {
    return;
  }

  if (!level) {
    refs.favoriteGameButton.disabled = true;
    refs.favoriteGameButton.setAttribute("aria-pressed", "false");
    refs.favoriteGameIcon.innerHTML = "&#9825;";
    refs.favoriteGameLabel.textContent = "Save Game";
    return;
  }

  const isFavorite = state.favoriteGames.includes(level.id);
  refs.favoriteGameButton.disabled = false;
  refs.favoriteGameButton.classList.toggle("active", isFavorite);
  refs.favoriteGameButton.setAttribute("aria-pressed", String(isFavorite));
  refs.favoriteGameIcon.innerHTML = isFavorite ? "&#10084;" : "&#9825;";
  refs.favoriteGameLabel.textContent = isFavorite ? "Saved Game" : "Save Game";
}

function toggleFavoriteCurrentGame() {
  const level = getLevelByNumber(state.currentLevelNumber);

  if (!level) {
    return;
  }

  const favoriteIndex = state.favoriteGames.indexOf(level.id);
  if (favoriteIndex >= 0) {
    state.favoriteGames.splice(favoriteIndex, 1);
  } else {
    state.favoriteGames.push(level.id);
    const guide = getGuide();
    if (guide) {
      guideSpeak(`${pickPersonalityLine(guide, "success")} ${level.rawTitle || level.title} is saved as one of your favorite games.`, {
        stateName: "happy",
        assistant: true,
        level: true,
      });
    }
  }

  updateFavoriteGameButton(level);
  updateDashboard();
  saveState();
}

function updateLevelActionButtons(level) {
  if (!level || !state.age) {
    refs.simulationPrevButton.disabled = true;
    refs.simulationNextButton.disabled = true;
    refs.simulationNextButton.textContent = "Next Level";
    updateFavoriteGameButton(null);
    return;
  }

  const band = getLevelBandForAge(state.age);
  const nextLevel = LevelManager.getNextLevel(level);
  const canMoveNext = Boolean(nextLevel && nextLevel.number <= band.max && isLevelAvailable(nextLevel.number));

  refs.simulationPrevButton.disabled = level.number <= band.min;
  refs.simulationNextButton.disabled = !canMoveNext;
  refs.simulationNextButton.textContent = !nextLevel || level.number >= band.max ? "Final Level" : "Next Level";
  updateFavoriteGameButton(level);
}

/* =========================
   Levels and Simulation
   ========================= */
function renderLevels() {
  if (!state.age) {
    refs.levelGrid.innerHTML = "";
    return;
  }

  const band = getLevelBandForAge(state.age);
  const levels = LevelManager.getForAge(state.age);
  const progress = getBandProgress();

  refs.levelBandLabel.textContent = `${band.label} | Levels ${band.min}-${band.max}`;
  refs.levelProgressText.textContent = `${progress.completed} of ${progress.total} completed`;
  refs.levelProgressFill.style.width = `${(progress.completed / progress.total) * 100}%`;

  refs.levelGrid.innerHTML = levels
    .map((level) => {
      const status = state.completedLevels.includes(level.number)
        ? "completed"
        : isLevelAvailable(level.number)
          ? "available"
          : "locked";
      const isActive = state.currentLevelNumber === level.number;

      return `
        <button class="level-button ${status} ${isActive ? "active" : ""}" type="button" data-level-number="${level.number}" ${status === "locked" ? "disabled" : ""}>
          <span class="level-visual" style="--level-start:${level.scene.colors[0]}; --level-end:${level.scene.colors[1]}">
            ${level.scene.art
              .slice(0, 3)
              .map((token) => `<span class="level-visual-token">${token}</span>`)
              .join("")}
          </span>
          <span class="level-number">Level ${level.number}</span>
          <strong class="level-title-mini">${level.title.replace(/^Level\s+\d+:\s*/, "")}</strong>
          <span class="level-type">${getModeLabel(level.mode)}</span>
          <span class="level-place">${level.scene.place}</span>
        </button>
      `;
    })
    .join("");

  refs.levelGrid.querySelectorAll("[data-level-number]").forEach((button) => {
    button.addEventListener("click", () => {
      selectLevel(Number(button.dataset.levelNumber));
    });
  });

  if (!state.currentLevelNumber || !isLevelAvailable(state.currentLevelNumber)) {
    state.currentLevelNumber = getUnlockedLevelNumber();
  }

  renderCurrentLevel();
}

function selectLevel(levelNumber) {
  if (!isLevelAvailable(levelNumber)) {
    return;
  }

  state.currentLevelNumber = levelNumber;
  const currentLevel = getLevelByNumber(levelNumber);
  updateTopbar();
  renderLevels();
  triggerLevelSceneEffect("soft");
  saveState();

  const guide = getGuide();
  if (guide && currentLevel) {
    guideSpeak(`${currentLevel.voiceMessage} ${pickPersonalityLine(guide, "tip")}`, {
      stateName: "thinking",
      assistant: true,
      level: true,
    });
  }
}

function renderCurrentLevel() {
  const currentLevel = getLevelByNumber(state.currentLevelNumber);

  if (!currentLevel) {
    refs.currentLevelTitle.textContent = "Choose a level";
    refs.currentLevelCopy.textContent = "Pick a level to load its scenario.";
    refs.simulationLevelName.textContent = "Choose a level";
    refs.simulationLevelScenario.textContent = "Level details will appear here.";
    refs.simulationLevelNumber.textContent = `Level 0 of ${levelCatalog.length}`;
    refs.simulationLevelType.textContent = "Game Type";
    refs.simulationLevelPlace.textContent = "Scene";
    refs.simulationRewardPill.textContent = "Reward: +0";
    refs.simulationTaskStrip.textContent = "Pick a level to start its task.";
    renderLevelScene(null);
    updateLevelActionButtons(null);
    refs.simulationStage.innerHTML = '<div class="simulation-empty">Choose a level to begin a kindness simulation or decision challenge.</div>';
    refs.simulationFeedback.textContent = "Your feedback will appear here.";
    return;
  }

  refs.currentLevelTitle.textContent = currentLevel.title;
  refs.currentLevelCopy.textContent = currentLevel.scenario;
  refs.simulationLevelName.textContent = currentLevel.title;
  refs.simulationLevelScenario.textContent = currentLevel.scenario;
  refs.simulationLevelNumber.textContent = `Level ${currentLevel.number} of ${levelCatalog.length}`;
  refs.simulationLevelType.textContent = getModeLabel(currentLevel.mode);
  refs.simulationLevelPlace.textContent = currentLevel.scene.place;
  refs.simulationRewardPill.textContent = `Reward: +${currentLevel.reward} points | +${currentLevel.rewards?.coins || 0} coins`;
  refs.simulationTaskStrip.textContent = currentLevel.task;
  refs.simulationFeedback.textContent = "Follow the task instructions to complete the level.";
  renderLevelScene(currentLevel);
  updateLevelActionButtons(currentLevel);
  renderSimulation(currentLevel);
}

function renderSimulation(level) {
  GameManager.loadLevel(level);
}

function renderDragSimulation(level) {
  refs.simulationStage.innerHTML = `
    <div class="simulation-sandbox">
      <div class="simulation-copy-panel">${level.task}</div>
      <div class="simulation-drop-layout">
        <div class="simulation-item-bank" id="simulation-item-bank">
          ${level.mission.items
            .map(
              (item) => `
                <button class="simulation-item" type="button" draggable="true" data-item-id="${item.id}">
                  <span class="simulation-item-icon">${item.icon}</span>
                  <span class="simulation-item-label">${item.label}</span>
                </button>
              `
            )
            .join("")}
        </div>

        <div class="simulation-drop-zone" id="simulation-drop-zone">
          <span class="simulation-drop-zone-icon">${level.mission.zoneIcon}</span>
          <strong>${level.mission.zoneLabel}</strong>
          <span>Drag or tap items here</span>
        </div>
      </div>
    </div>
  `;

  bindDragSimulation(level);
}

function renderChoiceSimulation(level) {
  const isVisualChoice =
    level.mode === "visual-choice" ||
    ["pattern", "difference"].includes(level.mode) ||
    level.mission.options.some((option) => option.visual || option.caption);
  refs.simulationStage.innerHTML = `
    <div class="simulation-choice-card ${isVisualChoice ? "visual-choice-card" : ""}">
      <div class="simulation-copy-panel">${level.mission.prompt || level.task}</div>
      <div class="simulation-choice-grid ${isVisualChoice ? "visual-choice-grid" : ""}">
        ${level.mission.options
          .map(
            (option) => `
              <button class="simulation-choice-button ${isVisualChoice ? "visual-choice-button" : ""}" type="button" data-sim-choice="${option.label}">
                ${
                  isVisualChoice
                    ? `
                      <span class="simulation-choice-visual">${option.visual || "&#10024;"}</span>
                      <span class="simulation-choice-title">${option.label}</span>
                      <span class="simulation-choice-caption">${option.caption || ""}</span>
                    `
                    : `${option.label}`
                }
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;

  refs.simulationStage.querySelectorAll("[data-sim-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      handleChoiceSimulation(level, button);
    });
  });
}

function renderCountSimulation(level) {
  refs.simulationStage.innerHTML = `
    <div class="simulation-choice-card">
      <div class="simulation-copy-panel">${level.task}</div>
      <div class="simulation-count-visual">
        ${level.mission.objects.map((item) => `<span class="count-token">${item}</span>`).join("")}
      </div>
      <div class="simulation-choice-grid">
        ${level.mission.options
          .map(
            (option) => `
              <button class="simulation-choice-button" type="button" data-count-value="${option}">
                ${option}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;

  refs.simulationStage.querySelectorAll("[data-count-value]").forEach((button) => {
    button.addEventListener("click", () => {
      handleCountSimulation(level, button);
    });
  });
}

function renderMemorySimulation(level) {
  const cards = MatchGameManager.prepare(level);
  const showLabels = !level.mission.visualOnly;
  const columns = cards.length <= 4 ? 2 : cards.length <= 8 ? 3 : 4;
  refs.simulationStage.innerHTML = `
    <div class="simulation-memory-card">
      <div class="simulation-copy-panel">${level.task}</div>
      <div class="memory-grid" style="--memory-columns:${columns}">
        ${cards
          .map((card) => {
            const isFlipped =
              simulationState.revealedCards.includes(card.id) || simulationState.solvedCardIds.includes(card.id);
            const isSolved = simulationState.solvedCardIds.includes(card.id);
            const isWrong = simulationState.wrongCardIds.includes(card.id);
            return `
              <button class="memory-card ${isFlipped ? "is-flipped" : ""} ${isSolved ? "is-solved" : ""} ${isWrong ? "is-wrong" : ""}" type="button" data-memory-id="${card.id}" ${isSolved ? "disabled" : ""}>
                <span class="memory-card-face memory-card-front">
                  <span class="memory-card-front-icon">&#10024;</span>
                </span>
                <span class="memory-card-face memory-card-back ${level.mission.visualOnly ? "visual-only" : ""}">
                  <span class="memory-card-icon">${card.icon}</span>
                  ${showLabels ? `<span class="memory-card-label">${card.label}</span>` : ""}
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;

  refs.simulationStage.querySelectorAll("[data-memory-id]").forEach((button) => {
    button.addEventListener("click", () => {
      handleMemoryCard(level, button);
    });
  });
}

function renderPairSimulation(level) {
  const rightItems = PuzzleManager.preparePairs(level);

  refs.simulationStage.innerHTML = `
    <div class="simulation-pair-card">
      <div class="simulation-copy-panel">${level.task}</div>
      <div class="simulation-pair-board">
        <div class="simulation-pair-column">
          <span class="pair-column-title">${level.mission.leftTitle}</span>
          ${level.mission.pairs
            .map((pair) => {
              const isMatched = simulationState.matchedPairs.includes(pair.id);
              const isSelected = simulationState.selectedLeftId === pair.id;
              return `
                <button class="pair-card ${isMatched ? "matched" : ""} ${isSelected ? "selected" : ""}" type="button" data-pair-side="left" data-pair-id="${pair.id}" ${isMatched ? "disabled" : ""}>
                  <span class="pair-card-icon">${pair.leftIcon}</span>
                  <span>${pair.left}</span>
                </button>
              `;
            })
            .join("")}
        </div>
        <div class="simulation-pair-column">
          <span class="pair-column-title">${level.mission.rightTitle}</span>
          ${rightItems
            .map((pair) => {
              const isMatched = simulationState.matchedPairs.includes(pair.id);
              const isSelected = simulationState.selectedRightId === pair.id;
              return `
                <button class="pair-card ${isMatched ? "matched" : ""} ${isSelected ? "selected" : ""}" type="button" data-pair-side="right" data-pair-id="${pair.id}" ${isMatched ? "disabled" : ""}>
                  <span class="pair-card-icon">${pair.rightIcon}</span>
                  <span>${pair.right}</span>
                </button>
              `;
            })
            .join("")}
        </div>
      </div>
    </div>
  `;

  refs.simulationStage.querySelectorAll("[data-pair-id]").forEach((button) => {
    button.addEventListener("click", () => {
      handlePairSelection(level, button);
    });
  });
}

function renderSequenceSimulation(level) {
  refs.simulationStage.innerHTML = `
    <div class="simulation-sequence-card">
      <div class="simulation-copy-panel">${level.task}</div>
      <div class="sequence-progress-card">
        <span class="sequence-progress-label">Build the kind order</span>
        <div class="sequence-order-list">
          ${level.mission.steps
            .map((step, index) => {
              const selectedStepId = simulationState.sequenceOrder[index];
              const selectedStep = level.mission.steps.find((item) => item.id === selectedStepId);
              return `
                <span class="sequence-order-pill ${selectedStep ? "filled" : ""}">
                  ${selectedStep ? `${index + 1}. ${selectedStep.icon} ${selectedStep.label}` : `${index + 1}. ...`}
                </span>
              `;
            })
            .join("")}
        </div>
      </div>
      <div class="simulation-choice-grid sequence-choice-grid">
        ${level.mission.steps
          .map((step) => {
            const isSelected = simulationState.sequenceOrder.includes(step.id);
            return `
              <button class="simulation-choice-button sequence-step-button ${isSelected ? "correct" : ""}" type="button" data-sequence-step="${step.id}" ${isSelected ? "disabled" : ""}>
                <span class="pair-card-icon">${step.icon}</span>
                <span>${step.label}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;

  refs.simulationStage.querySelectorAll("[data-sequence-step]").forEach((button) => {
    button.addEventListener("click", () => {
      handleSequenceStep(level, button.dataset.sequenceStep);
    });
  });
}

function renderJigsawSimulation(level) {
  refs.simulationStage.innerHTML = `
    <div class="simulation-jigsaw-card">
      <div class="simulation-copy-panel">${level.task}</div>
      <div class="jigsaw-preview-board">
        <span class="jigsaw-preview-label">${level.mission.previewLabel}</span>
        <div class="jigsaw-preview-slots">
          ${level.mission.pieces
            .map((piece, index) => {
              const placedPieceId = simulationState.sequenceOrder[index];
              const placedPiece = level.mission.pieces.find((item) => item.id === placedPieceId);

              return `
                <span class="jigsaw-preview-slot ${placedPiece ? "filled" : ""}">
                  ${placedPiece ? `${placedPiece.icon} ${placedPiece.label}` : `${index + 1}. Piece`}
                </span>
              `;
            })
            .join("")}
        </div>
      </div>
      <div class="simulation-choice-grid jigsaw-piece-grid">
        ${level.mission.pieces
          .map((piece) => {
            const isPlaced = simulationState.sequenceOrder.includes(piece.id);
            return `
              <button class="simulation-choice-button jigsaw-piece-button ${isPlaced ? "correct" : ""}" type="button" data-jigsaw-piece="${piece.id}" ${isPlaced ? "disabled" : ""}>
                <span class="jigsaw-piece-icon">${piece.icon}</span>
                <span>${piece.label}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;

  refs.simulationStage.querySelectorAll("[data-jigsaw-piece]").forEach((button) => {
    button.addEventListener("click", () => {
      handleJigsawPiece(level, button.dataset.jigsawPiece);
    });
  });
}

function renderCompleteSimulation(level) {
  refs.simulationStage.innerHTML = `
    <div class="simulation-complete-card">
      <div class="simulation-copy-panel">${level.task}</div>
      <div class="simulation-complete-board">
        ${level.mission.parts
          .map((part) => {
            const isPlaced = simulationState.completedParts.includes(part.id);
            return `
              <div class="complete-slot ${isPlaced ? "filled" : ""}">
                <span class="complete-slot-icon">${isPlaced ? part.icon : "&#10067;"}</span>
                <span class="complete-slot-label">${part.label}</span>
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="simulation-complete-parts">
        ${level.mission.parts
          .map((part) => {
            const isPlaced = simulationState.completedParts.includes(part.id);
            return `
              <button class="simulation-choice-button complete-part-button ${isPlaced ? "correct" : ""}" type="button" data-complete-part="${part.id}" ${isPlaced ? "disabled" : ""}>
                ${part.icon} ${part.label}
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;

  refs.simulationStage.querySelectorAll("[data-complete-part]").forEach((button) => {
    button.addEventListener("click", () => {
      handleCompletePart(level, button.dataset.completePart);
    });
  });
}

function bindDragSimulation(level) {
  const itemButtons = refs.simulationStage.querySelectorAll("[data-item-id]");
  const dropZone = document.getElementById("simulation-drop-zone");

  function completeItem(itemId) {
    if (simulationState.completed || simulationState.movedItems.includes(itemId)) {
      return;
    }

    simulationState.movedItems.push(itemId);
    AnimationManager.pulseScene("soft");
    const itemButton = refs.simulationStage.querySelector(`[data-item-id="${itemId}"]`);
    if (itemButton) {
      itemButton.classList.add("done");
      itemButton.disabled = true;
    }

    refs.simulationFeedback.textContent = `${simulationState.movedItems.length} of ${level.mission.items.length} items sorted.`;

    if (simulationState.movedItems.length === level.mission.items.length) {
      simulationState.completed = true;
      refs.simulationFeedback.textContent = level.mission.success;
      AnimationManager.pulseScene("success");
      completeLevel(level);
    }
  }

  itemButtons.forEach((itemButton) => {
    itemButton.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", itemButton.dataset.itemId);
      itemButton.classList.add("dragging");
    });

    itemButton.addEventListener("dragend", () => {
      itemButton.classList.remove("dragging");
      dropZone.classList.remove("active-drop");
    });

    itemButton.addEventListener("click", () => {
      completeItem(itemButton.dataset.itemId);
    });
  });

  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("active-drop");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("active-drop");
  });

  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("text/plain");
    dropZone.classList.remove("active-drop");
    completeItem(itemId);
  });
}

function handleChoiceSimulation(level, button) {
  if (simulationState.completed) {
    return;
  }

  const choice = button.dataset.simChoice;
  const buttons = refs.simulationStage.querySelectorAll("[data-sim-choice]");
  const chosenOption = level.mission.options.find((option) => option.label === choice);

  buttons.forEach((item) => {
    item.classList.remove("correct", "wrong");

    if (item === button) {
      item.classList.add(chosenOption.correct ? "correct" : "wrong");
    }
  });

  refs.simulationFeedback.textContent = chosenOption.correct
    ? `Great job! ${chosenOption.explanation}`
    : `Try again! ${chosenOption.explanation}`;

  if (chosenOption.correct) {
    simulationState.completed = true;
    AnimationManager.pulseScene(level.rewards?.celebration === "sparkle" ? "soft" : "success");
    completeLevel(level);
  } else {
    AnimationManager.pulseScene("warning");
    const guide = getGuide();
    if (guide) {
      guideSpeak(`${pickPersonalityLine(guide, "retry")} ${chosenOption.explanation}`, {
        stateName: "thinking",
        assistant: true,
        level: true,
      });
    }
  }
}

function handleCountSimulation(level, button) {
  if (simulationState.completed) {
    return;
  }

  const value = Number(button.dataset.countValue);
  const buttons = refs.simulationStage.querySelectorAll("[data-count-value]");
  const isCorrect = value === level.mission.correctCount;

  buttons.forEach((item) => {
    item.classList.remove("correct", "wrong");

    if (item === button) {
      item.classList.add(isCorrect ? "correct" : "wrong");
    }
  });

  refs.simulationFeedback.textContent = isCorrect
    ? `Great job! ${level.mission.success}`
    : "Try again! Count carefully and look at each picture.";

  if (isCorrect) {
    simulationState.completed = true;
    AnimationManager.pulseScene("success");
    completeLevel(level);
  } else {
    AnimationManager.pulseScene("warning");
    const guide = getGuide();
    if (guide) {
      guideSpeak(`${pickPersonalityLine(guide, "retry")} Count each picture one more time.`, {
        stateName: "thinking",
        assistant: true,
        level: true,
      });
    }
  }
}

function handleMemoryCard(level, button) {
  if (simulationState.completed || simulationState.memoryLocked) {
    return;
  }

  const cardId = button.dataset.memoryId;
  if (simulationState.revealedCards.includes(cardId) || simulationState.solvedCardIds.includes(cardId)) {
    return;
  }

  simulationState.revealedCards.push(cardId);
  simulationState.wrongCardIds = [];
  AnimationManager.pulseScene("soft");
  renderMemorySimulation(level);

  if (simulationState.revealedCards.length < 2) {
    refs.simulationFeedback.textContent = "Nice start. Find the picture that belongs with it.";
    return;
  }

  simulationState.memoryLocked = true;
  const [firstId, secondId] = simulationState.revealedCards;
  const activeCards = simulationState.shuffledCards.length ? simulationState.shuffledCards : level.mission.cards;
  const firstCard = activeCards.find((card) => card.id === firstId);
  const secondCard = activeCards.find((card) => card.id === secondId);
  const isMatch = firstCard && secondCard && firstCard.pairId === secondCard.pairId;

  if (isMatch) {
    simulationState.solvedCardIds.push(firstId, secondId);
    simulationState.revealedCards = [];
    simulationState.memoryLocked = false;
    simulationState.wrongCardIds = [];
    refs.simulationFeedback.textContent = `Great job! ${firstCard.label} matches ${secondCard.label}.`;
    AudioManager.play("match");
    AnimationManager.pulseScene("success");
    renderMemorySimulation(level);

    if (simulationState.solvedCardIds.length === activeCards.length) {
      simulationState.completed = true;
      refs.simulationFeedback.textContent = level.mission.success;
      completeLevel(level);
    }

    return;
  }

  refs.simulationFeedback.textContent = "Try again! Those pictures do not go together yet.";
  simulationState.wrongCardIds = [firstId, secondId];
  AudioManager.play("wrong");
  AnimationManager.pulseScene("warning");
  const guide = getGuide();
  if (guide) {
    guideSpeak(`${pickPersonalityLine(guide, "retry")} Look for the pictures that belong together.`, {
      stateName: "thinking",
      assistant: true,
      level: true,
    });
  }

  window.clearTimeout(handleMemoryCard.timer);
  handleMemoryCard.timer = window.setTimeout(() => {
    simulationState.revealedCards = [];
    simulationState.wrongCardIds = [];
    simulationState.memoryLocked = false;

    if (simulationState.levelNumber === level.number && state.currentLevelNumber === level.number) {
      renderMemorySimulation(level);
      refs.simulationFeedback.textContent = "Try again! Turn over two new picture cards.";
    }
  }, 850);
}

function handlePairSelection(level, button) {
  if (simulationState.completed) {
    return;
  }

  const side = button.dataset.pairSide;
  const pairId = button.dataset.pairId;

  if (simulationState.matchedPairs.includes(pairId)) {
    return;
  }

  if (side === "left") {
    simulationState.selectedLeftId = pairId;
  } else {
    simulationState.selectedRightId = pairId;
  }

  const hasBothSelections = Boolean(simulationState.selectedLeftId && simulationState.selectedRightId);

  if (!hasBothSelections) {
    AnimationManager.pulseScene("soft");
    renderPairSimulation(level);
    return;
  }

  if (simulationState.selectedLeftId === simulationState.selectedRightId) {
    simulationState.matchedPairs.push(pairId);
    refs.simulationFeedback.textContent = `Great job! ${level.mission.pairs.find((pair) => pair.id === pairId).right}`;
    simulationState.selectedLeftId = null;
    simulationState.selectedRightId = null;
    AnimationManager.pulseScene("success");

    if (simulationState.matchedPairs.length === level.mission.pairs.length) {
      simulationState.completed = true;
      completeLevel(level);
      return;
    }
  } else {
    refs.simulationFeedback.textContent = "Try again! Pick a different pair.";
    simulationState.selectedLeftId = null;
    simulationState.selectedRightId = null;
    AnimationManager.pulseScene("warning");
    const guide = getGuide();
    if (guide) {
      guideSpeak(`${pickPersonalityLine(guide, "retry")} Try a different pair.`, {
        stateName: "thinking",
        assistant: true,
        level: true,
      });
    }
  }

  renderPairSimulation(level);
}

function handleSequenceStep(level, stepId) {
  if (simulationState.completed || simulationState.sequenceLocked || simulationState.sequenceOrder.includes(stepId)) {
    return;
  }

  simulationState.sequenceOrder.push(stepId);
  AnimationManager.pulseScene("soft");
  renderSequenceSimulation(level);
  refs.simulationFeedback.textContent = `${simulationState.sequenceOrder.length} of ${level.mission.steps.length} steps placed.`;

  if (simulationState.sequenceOrder.length < level.mission.steps.length) {
    return;
  }

  const isCorrect = level.mission.steps.every((step, index) => simulationState.sequenceOrder[index] === step.id);

  if (isCorrect) {
    simulationState.completed = true;
    refs.simulationFeedback.textContent = `Great job! ${level.mission.success}`;
    AnimationManager.pulseScene("success");
    completeLevel(level);
    return;
  }

  simulationState.sequenceLocked = true;
  refs.simulationFeedback.textContent = `Try again! ${level.mission.retry}`;
  AnimationManager.pulseScene("warning");
  const guide = getGuide();
  if (guide) {
    guideSpeak(`${pickPersonalityLine(guide, "retry")} ${level.mission.retry}`, {
      stateName: "thinking",
      assistant: true,
      level: true,
    });
  }

  window.clearTimeout(handleSequenceStep.timer);
  handleSequenceStep.timer = window.setTimeout(() => {
    simulationState.sequenceOrder = [];
    simulationState.sequenceLocked = false;

    if (simulationState.levelNumber === level.number && state.currentLevelNumber === level.number) {
      renderSequenceSimulation(level);
      refs.simulationFeedback.textContent = "Try again! Build the order from the beginning.";
    }
  }, 1050);
}

function handleJigsawPiece(level, pieceId) {
  if (simulationState.completed || simulationState.sequenceLocked || simulationState.sequenceOrder.includes(pieceId)) {
    return;
  }

  simulationState.sequenceOrder.push(pieceId);
  AnimationManager.pulseScene("soft");
  renderJigsawSimulation(level);
  refs.simulationFeedback.textContent = `${simulationState.sequenceOrder.length} of ${level.mission.pieces.length} pieces placed.`;

  if (simulationState.sequenceOrder.length < level.mission.pieces.length) {
    return;
  }

  const isCorrect = level.mission.pieces.every((piece, index) => simulationState.sequenceOrder[index] === piece.id);
  if (isCorrect) {
    simulationState.completed = true;
    refs.simulationFeedback.textContent = `Great job! ${level.mission.success}`;
    AnimationManager.pulseScene("success");
    completeLevel(level);
    return;
  }

  simulationState.sequenceLocked = true;
  refs.simulationFeedback.textContent = `Try again! ${level.mission.retry}`;
  AudioManager.play("wrong");
  AnimationManager.pulseScene("warning");

  const guide = getGuide();
  if (guide) {
    guideSpeak(`${pickPersonalityLine(guide, "retry")} ${level.mission.retry}`, {
      stateName: "thinking",
      assistant: true,
      level: true,
    });
  }

  window.clearTimeout(handleJigsawPiece.timer);
  handleJigsawPiece.timer = window.setTimeout(() => {
    simulationState.sequenceOrder = [];
    simulationState.sequenceLocked = false;

    if (simulationState.levelNumber === level.number && state.currentLevelNumber === level.number) {
      renderJigsawSimulation(level);
      refs.simulationFeedback.textContent = "Try again! Rebuild the picture from the first piece.";
    }
  }, 1050);
}

function handleCompletePart(level, partId) {
  if (simulationState.completed || simulationState.completedParts.includes(partId)) {
    return;
  }

  simulationState.completedParts.push(partId);
  refs.simulationFeedback.textContent = `${level.mission.parts.find((part) => part.id === partId).label} added.`;
  AnimationManager.pulseScene("soft");
  renderCompleteSimulation(level);

  if (simulationState.completedParts.length === level.mission.parts.length) {
    simulationState.completed = true;
    refs.simulationFeedback.textContent = level.mission.success;
    AnimationManager.pulseScene("success");
    completeLevel(level);
  }
}

function completeLevel(level) {
  if (state.completedLevels.includes(level.number)) {
    return;
  }

  state.completedLevels.push(level.number);
  if (level.badge) {
    RewardManager.unlockBadge(level.badge);
  }

  showLessonPopup("Great job!", `${level.mission.success} +${level.reward} points and +${level.rewards?.coins || 0} coins earned.`);
  RewardManager.award(level.reward, `Level ${level.number} complete.`, {
    coins: level.rewards?.coins || Math.max(1, Math.round(level.reward / 6)),
    celebration: level.rewards?.celebration,
  });
  renderLevels();
  updatePlatformScreen();
  updateDashboard();
  checkBadges();

  const guide = getGuide();
  if (guide) {
    guideSpeak(`${pickPersonalityLine(guide, "success")} ${level.title} is complete.`, {
      stateName: "happy",
      assistant: true,
      level: true,
      platform: state.screen === "platform",
    });
  }

  saveState();
}

function resetSimulation() {
  const level = getLevelByNumber(state.currentLevelNumber);

  if (!level) {
    return;
  }

  renderSimulation(level);
  refs.simulationFeedback.textContent = "Task reset. Try the challenge again.";
  AnimationManager.pulseScene("soft");

  const guide = getGuide();
  if (guide) {
    guideSpeak(`${pickPersonalityLine(guide, "tip")} Let's try that level again.`, {
      stateName: "thinking",
      assistant: true,
      level: true,
    });
  }
}

function moveToNextLevel() {
  if (!state.age || !state.currentLevelNumber) {
    return;
  }

  const level = getLevelByNumber(state.currentLevelNumber);
  const nextLevel = LevelManager.getNextLevel(level);

  if (nextLevel && isLevelAvailable(nextLevel.number)) {
    selectLevel(nextLevel.number);
  }
}

function moveToPreviousLevel() {
  if (!state.age || !state.currentLevelNumber) {
    return;
  }

  const band = getLevelBandForAge(state.age);
  const previousLevel = Math.max(band.min, state.currentLevelNumber - 1);
  selectLevel(previousLevel);
}

/* =========================
   Navigation Targets
   ========================= */
function navigateTo(target) {
  if (target === "home") {
    updatePlatformScreen();
    showScreen("platform");
    return;
  }

  if (target === "games") {
    updateGamesScreen();
    showScreen("games");
    window.requestAnimationFrame(() => {
      setupDrawingCanvas();
    });
    return;
  }

  if (target === "shorts") {
    showScreen("shorts");
    showShort(state.currentShortIndex);
    return;
  }

  if (target === "levels") {
    renderLevels();
    showScreen("levels");
    return;
  }

  updateDashboard();
  showScreen("dashboard");
}

/* =========================
   Ripple Utility
   ========================= */
function createRipple(event) {
  const target = event.target.closest("button");

  if (!target) {
    return;
  }

  state.hasInteracted = true;
  const rect = target.getBoundingClientRect();
  const clickX = event.clientX || rect.left + rect.width / 2;
  const clickY = event.clientY || rect.top + rect.height / 2;
  const ripple = document.createElement("span");

  ripple.className = "button-ripple";
  ripple.style.left = `${clickX - rect.left}px`;
  ripple.style.top = `${clickY - rect.top}px`;
  target.appendChild(ripple);

  window.setTimeout(() => {
    ripple.remove();
  }, 720);
}

/* =========================
   Restore and Reset
   ========================= */
function restoreShortAnswersAndUi() {
  restoreShortAnswers();
  updateShortUi();
}

function restoreApp() {
  const saved = loadState();
  hydrateState(saved);

  if (state.currentShortIndex < 0 || state.currentShortIndex >= shorts.length) {
    state.currentShortIndex = 0;
  }

  if (state.age) {
    const band = getLevelBandForAge(state.age);

    if (!state.currentLevelNumber || state.currentLevelNumber < band.min || state.currentLevelNumber > band.max) {
      state.currentLevelNumber = Math.max(band.min, Math.min(getUnlockedLevelNumber(), band.max));
    }
  } else {
    state.currentLevelNumber = null;
  }

  ensureDailyTasks();
  updateVoiceUi();
  buildAgeButtons();
  updateAgeSelectionUi();
  renderBadges();
  renderDailyTasks();
  updateGamesScreen();
  renderShorts();

  if (getGuide()) {
    renderGuideSurfaces();
    updateRevealScreen();
    updatePlatformScreen();
  }

  renderLevels();
  updateTopbar();
  updateDashboard();
  restoreShortAnswersAndUi();

  updateShortLayout();
  updateNavigation();
  syncAssistantVisibility();

  const requestedScreen = getRequestedScreenFromUrl();

  if (requestedScreen && openRequestedScreen(requestedScreen)) {
    return;
  }

  if (["age", "reveal", "platform", "games", "shorts", "levels", "dashboard"].includes(state.screen)) {
    showScreen(state.screen);
  } else {
    showScreen("welcome");
  }

  if (state.screen === "games") {
    window.requestAnimationFrame(() => {
      setupDrawingCanvas();
    });
  }

  if (state.screen === "shorts") {
    showShort(state.currentShortIndex, { award: false, speak: false });
  }
}

function restartJourney() {
  stopSpeaking();
  hideLessonPopup();

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Could not clear saved state.", error);
  }

  Object.assign(state, createDefaultState());
  resetSimulationState();
  refs.assistant.hidden = true;
  refs.bottomNav.hidden = true;
  restoreApp();
}

function handleWindowResize() {
  if (handleWindowResize.frame) {
    return;
  }

  handleWindowResize.frame = window.requestAnimationFrame(() => {
    handleWindowResize.frame = 0;
    updateShortLayout();

    if (state.screen === "games") {
      setupDrawingCanvas();
    }
  });
}

/* =========================
   Event Wiring
   ========================= */
function bindEvents() {
  document.addEventListener("click", createRipple);

  refs.startButton.addEventListener("click", () => {
    showScreen("age");
  });

  refs.backToWelcome.addEventListener("click", () => {
    showScreen("welcome");
  });

  refs.revealGuideButton.addEventListener("click", () => {
    revealGuide();
  });

  refs.backToAge.addEventListener("click", () => {
    showScreen("age");
  });

  refs.continueButton.addEventListener("click", () => {
    enterPlatform();
  });

  refs.restartButton.addEventListener("click", () => {
    restartJourney();
  });

  refs.homeGamesButton.addEventListener("click", () => {
    navigateTo("games");
  });

  refs.homeLevelsButton.addEventListener("click", () => {
    navigateTo("levels");
  });

  refs.homeDashboardButton.addEventListener("click", () => {
    navigateTo("dashboard");
  });

  refs.homeShortsButton.addEventListener("click", () => {
    navigateTo("shorts");
  });

  refs.voiceToggle.addEventListener("click", () => {
    toggleVoice();
  });

  refs.navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navigateTo(item.dataset.nav);
    });
  });

  refs.likeButton.addEventListener("click", () => {
    toggleLikeCurrentShort();
  });

  if (refs.favoriteGameButton) {
    refs.favoriteGameButton.addEventListener("click", () => {
      toggleFavoriteCurrentGame();
    });
  }

  refs.gamesOpenShortsButton.addEventListener("click", () => {
    navigateTo("shorts");
  });

  refs.gamesOpenLevelsButton.addEventListener("click", () => {
    navigateTo("levels");
  });

  refs.gamesOpenDashboardButton.addEventListener("click", () => {
    navigateTo("dashboard");
  });

  refs.lessonPopupClose.addEventListener("click", () => {
    hideLessonPopup();
  });

  document.querySelectorAll("[data-draw-color]").forEach((button) => {
    button.addEventListener("click", () => {
      selectDrawColor(button.dataset.drawColor);
    });
  });

  document.querySelectorAll("[data-fill-color]").forEach((button) => {
    button.addEventListener("click", () => {
      selectFillColor(button.dataset.fillColor);
    });
  });

  refs.coloringBoard.querySelectorAll("[data-color-target]").forEach((shape) => {
    shape.addEventListener("click", () => {
      colorShape(shape.dataset.colorTarget);
    });
  });

  document.querySelectorAll("[data-help-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      handleHelpFriendChoice(button.dataset.helpChoice);
    });
  });

  refs.clearCanvasButton.addEventListener("click", () => {
    clearDrawingCanvas();
  });

  refs.drawingCanvas.addEventListener("pointerdown", (event) => {
    startDrawing(event);
  });

  refs.drawingCanvas.addEventListener("pointermove", (event) => {
    if (!drawingState.isDrawing) {
      return;
    }

    event.preventDefault();
    drawOnCanvas(event);
  });

  refs.drawingCanvas.addEventListener("pointerup", () => {
    stopDrawing();
  });

  refs.drawingCanvas.addEventListener("pointerleave", () => {
    stopDrawing();
  });

  refs.parkBin.addEventListener("dragover", (event) => {
    event.preventDefault();
    refs.parkBin.classList.add("active-drop");
  });

  refs.parkBin.addEventListener("dragleave", () => {
    refs.parkBin.classList.remove("active-drop");
  });

  refs.parkBin.addEventListener("drop", (event) => {
    event.preventDefault();
    refs.parkBin.classList.remove("active-drop");
    collectParkTrash(event.dataTransfer.getData("text/plain"));
  });

  refs.previousShortButton.addEventListener("click", () => {
    moveShort(-1);
  });

  refs.nextShortButton.addEventListener("click", () => {
    moveShort(1);
  });

  refs.shortsViewport.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();

      if (state.wheelLocked) {
        return;
      }

      state.wheelLocked = true;

      if (event.deltaY > 20) {
        moveShort(1);
      } else if (event.deltaY < -20) {
        moveShort(-1);
      }

      window.setTimeout(() => {
        state.wheelLocked = false;
      }, 520);
    },
    { passive: false }
  );

  refs.shortsViewport.addEventListener("touchstart", (event) => {
    state.touchStartY = event.touches[0].clientY;
  });

  refs.shortsViewport.addEventListener("touchend", (event) => {
    if (state.touchStartY === null) {
      return;
    }

    const endY = event.changedTouches[0].clientY;
    const deltaY = state.touchStartY - endY;

    if (deltaY > 40) {
      moveShort(1);
    } else if (deltaY < -40) {
      moveShort(-1);
    }

    state.touchStartY = null;
  });

  refs.simulationResetButton.addEventListener("click", () => {
    resetSimulation();
  });

  refs.simulationPrevButton.addEventListener("click", () => {
    moveToPreviousLevel();
  });

  refs.simulationNextButton.addEventListener("click", () => {
    moveToNextLevel();
  });

  window.addEventListener("resize", handleWindowResize);
}

/* =========================
   App Boot
   ========================= */
function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
    return;
  }

  const register = async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js", { scope: "./" });
    } catch (error) {
      console.warn("Service worker registration failed.", error);
    }
  };

  if (document.readyState === "complete") {
    register();
    return;
  }

  window.addEventListener("load", register, { once: true });
}

function initializeApp() {
  buildCelebrationPieces();
  VoiceManager.init();
  registerServiceWorker();
  bindEvents();
  restoreApp();
  setupDrawingCanvas();
}

initializeApp();
