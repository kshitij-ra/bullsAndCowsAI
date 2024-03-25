# Bulls and Cows with AI

Bulls and Cows with AI is a simple guessing game where players try to guess a secret number within a limited number of attempts. The game features an AI opponent that generates guesses based on the player's feedback.

## Gameplay

- The game starts with the player entering a secret 4-digit number with unique digits.
- The player then makes guesses, and the AI opponent responds with the number of bulls and cows.
  - A "bull" indicates a correct digit in the correct position.
  - A "cow" indicates a correct digit in the wrong position.
- The player continues making guesses until they correctly guess the AI's secret number or AI guesses the users secret number first.

## Features

- AI opponent with customizable difficulty levels.
- User-friendly interface with intuitive controls.
- Real-time feedback on guesses.
- Error handling for invalid inputs.

## Getting Started

To run the game locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/kshitij-ra/bulls-and-cows.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bulls-and-cows
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to play the game.

## Technologies Used

- React: JavaScript library for building user interfaces.
- HTML/CSS: Markup and styling languages for web development.
- JavaScript: Programming language for adding interactivity to web pages.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Inspired by the classic Bulls and Cows game.