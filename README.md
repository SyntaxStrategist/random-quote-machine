# Random Quote Machine

## Description

The Random Quote Machine is a simple web application that fetches and displays random quotes from an external API. Users can view a new quote and share it on Twitter. This project is built using React and demonstrates the use of functional components, state management, and API calls.

## Features

- Displays a random quote and the author's name.
- Fetches new quotes at the click of a button.
- Allows users to tweet the current quote.
- Responsive design for an optimal viewing experience.

## User Stories

- **User Story #1**: I can see a wrapper element with a corresponding `id="quote-box"`.
- **User Story #2**: Within `#quote-box`, I can see an element with a corresponding `id="text"`.
- **User Story #3**: Within `#quote-box`, I can see an element with a corresponding `id="author"`.
- **User Story #4**: Within `#quote-box`, I can see a clickable element with a corresponding `id="new-quote"`.
- **User Story #5**: Within `#quote-box`, I can see a clickable `a` element with a corresponding `id="tweet-quote"`.
- **User Story #6**: On first load, my quote machine displays a random quote in the element with `id="text"`.
- **User Story #7**: On first load, my quote machine displays the random quote's author in the element with `id="author"`.
- **User Story #8**: When the `#new-quote` button is clicked, my quote machine should fetch a new quote and display it in the `#text` element.
- **User Story #9**: My quote machine should fetch the new quote's author when the `#new-quote` button is clicked and display it in the `#author` element.
- **User Story #10**: I can tweet the current quote by clicking on the `#tweet-quote` `a` element.
- **User Story #11**: The `#quote-box` wrapper element should be horizontally centered.

## Technologies Used

- **Frontend**: React
- **API**: [Quotable API](https://api.quotable.io)
- **CSS**: (Optional) Bootstrap/SASS for styling

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/random-quote-machine.git

