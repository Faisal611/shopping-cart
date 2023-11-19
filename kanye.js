// Api Array Function
const loadQuotes = () => {
    fetch('https://api.kanye.rest')
        .then(response =>response.json())
        .then(data => displayQuote(data))
}

const displayQuote = (data) => {
    const quoteTextId = document.getElementById('quoteId');
    const hhh = quoteTextId.innerText = data.quote
    console.log(hhh)
}
