# 🎮 Memory Card Game

A classic memory card matching game built with React and Vite. Test your memory by finding all pairs of matching cards!

## ✨ Features

- **Interactive Gameplay**: Flip cards to reveal images and match pairs.
- **Score Tracking**: Keep track of your matches.
- **Move Counter**: Monitor how many moves it takes to complete the game.
- **Win Notification**: Celebrate your victory with a toast notification showing your total moves.
- **Responsive Design**: Playable on various screen sizes.
- **New Game**: Easily reset the board to start a fresh game.

## 🛠️ Tech Stack

- **[React](https://react.dev/)**: JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling for fast development and building.
- **[react-hot-toast](https://react-hot-toast.com/)**: For beautiful and accessible toast notifications.
- **CSS**: Custom styling for cards and layout.

## 🚀 Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd memory_card
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

### Building for Production

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📂 Project Structure

```
memory_card/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Card.jsx     # Individual card component
│   │   └── GameHeader.jsx # Header with score and controls
│   ├── hooks/           # Custom hooks
│   │   └── useGameLogic.js # Core game logic (state, shuffling, matching)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .gitignore           # Git ignore file
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite configuration
```

## 🧩 How to Play

1.  Click on a card to flip it over.
2.  Click on a second card to try and find a match.
3.  If the images match, the cards stay face up.
4.  If they don't match, they flip back over after a short delay.
5.  Continue until all pairs are matched!

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is open source and available for personal and educational use.
