var btn = document.querySelector("#btn");
var output = document.querySelector("#output");
var quotes = [
  `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  ― Frank Zappa`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,
  `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,
  `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey`,
  `“You only live once, but if you do it right, once is enough.”
― Mae West`,
  `“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,
  `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
― J.K. Rowling, Harry Potter and the Goblet of Fire`,
  `“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”
― Albert Camus`,
  `“If you tell the truth, you don't have to remember anything.”
― Mark Twain`,
  `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
― Maya Angelou`,
  `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
― C.S. Lewis, The Four Loves`,
  `“To live is the rarest thing in the world. Most people exist, that is all.”
― Oscar Wilde`,
  `“A friend is someone who knows all about you and still loves you.”
― Elbert Hubbard`,
  `“Always forgive your enemies; nothing annoys them so much.”
― Oscar Wilde`,
];

btn.addEventListener("click", function () {
  var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuotes;
});
