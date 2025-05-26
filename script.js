// let apiQuotes = [];

// new quotes 
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const xButton = document.getElementById("xbuttton");
const newQuotebutton = document.getElementById("new-quote-buttton")
const loader = document.getElementById("loader");

// show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hide loading
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}
function newQuote() {
    loading();
    // random quote
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // checking if the author field is null and replaces it with "Unknown"
    if (!quote.Author) {
        quoteAuthor.textContent = 'Unknown'
    } else {
        quoteAuthor.textContent = quote.Author;
    }
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    complete();
}
// tweet quote on X
function qouteX() {
    const xUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(xUrl, '_blank');
}
// Event listeners to enable buttons
newQuotebutton.addEventListener('click', newQuote);
xButton.addEventListener('click', qouteX);
// // Get Quotes from API
// async function getQuote() {
//     const apiURL = 'https://zenquotes.io/api/quotes';
//     try {
//         const response = await fetch(apiURL);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // Catch error here
//     }
// }

// // on load
// getQuote ();
newQuote();