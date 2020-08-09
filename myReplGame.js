const readlineSync = require("readline-sync");

readlineSync.setDefaultOptions({ limit: ["a", "b", "c", "A", "B", "C"] });

var colors = require("colors");

//STORYLINE:

//Welcome the user - It's Friday night, Barbie & Ken are going on their 4th date <3
//Barbie is freaking out! What should she wear? What if she doesn't like the
//restaurant Ken picks? Will they have their first kiss? So much can happen tonight! Can you help Barbie get ready for her date?

//Barbie: "First thing's first what should I wear tonight?" "I have a cute blue mini dress that compliments my eyes, these leather leggings with a tanktop and a leather jacket, or I can wear a pair of jeans with a cute blazer."
//Present choices for selection

//Barbie: "Ok! I will wear the DRESS-CHOICE! I'll go get dressed and finish getting ready. I have to hurry! Ken will be here any minute."

//KEN ARRIVES. DING-DONG!
//Barbie: "He's here!" Barbie opens the front door and greets Ken.
//Ken: "Hi Barbie! Wow! You look amazing. Ready to go?"

//KEN AND BARBIE HEAD OVER TO SOKAI, A JAPAENESE-PREUVIAN FUSION RESTAURANT. YUM!

//Barbie thinks to herself: "Hmm... What should I have?"
//The menu has a number of choices. Barbie is eyeing the sushi pizza, the beef tenderloin stir fry and the salmon tacos. Which one do you think she should choose?
//Present choices for selection

//BARBIE AND KEN ARE CHATTING, KEN ASKS BARBIE TO BE HIS GIRLFRIEND
//Ken: I am stuffed! Did you like your BARBIES FOOD SELECTION?Barbie, I have had a great time with you over these last few dates, I would really like to make you a part of my life. Will you be my girlfriend.
//What should Barbie do?
//Present choices for selection: 1) YES! 2) I think its too soon Ken, is it ok if we get to know each other more? 3)No, I was really just looking to have fun.

//DINNER ENDS, KEN DRIVES BARBIE HOME AND WALKS HER TO HER DOOR
//Scenarios: If Barbie says yes: Ken says "Barbie, I had so much fun tonight. See you tomorrow, girlfriend." and leans in for a kiss.
//If Barbie said it's too soon, Ken says "Barbie, I had so much fun tonight. I hope you did too. I'll call you tomorrow to setup another date?"
//If Barbie said no, Ken says: "I undestand you were only looking for fun Barbie, but I am looking for a relationship, it might be best for us to just be friends, I'll see you around."

// I LOVE THIS STORY!!

//INTRODUCTION

console.log(
  "\n\n                               DATE NIGHT ".yellow.bold +
    "<3                                             ".brightRed.bold
);

console.log(
  "\n\nIt's Friday night, Barbie & Ken are going on their 4th date.\n"
);

console.log(
  "Barbie is freaking out! What should she wear? What if she doesn't like the restaurant Ken picks? Will they have their first kiss?\n\nSo much can happen tonight! Can you help Barbie get ready for her date?\n"
);

console.log(
  "Barbie:".brightMagenta.bold +
    '"First things first what should I wear tonight? I have:\n a) A cute blue mini dress that compliments my eyes\n b) These leather leggings with a tanktop and a leather jacket\n c) A pair of jeans with a cute blazer."'
);

//QUESTION 1
let outfit = readlineSync.keyIn(
  "\nWhat should barbie wear? " + "PRESS: a, b or c to choose\n".underline,
  { limit: "abcABC" }
);

if (outfit == "a" || outfit == "A") {
  console.log(
    "\nBarbie:".brightMagenta.bold +
      '"Ok! I will wear the cute blue mini! I\'ll go get dressed and finish getting ready. I have to hurry! Ken will be here any minute."'
  );
} else if (outfit == "b" || outfit == "B") {
  console.log(
    "\nBarbie:".brightMagenta.bold +
      '"Ok! I will wear the leather leggings and jacket! I\'ll go get dressed and finish getting ready. I have to hurry! Ken will be here any minute."'
  );
} else if (outfit == "c" || outfit == "C") {
  console.log(
    "\nBarbie:".brightMagenta.bold +
      '"Ok! I will wear the jeans and the blazer! I love this blazer. I\'ll go get dressed and finish getting ready. I have to hurry! Ken will be here any minute."'
  );
}

console.log("\n\nKEN ARRIVES. DING-DONG!\n\n".brightGreen);

console.log(
  "Barbie:".brightMagenta.bold +
    '"He\'s here!" Barbie opens the front door and greets Ken.'
);
console.log(
  "\nKen:".brightCyan.bold +
    '"Hi Barbie! Wow! You look amazing. Ready to go?"\n'
);

console.log(
  "\nKEN AND BARBIE HEAD OVER TO SOKAI, A JAPANESE-PERUVIAN FUSION RESTAURANT. YUM!\n"
    .brightGreen
);

console.log('\nBarbie thinks to herself: "Hmm... What should I have?"');

//QUESTION 2
console.log(
  "\nThe menu has a number of choices. Barbie is eyeing the sushi pizza, the beef tenderloin stir fry and the salmon tacos.\n"
);

let food = readlineSync.keyIn(
  "Which one do you think she should choose? " +
    "PRESS: a, b or c to choose".underline +
    "\n a) Sushi Pizza\n b) Beef Tenderloin Stir Fry\n c) Salmon Tacos\n",
  { limit: "abcABC" }
);

console.log(
  "\nBARBIE AND KEN ARE CHATTING, KEN ASKS BARBIE TO BE HIS GIRLFRIEND\n"
    .brightGreen
);

if (food == "a" || food == "A") {
  console.log(
    "\nKen:".brightCyan.bold + '"I am stuffed! Did you like your sushi pizza?"'
  );
} else if (food == "b" || food == "B") {
  console.log(
    "\nKen:".brightCyan.bold +
      '"I am stuffed! Did you like your beef tenderloin?"'
  );
} else if (food == "c" || food == "C") {
  console.log(
    "\nKen:".brightCyan.bold + '"I am stuffed! Did you like your salmon tacos?"'
  );
}

console.log(
  "\nBarbie:".brightMagenta.bold + '"It was absolutely delicious!"\n'
);

console.log(
  "\nKen:".brightCyan.bold +
    '"Barbie, I have had a great time with you over these last few dates, I would really like to make you a part of my life. Will you be my girlfriend?"'
);

//QUESTION 3

let gfAnswer = readlineSync.keyIn(
  "\nWhat should Barbie say? " +
    "PRESS: a, b or c to choose".underline +
    "\n a) YES!\n b) I think its too soon Ken, is it ok if we get to know each other more?\n c) No, I was really just looking to have fun.\n",
  { limit: "abcABC" }
);

console.log(
  "\nDINNER ENDS, KEN DRIVES BARBIE HOME AND WALKS HER TO HER DOOR\n\n"
    .brightGreen
);

if (gfAnswer == "a" || gfAnswer == "A") {
  console.log(
    "\nKen:".brightCyan.bold +
      '"Barbie, I had so much fun tonight. See you tomorrow, girlfriend." and leans in for a kiss.'
  );
} else if (gfAnswer == "b" || gfAnswer == "B") {
  console.log(
    "\nKen:".brightCyan.bold +
      '"Barbie, I had so much fun tonight. I hope you did too. I\'ll call you tomorrow to setup another date?"'
  );
} else if (gfAnswer == "c" || gfAnswer == "C") {
  console.log(
    "\nKen:".brightCyan.bold +
      '"I undestand you were only looking for fun Barbie, but I am looking for a relationship, it might be best for us to just be friends, I\'ll see you around."'
  );
}

console.log(
  "\n\nBARBIE SAYS GOOD NIGHT, GOES IN HER HOME & SHUTS THE DOOR\n\n"
    .brightGreen
);

if (gfAnswer == "a" || gfAnswer == "A") {
  console.log(
    "Barbie:".brightMagenta.bold +
      '"I am so happy he asked me to be his girlfriend. He is such a sweet guy. Thanks for helping me tonight my friend!"'
  );
} else if (gfAnswer == "b" || gfAnswer == "B") {
  console.log(
    "Barbie:".brightMagenta.bold +
      '"He is such a sweet guy. I hope we continue to get to know each other so that when he asks next time I can say yes. Thanks for helping me tonight my friend!"'
  );
} else if (gfAnswer == "c" || gfAnswer == "C") {
  console.log(
    "Barbie:".brightMagenta.bold +
      '"He is such a sweet guy. I felt bad saing no, but it just isn\'t what I want right now. Hopefully, we can be good friends. Thanks for helping me tonight my friend!"'
  );
}

console.log(
  "\n\n   *****************************     GAME OVER    *****************************    \n\n"
    .brightRed.bold
);
