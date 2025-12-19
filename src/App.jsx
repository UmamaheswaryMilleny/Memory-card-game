import GameHeader from "./components/GameHeader";
import Card from "./components/Card";
import { useGameLogic } from "./hooks/useGameLogic";
import { Toaster } from "react-hot-toast";

const cardValues = [
  "🍎",
  "🍐",
  "🍋",
  "🍌",
  "🍉",
  "🍓",
  "🫐",
  "🍒",
  "🍎",
  "🍐",
  "🍋",
  "🍌",
  "🍉",
  "🍓",
  "🫐",
  "🍒",
];

function App() {

  const {cards, score,moves,handleCardClick,initializeGame}=useGameLogic(cardValues)

  return (
    <div className="app">
            <Toaster position="top-center" />
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
   

      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
