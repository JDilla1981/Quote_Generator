let quotes = [
    " Our greatest glory is not in never falling, but in rising every time we fall – Confucius",
    " You will face many defeats in life, but never let yourself be defeated – Maya Angelou",
    "You may be disappointed if you fail, but you are doomed if you don’t try – Beverly Sills",
    "Failure will never overtake me if my determination to succeed is strong enough – Og Mandino",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character – Unknown",
    "It’s not whether you get knocked down, it’s whether you get up – Vince Lombardi",
    "It’s during our darkest moments that we must focus to see the light – Aristotle",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up – Thomas A. Edison "

];

const newQuote = () => {
    const randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

console.log(newQuote());