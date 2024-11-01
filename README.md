# Random Quote Machine

## Description

The **Random Quote Machine** is a web application that fetches and displays random quotes from an external API. Users can view a new quote and share it on Twitter. This project is built using React and demonstrates the use of functional components, state management, and API calls.

## Features

- Displays a random quote along with the author's name.
- Fetches new quotes at the click of a button.
- Allows users to tweet the current quote.
- Responsive design for an optimal viewing experience on various devices.

## User Stories

- **User Story #1**: I can see a wrapper element with the corresponding `id="quote-box"`.
- **User Story #2**: Within `#quote-box`, I can see an element with the corresponding `id="text"` that displays the quote.
- **User Story #3**: Within `#quote-box`, I can see an element with the corresponding `id="author"` that displays the author's name.
- **User Story #4**: Within `#quote-box`, I can see a clickable element with the corresponding `id="new-quote"` that fetches a new quote.
- **User Story #5**: Within `#quote-box`, I can see a clickable `a` element with the corresponding `id="tweet-quote"` that allows me to tweet the quote.
- **User Story #6**: On first load, my quote machine displays a random quote in the element with `id="text"`.
- **User Story #7**: On first load, my quote machine displays the random quote's author in the element with `id="author"`.
- **User Story #8**: When the `#new-quote` button is clicked, my quote machine fetches a new quote and displays it in the `#text` element.
- **User Story #9**: My quote machine fetches the new quote's author when the `#new-quote` button is clicked and displays it in the `#author` element.
- **User Story #10**: I can tweet the current quote by clicking on the `#tweet-quote` `a` element.
- **User Story #11**: The `#quote-box` wrapper element is horizontally centered.

## Technologies Used

- **Frontend**: React
- **API**: [Quotable API](https://api.quotable.io)
- **CSS**: (Optional) Bootstrap or SASS for styling

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SyntaxStrategist/random-quote-machine.git
   ```

2. Navigate into the project directory:

   ```bash
   cd random-quote-machine
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the need for quick and inspirational quotes.
- Special thanks to the Quotable API for providing the quotes.
