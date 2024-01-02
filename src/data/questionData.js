export const questions = [
  {
    questionType: 'regular',
    statusBarValue: '20',
    image: '/compass.png',
    headerText: 'Complete the following sentence... ',
    questionText: 'My credit score is: ',
    subText: '(Take your best guess!)',
    options:['Just getting started (0-619)', "On it's way up (620-719)", "Pro status (720-850)"],
    helperText: [
      "What's a credit score?",
    ],
    helperPopUp: [
      "A credit score is like a numerical grade that tells lenders how risky it might be to lend you money. It's based on your financial history, like how reliably you've paid bills and managed debt. A higher score means you're seen as less risky, making it easier to get loans or credit cards with better terms.",
      "In simple terms, it's a number that summarizes how good you are at managing money and affects your ability to borrow. ",
      "Keep in mind that you might not always have access to credit score monitoring. You do have the right to request a free credit report every year each from Equifax, Experian, and TransUnion, which are the major consumer reporting companies. Additionally, your credit card issuer may offer free credit reports."
  ]
  },
  {
    questionType: 'twoImages',
    statusBarValue: '35',
    image: '/roadSigns.png',
    questionText: "Choose a card that's right for you. Which direction do you want to go in?",
    options:['/cardOne.png', '/cardTwo.png', '/cardThree.png'],
    helperText: [
      "Select a card to see more details.",
    ]
  },
  {
    questionType: 'regular',
    statusBarValue: '50',
    image: '/trees.png',
    headerText: "Let's use that new card! Just remember, money doesn't grow on trees, so only spend what you can afford. What's essential this month?",
    options: ['$ Takeout & TV', '$$ Night out with friends', '$$$ Weekend cabin getaway'],
  },
  {
    questionType: 'singleOption',
    statusBarValue: '65',
    image: '/crutches.png',
    headerText: "Oh no! You twisted your ankle and need medical attention. Life happens, and sometimes it’s costly.",
    options: ['Pay with card'],
  },
  {
    questionType: 'singleOption2',
    statusBarValue: '65',
    image: '/crutches.png',
    headerText: "Your credit card can come in handy for emergencies, but don’t use it as a crutch and forget about that bill later",
    options: ['Pay with card'],
  },
  {
    questionType: 'none',
    statusBarValue: '80',
    image: '/piggyBank.png',
    headerText: "The month is ending and your bill is due. Here's how you spent your money:",
    date: new Date().toLocaleDateString(),
    statement1:['Food Delivery', 'Movie Rental', 'Hospital'],
    costs1:[30, 4, 1069.13],
    statement2:['Restaurant', 'ABC Theater', 'Hospital'],
    costs2:[58.71, 12.52, 1069.13],
    statement3:['Cabin', 'Rental Car', 'Hospital'],
    costs3:[200, 154.73, 1069.13],
    // options: ['Pay with card'],
    helperText: [
      "What's a Statement? Balance?",
    ],
    helperPopUpHeading1: ['Statement'],
    helperPopUpText1:["A credit card statement is like a monthly bill that tells you how much money you've spent with your credit card, how much you owe, and when you need to make a payment.",
    "In simple terms, it's a number that summarizes how good you are at managing money and affects your ability to borrow. "],
    helperPopUpHeading2:["Balance"],
    helperPopUpText2: ["A credit card balance is the amount of money you owe to the credit card company. 'Carrying a balance' means you haven't paid off the full amount you owe by the due date, which means you’ll likely also owe interest."]
  },
  {
    questionType: 'pay-bill',
    statusBarValue: '90',
    image: '/piggyBank.png',
    headerText: "How will you navigate paying your bill?",
    options: ['Pay the minimum', 'Pay the whole thing off'],
    helperText: [
      "Reminder...",
    ],
    helperPopUpHeading1: ['Remember:'],
    helperPopUp: [
    "If you don't pay your full bill, you'll owe extra money in interest. Pay in full when you can, but sometimes, life happens."
    ]
  },
  {
    questionType: 'result-1',
    image: '/yay.png',
    headerText: "The results are in:",
    questionText: "You're a trail blazer!",
    subText: "You paid your bill with no added interest or fees.",
    helperText: [
      "What does that mean?",
      "Tell me more",
      "Show me!",
    ],
    helperPopUp: [
      "You paid off your credit card bill in full and accrued $0 in interest and fees. Your credit score is skyrocketing, getting you closer to your dream home. Time to enjoy the view!",
      "A credit score is like a numerical grade that tells lenders how risky it might be to lend you money. It's based on your financial history, like how reliably you've paid bills and managed debt. A higher score means you're seen as less risky, making it easier to get loans or credit cards with better terms. In simple terms, it's a number that summarizes how good you are at managing money and affects your ability to borrow.",
      "Balance $1,105.36 + 29.7% interest = ",
      "$1,433.65",
      "That's an expensive month!"
    ]
  },
  {
    questionType: 'result-2',
    image: '/creditNewbie.png',
    headerText: "The results are in:",
    questionText: "You're a classic credit newbie!",
    subText: "But growth is key and everyone’s on their own journey. Great start!",
    helperText: [
      "What happened?",
      "Tell me more.",
      "How much?"
    ],
    helperPopUp: [
      "You paid off some of your credit card bill but accrued $328.29 in interest and fees, making your monthly expenses higher than needed.",
      "A credit score is like a numerical grade that tells lenders how risky it might be to lend you money. It's based on your financial history, like how reliably you've paid bills and managed debt. A higher score means you're seen as less risky, making it easier to get loans or credit cards with better terms. In simple terms, it's a number that summarizes how good you are at managing money and affects your ability to borrow.",
      "Balance $1,105.36 + 29.7% interest = ",
      "$1,433.65",
      "That's one expensive month!",
      "Want to see what you’d owe if you were on a different path this month?",
      "Just your monthly spending (no fees or interest)!"
    ]
  },

]