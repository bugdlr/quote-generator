const DOMstrings = {
  quoteBox: 'quote-box',
  text: 'text',
  author: 'author',
  newQuoteBtn: 'new-quote',
  tweetQuoteBtn: 'tweet-quote'
}

class Quote {
    constructor(text, author) {
        this.text = text;
        this.author = author;
    }
}

const allQuotes = [
  new Quote('"Begin to be now what you will be hereafter."', "William James"),
  new Quote('"Be miserable. Or motivate yourself. Whatever has to be done, it\'s always a choice."', "Wayne Dyer"),
  new Quote('"If you fell down yesterday, stand up today."', "H.G. Wells"),
  new Quote('"Always work hard. Intensity clarifies. It creates not only momentum, but also the pressure you need to feel either friction, or fulfillment."', "Marcus Buckingham"),
  new Quote('"Challenges are what make life interesting and overcoming them is what makes life meaningful."', "Joshua J. Marine")
]

let random = (thing) => Math.floor(Math.random() * thing.length);

function getNewQuote() {
  let lastQuote, newQuote;
  newQuote = allQuotes[random(allQuotes)];
  if (newQuote !== lastQuote) {
    document.getElementById("text").textContent = `${newQuote.text} ${newQuote.author}`;
    getNewColors();
  } else {
    newQuote = allQuotes[random(allQuotes)];
  }
  lastQuote = newQuote;
}


// color generator
const colors = ['#92B558', '#DC4C46', '#672e3b', '#c48f65', '#223a5e', '#898e8c', '#005960', '#9c9a40', '#4F84C4', '#578CA9', '#004b8d', '#edcdc2', '#ce3175', '#5a7247', '#cfb095', '#95dee3'];

function getNewColors() {
  let newColor = random(colors);
  document.body.style.backgroundColor = colors[newColor];
  document.getElementById('new-quote').style.backgroundColor = colors[newColor];
  document.getElementById('tweet-quote').style.backgroundColor = colors[newColor];
};

getNewQuote();

document.getElementById('new-quote').addEventListener('click', getNewQuote);
