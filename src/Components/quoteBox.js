import React, { useState , useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { CenterFocusStrong } from '@mui/icons-material';

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
        <Card id='quote-box' sx={{display: 'inline-block', minWidth: 400, mx: '2px'}}>
            <h4 id='text' style={{padding: '5px'}}>{quotes.text}</h4>
            {
                (quotes.author === null)
                    ? <p id='author'>Unknown</p>
                    : <p id='author'>{quotes.author}</p>
            }
            <div className='buttonFooter' style={{marginBottom: '5px'}}>
                <Button variant="outlined" id='new-quote' onClick={getQuote}>Get quote</Button>
                <Button
                href={`https://twitter.com/intent/tweet?text=${quotes.text}-${quotes.author}`}
                target={"_blank"} 
                variant="outlined" id='tweet-quote'>
                    Tweet
                </Button>
            </div>
        </Card>
     );
}
 
export default QuoteBox;
// href={`https://twitter.com/intent/tweet?=${}`}