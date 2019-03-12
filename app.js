const quotes;

const DOMstrings = {
  quoteBox: 'quote-box',
  text: 'text',
  author: 'author',
  newQuoteBtn: 'new-quote',
  tweetQuoteBtn: 'tweet-quote'
}

document.querySelector('h1').addEventListener('click', function(){
  console.log('h1 was clicked');
})


quotes = [
  {text: "Begin to be now what you will be hereafter.",
  author: "William James"},
  {text: "Be miserable. Or motivate yourself. Whatever has to be done, it's always a choice.",
  author: "Wayne Dyer"},
  {text: "If you fell down yesterday, stand up today.",
  author: "H.G. Wells"},
  {text: "Always work hard. Intensity clarifies. It creates not only momentum, but also the pressure you need to feel either friction, or fulfillment.",
  author: "Marcus Buckingham"}
]
