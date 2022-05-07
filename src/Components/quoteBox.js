import React, { useState , useEffect} from 'react';
const QuoteBox = () => {
    // eslint-disable-next-line
    const [quotes, setQuotes] = useState(''); 

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
            .then((res => res.json()))
            .then(data => {
                let randomNum = Math.floor(Math.random() * data.length);
                setQuotes(data[randomNum]);
                console.log(quotes);
            });
    }
    
    useEffect(() => {
        getQuote();
    }, [])

    return ( 
        <div id='quoteBox'>
            <h4 id='text'>{quotes.text}</h4>
            <p id='author'>{quotes.author}</p>
            <button id='new-quote' onClick={getQuote}>Get quote</button>
            <button id='tweet-quote'>Tweet</button>
        </div>
     );
}
 
export default QuoteBox;
