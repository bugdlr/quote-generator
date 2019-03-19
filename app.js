class Quote {
    constructor(text, author) {
        this.text = text;
        this.author = author;
    }
}

const allQuotes = [
  new Quote('Begin to be now what you will be hereafter.', "William James"),
  new Quote('Be miserable. Or motivate yourself. Whatever has to be done, it\'s always a choice.', "Wayne Dyer"),
  new Quote('If you fell down yesterday, stand up today.', "H.G. Wells"),
  new Quote('Always work hard. Intensity clarifies. It creates not only momentum, but also the pressure you need to feel either friction, or fulfillment.', "Marcus Buckingham"),
  new Quote('Challenges are what make life interesting and overcoming them is what makes life meaningful.', "Joshua J. Marine"),
  new Quote('Courage is resistance to fear, master of fear--not absence of fear.', "Mark Twain"),
  new Quote('Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.', "Dale Carnegie"),
  new Quote('Do not wait to strike till the iron is hot; but make it hot by striking', "William B. Sprague"),
  new Quote('Do you want to know who you are? Don\'t ask. Act! Action will delineate and define you.', "Thomas Jefferson"),
  new Quote('Do your work with you whole heart, and you will succeed--there\'s so little competition.', "Elbert Hubbard"),
  new Quote('Don\'t let what you cannot do interfere with what you can do.', "John R. Wooden"),
  new Quote('Enthusiasm is the engergy and force that builds literal momentum of the human soul and mind.', "Bryant H. McGill"),
  new Quote('Fortune favors the brave.', "Publius Terence"),
  new Quote('I find that the harder I work, the more luck I seem to have.', "Thomas Jefferson"),
  new Quote('Happiness is not something ready made. It comes from your own actions.', "Dalai Lama"),
  new Quote('First say to yourself what you would be: and then do what you have to do.', "Epictetus"),
  new Quote('If you do what you always did, you will get what you always gotten.', "Tony Robbins"),
  new Quote('If you have the guts to keep making mistakes, your wisdom and intelligence leap forward with huge momentum.', "Holly Near"),
  new Quote('A year from now you may wish you had started today.', "Karen Lamb"),
  new Quote('One part at a time, one day at a time, we can accomplish any goal we set for ourselves.', "Karen Casey")
]

// generate random number used to get quotes and colors
let random = (thing) => Math.floor(Math.random() * thing.length);

function getNewQuote() {
  let lastQuote, newQuote;
  // get random quote
  newQuote = allQuotes[random(allQuotes)];
  // if the quote is different from the last quote (so that you don't get the same quote in a row)
  if (newQuote !== lastQuote) {
    // display quote
    document.getElementById("text").textContent = `"${newQuote.text}"`;
    // display author
    document.getElementById("author").textContent = `-${newQuote.author}`;
    // set up tweet
    let tweetQuote = newQuote.text.split(' ').join('%20');
    let tweetAuthor = newQuote.author.split(' ').join('%20');
    tweetQuote = 'https://twitter.com/intent/tweet?text=' + '"' + tweetQuote + '"' + ' --' + tweetAuthor;
    document.getElementById('tweet-quote').setAttribute('href', tweetQuote);
  } else {
    // if the quote is the same, try again
    newQuote = allQuotes[random(allQuotes)];
    getNewQuote();
  }
  // change colors
  getNewColors();
  return lastQuote = newQuote;
};

// color generator
const colors = ['#92B558', '#DC4C46', '#672e3b', '#c48f65', '#223a5e', '#898e8c', '#005960', '#9c9a40', '#4F84C4', '#578CA9', '#004b8d', '#ce3175', '#5a7247', '#cfb095', '#95dee3'];

let currentColor;

function getNewColors() {
  let newColor;
  newColor = random(colors);
  // if it's a different color (so that you don't get the same color in a row)
  if (newColor !== currentColor) {
    // change the colors
    document.body.style.backgroundColor = colors[newColor];
    document.getElementById('new-quote').style.backgroundColor = colors[newColor];
    document.getElementById('tweet-quote').style.backgroundColor = colors[newColor];
  } else {
    getNewColors();
  }
  return currentColor = newColor;
};

getNewQuote();

// new quote event listener
document.getElementById('new-quote').addEventListener('click', getNewQuote);
