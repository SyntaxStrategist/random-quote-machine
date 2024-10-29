import React, { useEffect, useState } from 'react';
import './App.css';

const QUOTE_API_URL = 'https://api.quotable.io/random';

function App() {
    const [quote, setQuote] = useState('Loading...');
    const [author, setAuthor] = useState('');

    // Function to fetch a new quote
    const fetchQuote = async () => {
        try {
            const response = await fetch(QUOTE_API_URL);
            if (!response.ok) throw new Error("Network response was not ok");
            
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.error("Error fetching quote:", error);
            setQuote("Oops! Something went wrong.");
            setAuthor("");
        }
    };

    // Fetch a quote on initial load
    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div id="quote-box">
            <p id="text">{quote}</p>
            <p id="author">- {author}</p>
            <button id="new-quote" onClick={fetchQuote}>New Quote</button>
            <a 
                id="tweet-quote" 
                target="_blank" 
                rel="noopener noreferrer" 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} - ${encodeURIComponent(author)}`}>
                Tweet Quote
            </a>
        </div>
    );
}

export default App;
