window.LEARNING_KIND_LEVELS = [
  {
    id: "forest-friends-flip",
    ageGroup: "4-6",
    gameType: "match-pair",
    title: "Forest Friends Flip",
    description: "Flip the cartoon cards and find the matching forest friends.",
    difficulty: 1,
    background: { place: "Forest Meadow", label: "Animal Match", colors: ["#6fd5ff", "#8de5a8"] },
    image: { cover: "&#127794;", tokens: ["&#128060;", "&#128048;", "&#127807;"], landscape: "Cartoon forest animal cards" },
    instructions: "Tap two cards. Match the same animal pictures.",
    voiceMessage: "Let's flip the animal cards and find matching friends together.",
    rewards: { coins: 2, lesson: "Matching carefully helps you notice details.", celebration: "sparkle" },
    points: 10,
    badge: { id: "forest-friend", name: "Forest Friend", description: "Completed the first matching mission.", icon: "&#128060;" },
    nextLevel: "fruit-basket-flip",
    gameData: {
      visualOnly: true,
      cards: [
        { pairId: "panda", icon: "&#128060;", label: "Panda" },
        { pairId: "cat", icon: "&#128049;", label: "Cat" }
      ]
    }
  },
  {
    id: "fruit-basket-flip",
    ageGroup: "4-6",
    gameType: "match-pair",
    title: "Fruit Basket Flip",
    description: "Find the fruit picture pairs in the picnic basket game.",
    difficulty: 1,
    background: { place: "Picnic Garden", label: "Fruit Match", colors: ["#7fc8ff", "#ffd86c"] },
    image: { cover: "&#127794;", tokens: ["&#127822;", "&#127824;", "&#127818;"], landscape: "Cartoon fruit cards on a picnic cloth" },
    instructions: "Flip the cards and match the same fruits.",
    voiceMessage: "These fruity cards are mixed up. Let's match them one pair at a time.",
    rewards: { coins: 2, lesson: "Looking closely helps you stay calm and focused.", celebration: "sparkle" },
    points: 12,
    badge: { id: "fruit-finder", name: "Fruit Finder", description: "Matched the fruit basket cards.", icon: "&#127822;" },
    nextLevel: "vehicle-parade-flip",
    gameData: {
      visualOnly: true,
      cards: [
        { pairId: "apple", icon: "&#127822;", label: "Apple" },
        { pairId: "banana", icon: "&#127820;", label: "Banana" },
        { pairId: "orange", icon: "&#127818;", label: "Orange" }
      ]
    }
  },
  {
    id: "vehicle-parade-flip",
    ageGroup: "4-6",
    gameType: "match-pair",
    title: "Vehicle Parade Flip",
    description: "A toy parade is waiting for the right vehicle pairs.",
    difficulty: 2,
    background: { place: "Toy Street", label: "Vehicle Match", colors: ["#7f8fff", "#ff99c7"] },
    image: { cover: "&#128663;", tokens: ["&#128663;", "&#128652;", "&#128690;"], landscape: "Cartoon vehicles on a play mat" },
    instructions: "Flip and match the vehicles. This round has more cards.",
    voiceMessage: "Now the card parade is bigger. Let's match the vehicles carefully.",
    rewards: { coins: 3, lesson: "The more practice you get, the stronger your focus becomes.", celebration: "sparkle" },
    points: 14,
    badge: { id: "vehicle-vision", name: "Vehicle Vision", description: "Matched the vehicle parade cards.", icon: "&#128652;" },
    nextLevel: "rainbow-pattern-path",
    gameData: {
      visualOnly: true,
      cards: [
        { pairId: "car", icon: "&#128663;", label: "Car" },
        { pairId: "bus", icon: "&#128652;", label: "Bus" },
        { pairId: "bike", icon: "&#128690;", label: "Bike" },
        { pairId: "rocket", icon: "&#128640;", label: "Rocket" }
      ]
    }
  },
  {
    id: "rainbow-pattern-path",
    ageGroup: "4-6",
    gameType: "pattern",
    title: "Rainbow Pattern Path",
    description: "Choose the image that finishes the rainbow helper pattern.",
    difficulty: 2,
    background: { place: "Rainbow Path", label: "Pattern Puzzle", colors: ["#8b74ff", "#ff8dc8"] },
    image: { cover: "&#127752;", tokens: ["&#11088;", "&#127752;", "&#127775;"], landscape: "Colorful stepping stones in a rainbow path" },
    instructions: "Look at the pattern and tap the picture that should come next.",
    voiceMessage: "Look closely at the pattern. Which picture completes the rainbow path?",
    rewards: { coins: 3, lesson: "Patterns help us notice order and stay curious.", celebration: "sparkle" },
    points: 14,
    badge: { id: "pattern-popper", name: "Pattern Popper", description: "Completed a rainbow picture pattern.", icon: "&#127752;" },
    nextLevel: "feelings-friend-finder",
    gameData: {
      prompt: "Which picture finishes the pattern?",
      options: [
        { label: "Rainbow star", visual: "&#11088; &#127752; &#11088;", caption: "Star, rainbow, star", correct: true, explanation: "Yes. The pattern goes star, rainbow, star." },
        { label: "Heart friend", visual: "&#10084; &#127752; &#11088;", caption: "Heart, rainbow, star", correct: false, explanation: "Not this one. The first and third pictures should match." },
        { label: "Sun helper", visual: "&#9728; &#127752; &#11088;", caption: "Sun, rainbow, star", correct: false, explanation: "Try again. Look for the repeating picture." }
      ]
    }
  },
  {
    id: "feelings-friend-finder",
    ageGroup: "4-6",
    gameType: "difference",
    title: "Feelings Friend Finder",
    description: "Spot the different feeling so you can help the friend who needs support.",
    difficulty: 2,
    background: { place: "Friendship Circle", label: "Find the Difference", colors: ["#6ecfff", "#ffbf7f"] },
    image: { cover: "&#128522;", tokens: ["&#128522;", "&#128546;", "&#129303;"], landscape: "Cartoon emotion faces in a circle" },
    instructions: "Tap the feeling that is different from the others.",
    voiceMessage: "One friend feels different from the rest. Can you spot the face that needs extra care?",
    rewards: { coins: 3, lesson: "Noticing feelings helps you know when someone might need kindness.", celebration: "sparkle" },
    points: 15,
    badge: { id: "feeling-friend", name: "Feeling Friend", description: "Spotted the different feeling in the friendship circle.", icon: "&#128522;" },
    nextLevel: "clean-park-tidy-up",
    gameData: {
      prompt: "Which feeling is different?",
      options: [
        { label: "Happy face", visual: "&#128522;", caption: "Smiling friend", correct: false, explanation: "This face matches the other smiling friends." },
        { label: "Sad face", visual: "&#128546;", caption: "Upset friend", correct: true, explanation: "Correct. This friend looks upset and may need help." },
        { label: "Happy face 2", visual: "&#128522;", caption: "Smiling friend", correct: false, explanation: "This one looks the same as the other happy faces." }
      ]
    }
  },
  {
    id: "clean-park-tidy-up",
    ageGroup: "4-6",
    gameType: "drag-sort",
    title: "Clean Park Tidy Up",
    description: "Drag the messy items into the kindness bin to keep the park clean.",
    difficulty: 2,
    background: { place: "Sunny Park", label: "Clean the Park", colors: ["#69d4ff", "#7de6a6"] },
    image: { cover: "&#127795;", tokens: ["&#128465;", "&#129529;", "&#127807;"], landscape: "Cartoon park with a bin and scattered litter" },
    instructions: "Drag each item into the big green kindness bin.",
    voiceMessage: "Let's clean the park so everyone has a safe and happy place to play.",
    rewards: { coins: 4, lesson: "Caring for shared spaces is a kind action.", celebration: "confetti" },
    points: 16,
    badge: { id: "park-protector", name: "Park Protector", description: "Cleaned the sunny park.", icon: "&#127795;" },
    nextLevel: "kindness-mural-finish",
    gameData: {
      items: [
        { id: "park-wrapper", label: "Wrapper", icon: "&#127850;" },
        { id: "park-cup", label: "Cup", icon: "&#129380;" },
        { id: "park-paper", label: "Paper", icon: "&#128196;" }
      ],
      zoneLabel: "Kindness Bin",
      zoneIcon: "&#128465;",
      success: "You cleaned the park and made it welcoming for everyone."
    }
  },
  {
    id: "kindness-mural-finish",
    ageGroup: "4-6",
    gameType: "complete-drawing",
    title: "Kindness Mural Finish",
    description: "Complete the mural by adding the cheerful missing pieces.",
    difficulty: 2,
    background: { place: "Art Corner", label: "Complete the Drawing", colors: ["#ff9bd0", "#ffd86d"] },
    image: { cover: "&#128396;", tokens: ["&#127752;", "&#9728;", "&#10084;"], landscape: "Bright mural with missing rainbow pieces" },
    instructions: "Tap the missing pieces to finish the mural.",
    voiceMessage: "This mural is almost ready. Let's finish it with warm and colorful pieces.",
    rewards: { coins: 4, lesson: "Finishing shared work helps everyone enjoy it together.", celebration: "confetti" },
    points: 18,
    badge: { id: "mural-maker", name: "Mural Maker", description: "Completed the kindness mural.", icon: "&#128396;" },
    nextLevel: "good-behaviour-memory",
    gameData: {
      drawingLabel: "Kindness mural",
      parts: [
        { id: "mural-sun", label: "Sunny corner", icon: "&#9728;" },
        { id: "mural-rainbow", label: "Rainbow arc", icon: "&#127752;" },
        { id: "mural-heart", label: "Kind heart", icon: "&#10084;" }
      ],
      success: "Your mural is bright, complete, and ready to inspire kindness."
    }
  },
  {
    id: "good-behaviour-memory",
    ageGroup: "7-10",
    gameType: "memory-puzzle",
    title: "Good Behaviour Memory",
    description: "Match the cards that show positive community behaviour.",
    difficulty: 2,
    background: { place: "Kindness Hall", label: "Memory Puzzle", colors: ["#67cfff", "#8f86ff"] },
    image: { cover: "&#129309;", tokens: ["&#129309;", "&#128694;", "&#128465;"], landscape: "Community behaviour cards on a glowing board" },
    instructions: "Flip the cards and remember where each helpful action is hiding.",
    voiceMessage: "These cards show helpful actions. Use your memory to match them all.",
    rewards: { coins: 4, lesson: "Good habits become easier when you notice them often.", celebration: "confetti" },
    points: 18,
    badge: { id: "memory-helper", name: "Memory Helper", description: "Completed a good behaviour memory puzzle.", icon: "&#129309;" },
    nextLevel: "lunch-line-leaders",
    gameData: {
      visualOnly: false,
      cards: [
        { pairId: "share", icon: "&#129309;", label: "Share" },
        { pairId: "queue", icon: "&#128694;", label: "Wait turn" },
        { pairId: "clean", icon: "&#128465;", label: "Use bin" },
        { pairId: "wave", icon: "&#128075;", label: "Say hello" }
      ]
    }
  },
  {
    id: "lunch-line-leaders",
    ageGroup: "7-10",
    gameType: "decision-sim",
    title: "Lunch Line Leaders",
    description: "Choose the kind action when the lunch line gets busy.",
    difficulty: 2,
    background: { place: "Lunch Hall", label: "Decision Game", colors: ["#7f89ff", "#ff8cb8"] },
    image: { cover: "&#127857;", tokens: ["&#128694;", "&#127857;", "&#129309;"], landscape: "Cartoon lunch hall with a long line" },
    instructions: "Read each choice and tap the kind response.",
    voiceMessage: "The lunch line is getting crowded. Which action keeps things fair and calm?",
    rewards: { coins: 4, lesson: "Fairness means waiting patiently and thinking about others.", celebration: "sparkle" },
    points: 20,
    badge: { id: "line-leader", name: "Line Leader", description: "Made a fair choice in the lunch line.", icon: "&#128694;" },
    nextLevel: "helper-tools-link",
    gameData: {
      prompt: "What should you do?",
      options: [
        { label: "Wait your turn", visual: "&#128694; &#128522;", caption: "Stand calmly and give others space.", correct: true, explanation: "Correct. Waiting your turn keeps the line fair." },
        { label: "Push to the front", visual: "&#128168; &#128694;", caption: "Move ahead because you are hungry.", correct: false, explanation: "Pushing makes the line unfair and stressful." },
        { label: "Laugh at a smaller child", visual: "&#128514; &#128118;", caption: "Make the moment worse for someone else.", correct: false, explanation: "Kind leaders protect others instead of upsetting them." }
      ]
    }
  },
  {
    id: "helper-tools-link",
    ageGroup: "7-10",
    gameType: "relation",
    title: "Helper Tools Link",
    description: "Match each community helper with the tool they use to help others.",
    difficulty: 2,
    background: { place: "Community Street", label: "Helper Match", colors: ["#6fd9b8", "#6eb8ff"] },
    image: { cover: "&#128105;", tokens: ["&#128657;", "&#128658;", "&#128188;"], landscape: "Helpers standing in a colourful town square" },
    instructions: "Connect each helper to the tool that belongs with the job.",
    voiceMessage: "Community helpers make life better for everyone. Let's match them with their tools.",
    rewards: { coins: 4, lesson: "Communities work best when everyone contributes in different ways.", celebration: "sparkle" },
    points: 20,
    badge: { id: "helper-hero", name: "Helper Hero", description: "Linked community helpers to their tools.", icon: "&#128105;" },
    nextLevel: "morning-kindness-order",
    gameData: {
      leftTitle: "Helper",
      rightTitle: "Tool",
      pairs: [
        { id: "doctor", left: "Doctor", right: "Stethoscope", leftIcon: "&#128105;", rightIcon: "&#129658;" },
        { id: "firefighter", left: "Firefighter", right: "Fire truck", leftIcon: "&#128658;", rightIcon: "&#128658;" },
        { id: "teacher", left: "Teacher", right: "Books", leftIcon: "&#128218;", rightIcon: "&#128214;" }
      ]
    }
  },
  {
    id: "morning-kindness-order",
    ageGroup: "7-10",
    gameType: "sequence",
    title: "Morning Kindness Order",
    description: "Place the morning routine steps in the right order before school.",
    difficulty: 2,
    background: { place: "Home Morning", label: "Daily Sequence", colors: ["#68d5ff", "#ffd36d"] },
    image: { cover: "&#127969;", tokens: ["&#9200;", "&#129532;", "&#127859;"], landscape: "Morning routine cards on a bedroom floor" },
    instructions: "Tap the steps in the order they should happen.",
    voiceMessage: "Let's build a kind morning routine in the right order.",
    rewards: { coins: 5, lesson: "Daily routines work best when we follow helpful steps in order.", celebration: "confetti" },
    points: 22,
    badge: { id: "morning-organizer", name: "Morning Organizer", description: "Completed a home routine sequence.", icon: "&#9200;" },
    nextLevel: "recycling-station-sort",
    gameData: {
      steps: [
        { id: "wake-up", label: "Wake up", icon: "&#9200;" },
        { id: "brush-teeth", label: "Brush teeth", icon: "&#129532;" },
        { id: "eat-breakfast", label: "Eat breakfast", icon: "&#127859;" },
        { id: "go-school", label: "Go to school", icon: "&#127979;" }
      ],
      retry: "Think about what happens first at home, then what comes before leaving for school."
    }
  },
  {
    id: "recycling-station-sort",
    ageGroup: "7-10",
    gameType: "drag-sort",
    title: "Recycling Station Sort",
    description: "Sort the reusable items into the community recycling station.",
    difficulty: 2,
    background: { place: "Recycling Tent", label: "Sort and Clean", colors: ["#74d9c7", "#73b7ff"] },
    image: { cover: "&#129689;", tokens: ["&#129380;", "&#128196;", "&#128465;"], landscape: "Community recycling station with bright bins" },
    instructions: "Drag each item into the recycling station.",
    voiceMessage: "These items can be sorted instead of wasted. Let's place them in the right station.",
    rewards: { coins: 5, lesson: "Sorting items carefully helps the whole community recycle better.", celebration: "confetti" },
    points: 22,
    badge: { id: "recycle-ranger", name: "Recycle Ranger", description: "Sorted the recycling station items.", icon: "&#129689;" },
    nextLevel: "community-pattern-lanterns",
    gameData: {
      items: [
        { id: "recycle-bottle", label: "Bottle", icon: "&#129380;" },
        { id: "recycle-paper", label: "Paper", icon: "&#128196;" },
        { id: "recycle-can", label: "Can", icon: "&#129689;" },
        { id: "recycle-box", label: "Box", icon: "&#128230;" }
      ],
      zoneLabel: "Recycling Station",
      zoneIcon: "&#128465;",
      success: "You sorted the station and made recycling easier for everyone."
    }
  },
  {
    id: "community-pattern-lanterns",
    ageGroup: "7-10",
    gameType: "pattern",
    title: "Community Pattern Lanterns",
    description: "Choose the missing image to complete the community lantern pattern.",
    difficulty: 3,
    background: { place: "Festival Lane", label: "Pattern Puzzle", colors: ["#7c79ff", "#ff9bc3"] },
    image: { cover: "&#127982;", tokens: ["&#127775;", "&#127880;", "&#127873;"], landscape: "Festival lantern pattern glowing over a town path" },
    instructions: "Look for the repeating picture pattern and choose the missing one.",
    voiceMessage: "The lantern line has one missing picture. Let's finish the pattern together.",
    rewards: { coins: 5, lesson: "Patterns help you predict what comes next.", celebration: "sparkle" },
    points: 24,
    badge: { id: "pattern-planner", name: "Pattern Planner", description: "Finished a community picture pattern.", icon: "&#127982;" },
    nextLevel: "playground-poster-jigsaw",
    gameData: {
      prompt: "Which image should come next?",
      options: [
        { label: "Star lantern", visual: "&#127775;", caption: "Star", correct: true, explanation: "Yes. The lanterns repeat star, balloon, gift, star." },
        { label: "Balloon lantern", visual: "&#127880;", caption: "Balloon", correct: false, explanation: "Look again. The repeating pattern starts over with the star." },
        { label: "Gift lantern", visual: "&#127873;", caption: "Gift", correct: false, explanation: "This picture comes before the pattern resets." }
      ]
    }
  },
  {
    id: "playground-poster-jigsaw",
    ageGroup: "7-10",
    gameType: "jigsaw",
    title: "Playground Poster Jigsaw",
    description: "Rebuild the playground kindness poster by placing the picture pieces in order.",
    difficulty: 3,
    background: { place: "Playground Path", label: "Image Jigsaw", colors: ["#ff8fc5", "#7fd2ff"] },
    image: { cover: "&#127912;", tokens: ["&#127912;", "&#127752;", "&#11088;"], landscape: "Playground poster broken into colourful tiles" },
    instructions: "Tap the picture pieces in the right order to rebuild the poster.",
    voiceMessage: "The poster pieces are mixed up. Let's rebuild the picture from left to right.",
    rewards: { coins: 6, lesson: "Big tasks become easier when you rebuild them piece by piece.", celebration: "confetti" },
    points: 24,
    badge: { id: "poster-puzzler", name: "Poster Puzzler", description: "Rebuilt the playground poster.", icon: "&#127912;" },
    nextLevel: "daily-routine-puzzle",
    gameData: {
      previewLabel: "Playground kindness poster",
      pieces: [
        { id: "tile-1", label: "Rainbow start", icon: "&#127752;" },
        { id: "tile-2", label: "Helper hands", icon: "&#129309;" },
        { id: "tile-3", label: "Happy star", icon: "&#11088;" },
        { id: "tile-4", label: "Kind banner", icon: "&#127912;" }
      ],
      retry: "Start with the left side of the poster, then keep building the scene."
    }
  },
  {
    id: "daily-routine-puzzle",
    ageGroup: "11-13",
    gameType: "sequence",
    title: "Daily Routine Puzzle",
    description: "Arrange the daily routine steps in the most helpful order.",
    difficulty: 3,
    background: { place: "Routine Lab", label: "Sequence Puzzle", colors: ["#65cbff", "#7f8fff"] },
    image: { cover: "&#128221;", tokens: ["&#9200;", "&#129532;", "&#127979;"], landscape: "Routine cards on a study board" },
    instructions: "Tap the routine steps in the correct order.",
    voiceMessage: "Let's solve the daily routine puzzle by placing each step where it belongs.",
    rewards: { coins: 6, lesson: "Responsible routines help the whole day run smoothly.", celebration: "confetti" },
    points: 26,
    badge: { id: "routine-builder", name: "Routine Builder", description: "Solved a daily routine puzzle.", icon: "&#128221;" },
    nextLevel: "civic-action-order",
    gameData: {
      steps: [
        { id: "wake", label: "Wake up", icon: "&#9200;" },
        { id: "brush", label: "Brush teeth", icon: "&#129532;" },
        { id: "breakfast", label: "Eat breakfast", icon: "&#127859;" },
        { id: "school", label: "Go to school", icon: "&#127979;" }
      ],
      retry: "Start with the very first task of the day and keep moving forward."
    }
  },
  {
    id: "civic-action-order",
    ageGroup: "11-13",
    gameType: "sequence",
    title: "Civic Action Order",
    description: "Put the civic clean-up steps in the right order.",
    difficulty: 3,
    background: { place: "Civic Path", label: "Civic Sequence", colors: ["#7fe3a5", "#68c8ff"] },
    image: { cover: "&#128465;", tokens: ["&#129529;", "&#128694;", "&#129532;"], landscape: "Clean-up action steps on a civic trail" },
    instructions: "Tap the civic steps from first to last.",
    voiceMessage: "A good clean-up plan happens in steps. Let's build the right order.",
    rewards: { coins: 6, lesson: "Good citizenship often means following through step by step.", celebration: "confetti" },
    points: 28,
    badge: { id: "civic-sequencer", name: "Civic Sequencer", description: "Built the right order for a civic action.", icon: "&#128465;" },
    nextLevel: "assembly-banner-jigsaw",
    gameData: {
      steps: [
        { id: "pick-trash", label: "Pick up trash", icon: "&#129529;" },
        { id: "walk-bin", label: "Walk to the bin", icon: "&#128694;" },
        { id: "throw-bin", label: "Throw trash away", icon: "&#128465;" },
        { id: "wash-hands", label: "Wash hands", icon: "&#129532;" }
      ],
      retry: "Think about what should happen before the rubbish reaches the bin."
    }
  },
  {
    id: "assembly-banner-jigsaw",
    ageGroup: "11-13",
    gameType: "jigsaw",
    title: "Assembly Banner Jigsaw",
    description: "Rebuild the responsibility banner so the school assembly can begin.",
    difficulty: 3,
    background: { place: "Assembly Hall", label: "Image Jigsaw", colors: ["#6ed0ff", "#a082ff"] },
    image: { cover: "&#127979;", tokens: ["&#127979;", "&#127775;", "&#128218;"], landscape: "School assembly banner split into bright picture tiles" },
    instructions: "Tap the banner tiles in the right order to rebuild the image.",
    voiceMessage: "The assembly banner is scrambled. Let's put the picture back together carefully.",
    rewards: { coins: 7, lesson: "Large goals become manageable when you restore one piece at a time.", celebration: "confetti" },
    points: 28,
    badge: { id: "banner-builder", name: "Banner Builder", description: "Rebuilt the school assembly banner.", icon: "&#127979;" },
    nextLevel: "respect-pattern-code",
    gameData: {
      previewLabel: "School responsibility banner",
      pieces: [
        { id: "assembly-1", label: "School arch", icon: "&#127979;" },
        { id: "assembly-2", label: "Book stack", icon: "&#128218;" },
        { id: "assembly-3", label: "Hero star", icon: "&#127775;" },
        { id: "assembly-4", label: "Kind ribbon", icon: "&#127894;" },
        { id: "assembly-5", label: "Community leaf", icon: "&#127810;" }
      ],
      retry: "Look for the piece that would start the banner image and build outward from there."
    }
  },
  {
    id: "respect-pattern-code",
    ageGroup: "11-13",
    gameType: "pattern",
    title: "Respect Pattern Code",
    description: "Choose the missing symbol in the respect code pattern.",
    difficulty: 3,
    background: { place: "Logic Loft", label: "Pattern Puzzle", colors: ["#7b8dff", "#6fd3d0"] },
    image: { cover: "&#128161;", tokens: ["&#128161;", "&#129309;", "&#128172;"], landscape: "Logic symbols glowing on a futuristic board" },
    instructions: "Study the symbol pattern and choose the missing picture.",
    voiceMessage: "This respect code has a missing symbol. Let's solve the pattern using logic.",
    rewards: { coins: 7, lesson: "Patterns train your eyes and your reasoning at the same time.", celebration: "sparkle" },
    points: 30,
    badge: { id: "logic-lens", name: "Logic Lens", description: "Solved a respect code pattern.", icon: "&#128161;" },
    nextLevel: "study-circle-links",
    gameData: {
      prompt: "Which symbol should come next?",
      options: [
        { label: "Idea light", visual: "&#128161;", caption: "Idea", correct: false, explanation: "The idea light begins the pattern but does not finish this cycle." },
        { label: "Helping hands", visual: "&#129309;", caption: "Help", correct: true, explanation: "Correct. The pattern loops back to the helping hands symbol here." },
        { label: "Speech bubble", visual: "&#128172;", caption: "Talk", correct: false, explanation: "The speech bubble appears one step earlier in the pattern." }
      ]
    }
  },
  {
    id: "study-circle-links",
    ageGroup: "11-13",
    gameType: "relation",
    title: "Study Circle Links",
    description: "Match each study-circle moment to the fair and responsible response.",
    difficulty: 3,
    background: { place: "Study Circle", label: "Relational Puzzle", colors: ["#7bd0ff", "#7de09f"] },
    image: { cover: "&#128218;", tokens: ["&#128172;", "&#9878;", "&#9997;"], landscape: "Study group moments arranged around a classroom table" },
    instructions: "Connect each moment to the response that helps the group work well.",
    voiceMessage: "Study groups work best when everyone responds fairly. Let's make the right links.",
    rewards: { coins: 7, lesson: "Responsibility often means helping a group stay balanced and respectful.", celebration: "sparkle" },
    points: 30,
    badge: { id: "study-strategist", name: "Study Strategist", description: "Solved a study circle links puzzle.", icon: "&#128218;" },
    nextLevel: "group-chat-choice",
    gameData: {
      leftTitle: "Moment",
      rightTitle: "Response",
      pairs: [
        { id: "quiet-member", left: "A quiet teammate has an idea", right: "Pause and invite them in", leftIcon: "&#128172;", rightIcon: "&#128587;" },
        { id: "too-much-work", left: "One person is doing everything", right: "Rebalance the tasks", leftIcon: "&#128221;", rightIcon: "&#9878;" },
        { id: "missed-note", left: "Someone missed a note", right: "Catch them up kindly", leftIcon: "&#9997;", rightIcon: "&#129309;" }
      ]
    }
  },
  {
    id: "group-chat-choice",
    ageGroup: "11-13",
    gameType: "decision-sim",
    title: "Group Chat Choice",
    description: "Pick the supportive response when a team chat turns impatient.",
    difficulty: 3,
    background: { place: "Digital Club Room", label: "Decision Game", colors: ["#7f86ff", "#ff9bc3"] },
    image: { cover: "&#128241;", tokens: ["&#128172;", "&#128241;", "&#129309;"], landscape: "Group chat screen with team messages" },
    instructions: "Read the options and choose the response that keeps the chat respectful.",
    voiceMessage: "A team chat can become stressful quickly. Choose the message that keeps it helpful.",
    rewards: { coins: 7, lesson: "Digital spaces also need calm, supportive communication.", celebration: "sparkle" },
    points: 32,
    badge: { id: "chat-guardian", name: "Chat Guardian", description: "Chose a respectful response in a team chat.", icon: "&#128241;" },
    nextLevel: "responsibility-memory-grid",
    gameData: {
      prompt: "What should you send?",
      options: [
        { label: "Offer help kindly", visual: "&#128172; &#129309;", caption: "Reply kindly and offer help.", correct: true, explanation: "Supportive replies keep the team chat useful and respectful." },
        { label: "Tell them to stop asking", visual: "&#128683; &#128172;", caption: "Push the person away.", correct: false, explanation: "That answer would make the group feel less safe and welcoming." },
        { label: "Post a rude joke", visual: "&#128514; &#128172;", caption: "Make the moment worse.", correct: false, explanation: "Rude jokes damage trust and distract from solving the real problem." }
      ]
    }
  },
  {
    id: "responsibility-memory-grid",
    ageGroup: "11-13",
    gameType: "memory-puzzle",
    title: "Responsibility Memory Grid",
    description: "Use memory and focus to match the responsibility symbols.",
    difficulty: 4,
    background: { place: "Responsibility Lab", label: "Memory Puzzle", colors: ["#6ec8ff", "#ff92b5"] },
    image: { cover: "&#127919;", tokens: ["&#128273;", "&#127760;", "&#128161;"], landscape: "Responsibility icons arranged in a glowing grid" },
    instructions: "Flip and remember the icons. This grid is larger than the earlier memory rounds.",
    voiceMessage: "This memory grid is bigger. Stay calm, remember each symbol, and match them all.",
    rewards: { coins: 8, lesson: "Strong memory supports planning, organization, and responsibility.", celebration: "confetti" },
    points: 34,
    badge: { id: "grid-guardian", name: "Grid Guardian", description: "Completed the responsibility memory grid.", icon: "&#127919;" },
    nextLevel: "leadership-route-sequence",
    gameData: {
      visualOnly: false,
      cards: [
        { pairId: "privacy", icon: "&#128274;", label: "Privacy" },
        { pairId: "community", icon: "&#127760;", label: "Community" },
        { pairId: "ideas", icon: "&#128161;", label: "Ideas" },
        { pairId: "respect", icon: "&#129309;", label: "Respect" },
        { pairId: "focus", icon: "&#127919;", label: "Focus" }
      ]
    }
  },
  {
    id: "leadership-route-sequence",
    ageGroup: "14-16",
    gameType: "sequence",
    title: "Leadership Route Sequence",
    description: "Plan a supportive response in the right order when a younger student feels lost.",
    difficulty: 4,
    background: { place: "Mentor Hall", label: "Leadership Sequence", colors: ["#7f86ff", "#ff9bc3"] },
    image: { cover: "&#128506;", tokens: ["&#128172;", "&#129309;", "&#127979;"], landscape: "Leadership steps arranged on a mentor hallway map" },
    instructions: "Tap the leadership steps in the order that helps most.",
    voiceMessage: "Good leadership follows a caring plan. Let's build the steps in the right order.",
    rewards: { coins: 8, lesson: "Strong leaders listen first, then guide, then follow through.", celebration: "confetti" },
    points: 34,
    badge: { id: "route-leader", name: "Route Leader", description: "Completed a leadership support sequence.", icon: "&#128506;" },
    nextLevel: "digital-ethics-decision",
    gameData: {
      steps: [
        { id: "ask-help", label: "Ask if they need help", icon: "&#128172;" },
        { id: "guide-route", label: "Guide them to the right place", icon: "&#128506;" },
        { id: "check-feelings", label: "Check they feel okay before leaving", icon: "&#10084;" },
        { id: "follow-up", label: "Let a trusted adult know if needed", icon: "&#128105;" }
      ],
      retry: "Start by understanding the situation before trying to solve the route."
    }
  },
  {
    id: "digital-ethics-decision",
    ageGroup: "14-16",
    gameType: "decision-sim",
    title: "Digital Ethics Decision",
    description: "Choose the most responsible action when someone posts private information.",
    difficulty: 4,
    background: { place: "Digital Commons", label: "Ethics Simulation", colors: ["#6ec8ff", "#ff92b5"] },
    image: { cover: "&#128241;", tokens: ["&#128274;", "&#128172;", "&#128737;"], landscape: "Digital ethics scenario with privacy and social feed icons" },
    instructions: "Read the options and choose the most responsible response.",
    voiceMessage: "Digital leadership matters too. Choose the response that protects privacy and respect.",
    rewards: { coins: 8, lesson: "Ethical choices often protect people before protecting convenience.", celebration: "sparkle" },
    points: 36,
    badge: { id: "ethics-guardian", name: "Ethics Guardian", description: "Handled a digital ethics situation responsibly.", icon: "&#128274;" },
    nextLevel: "resource-fair-share",
    gameData: {
      prompt: "What should you do first?",
      options: [
        { label: "Ask for the post to be removed and protect the person", visual: "&#128274; &#128737;", caption: "Protect privacy right away.", correct: true, explanation: "Correct. Protecting the person's privacy should happen first." },
        { label: "Share the post again", visual: "&#128257; &#128241;", caption: "Spread the problem further.", correct: false, explanation: "Sharing private information again makes the harm worse." },
        { label: "Ignore it because it is online", visual: "&#128533; &#128241;", caption: "Do nothing.", correct: false, explanation: "Ignoring harmful online behaviour leaves the person unprotected." }
      ]
    }
  },
  {
    id: "resource-fair-share",
    ageGroup: "14-16",
    gameType: "drag-sort",
    title: "Resource Fair Share",
    description: "Sort the event supplies into the community station before the project begins.",
    difficulty: 4,
    background: { place: "Service Hub", label: "Fair Share Sort", colors: ["#7de1b4", "#7ac7ff"] },
    image: { cover: "&#127873;", tokens: ["&#128230;", "&#127873;", "&#129309;"], landscape: "Supply crates and donation packs in a service hub" },
    instructions: "Drag the supplies into the fair-share station.",
    voiceMessage: "Before a community project starts, the supplies need to be organized carefully. Let's sort them.",
    rewards: { coins: 9, lesson: "Preparation and fairness help service projects run smoothly.", celebration: "confetti" },
    points: 36,
    badge: { id: "service-sorter", name: "Service Sorter", description: "Organized supplies for a service project.", icon: "&#127873;" },
    nextLevel: "campaign-board-jigsaw",
    gameData: {
      items: [
        { id: "supply-badges", label: "Badges", icon: "&#127991;" },
        { id: "supply-boxes", label: "Boxes", icon: "&#128230;" },
        { id: "supply-sheets", label: "Sheets", icon: "&#128196;" },
        { id: "supply-markers", label: "Markers", icon: "&#128396;" }
      ],
      zoneLabel: "Fair Share Station",
      zoneIcon: "&#129309;",
      success: "You organized the service station so the project can begin fairly."
    }
  },
  {
    id: "campaign-board-jigsaw",
    ageGroup: "14-16",
    gameType: "jigsaw",
    title: "Campaign Board Jigsaw",
    description: "Rebuild the leadership campaign board from its picture pieces.",
    difficulty: 4,
    background: { place: "Leadership Lab", label: "Image Jigsaw", colors: ["#71d1ff", "#9885ff"] },
    image: { cover: "&#127970;", tokens: ["&#127970;", "&#127760;", "&#11088;"], landscape: "Campaign board artwork divided into polished visual tiles" },
    instructions: "Tap the tiles in the order that rebuilds the board from left to right.",
    voiceMessage: "The campaign board is broken into pieces. Let's rebuild the message carefully and completely.",
    rewards: { coins: 9, lesson: "Leadership often means restoring clarity from a messy situation.", celebration: "confetti" },
    points: 38,
    badge: { id: "campaign-crafter", name: "Campaign Crafter", description: "Rebuilt the leadership campaign board.", icon: "&#127970;" },
    nextLevel: "meeting-room-difference",
    gameData: {
      previewLabel: "Leadership campaign board",
      pieces: [
        { id: "campaign-1", label: "Town skyline", icon: "&#127970;" },
        { id: "campaign-2", label: "Community globe", icon: "&#127760;" },
        { id: "campaign-3", label: "Guiding star", icon: "&#11088;" },
        { id: "campaign-4", label: "Helping ribbon", icon: "&#127894;" },
        { id: "campaign-5", label: "Green growth", icon: "&#127810;" },
        { id: "campaign-6", label: "Team hands", icon: "&#129309;" }
      ],
      retry: "Build the campaign board from its first panel before placing the rest."
    }
  },
  {
    id: "meeting-room-difference",
    ageGroup: "14-16",
    gameType: "difference",
    title: "Meeting Room Difference",
    description: "Spot the response that does not belong in a respectful team meeting.",
    difficulty: 4,
    background: { place: "Meeting Room", label: "Find the Difference", colors: ["#7b8cff", "#ffa26d"] },
    image: { cover: "&#128483;", tokens: ["&#128172;", "&#128587;", "&#9889;"], landscape: "Team meeting cards with one disrespectful behaviour" },
    instructions: "Tap the option that looks different from the respectful choices.",
    voiceMessage: "Most of these meeting actions show respect. Can you spot the one that does not belong?",
    rewards: { coins: 9, lesson: "Leadership includes noticing when behaviour breaks a respectful standard.", celebration: "sparkle" },
    points: 38,
    badge: { id: "meeting-mirror", name: "Meeting Mirror", description: "Spotted the behaviour that did not fit a respectful meeting.", icon: "&#128483;" },
    nextLevel: "community-response-links",
    gameData: {
      prompt: "Which action does not belong?",
      options: [
        { label: "Invite quieter voices in", visual: "&#128587; &#128172;", caption: "Make space for others.", correct: false, explanation: "This is a respectful meeting action." },
        { label: "Mock someone who is unsure", visual: "&#128514; &#128100;", caption: "Tear someone down.", correct: true, explanation: "Correct. Mocking someone does not belong in a respectful meeting." },
        { label: "Listen before responding", visual: "&#128066; &#128172;", caption: "Pause and listen.", correct: false, explanation: "This is a responsible team behaviour." }
      ]
    }
  },
  {
    id: "community-response-links",
    ageGroup: "14-16",
    gameType: "relation",
    title: "Community Response Links",
    description: "Match each civic situation with the response that shows leadership and social responsibility.",
    difficulty: 4,
    background: { place: "Community Commons", label: "Leadership Links", colors: ["#6ec8ff", "#ff92b5"] },
    image: { cover: "&#127760;", tokens: ["&#128172;", "&#129309;", "&#128737;"], landscape: "Community response board with civic situations and actions" },
    instructions: "Link each civic situation to the action that helps most.",
    voiceMessage: "Communities need thoughtful leaders. Let's connect each situation to the best response.",
    rewards: { coins: 10, lesson: "Leadership grows when empathy and action work together.", celebration: "confetti" },
    points: 40,
    badge: { id: "commons-captain", name: "Commons Captain", description: "Matched civic situations with strong responses.", icon: "&#127760;" },
    nextLevel: "neighborhood-leadership-finale",
    gameData: {
      leftTitle: "Situation",
      rightTitle: "Leadership Response",
      pairs: [
        { id: "new-voice", left: "A new resident joins the meeting", right: "Invite their ideas", leftIcon: "&#128100;", rightIcon: "&#128172;" },
        { id: "shared-space", left: "A shared area is messy", right: "Reset it for everyone", leftIcon: "&#128230;", rightIcon: "&#129529;" },
        { id: "tense-group", left: "The group feels tense", right: "Model a calm tone", leftIcon: "&#9889;", rightIcon: "&#128524;" }
      ]
    }
  },
  {
    id: "neighborhood-leadership-finale",
    ageGroup: "14-16",
    gameType: "decision-sim",
    title: "Neighborhood Leadership Finale",
    description: "Choose the most responsible action to finish the neighborhood kindness fair successfully.",
    difficulty: 4,
    background: { place: "Sunset Square", label: "Leadership Finale", colors: ["#ff9d79", "#7d8dff"] },
    image: { cover: "&#127749;", tokens: ["&#127970;", "&#128465;", "&#129309;"], landscape: "Neighborhood kindness fair at sunset with a final leadership choice" },
    instructions: "Read the final situation and choose the response that helps the whole community most.",
    voiceMessage: "This is the final leadership choice. Pick the response that protects people, fairness, and the shared space.",
    rewards: { coins: 12, lesson: "Leadership means choosing what helps the whole community, not just what is easiest.", celebration: "confetti" },
    points: 45,
    badge: { id: "kindness-captain", name: "Kindness Captain", description: "Completed the final neighborhood leadership mission.", icon: "&#127942;" },
    nextLevel: null,
    gameData: {
      prompt: "What should the leader do?",
      options: [
        { label: "Stay and organize the final clean-up with the team", visual: "&#128465; &#129309;", caption: "Help finish the event responsibly.", correct: true, explanation: "Correct. Responsible leaders stay engaged until the shared work is finished." },
        { label: "Leave early because your part is done", visual: "&#128694; &#127970;", caption: "Walk away from the shared job.", correct: false, explanation: "Leaving early places the work unfairly on everyone else." },
        { label: "Blame someone else for the mess", visual: "&#128078; &#128165;", caption: "Create tension instead of solutions.", correct: false, explanation: "Blame does not solve the problem or help the community." }
      ]
    }
  }
];
