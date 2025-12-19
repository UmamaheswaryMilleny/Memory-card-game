import GameHeader from "./components/GameHeader";
import Card from "./components/Card";
import { useGameLogic } from "./hooks/useGameLogic";
import { Toaster } from "react-hot-toast";

const cardValues = [
"https://i.pinimg.com/1200x/78/02/9c/78029c0b83f6791d758c773771a32f62.jpg",
  "https://i.pinimg.com/236x/65/f9/fe/65f9fe8807063ae091f5ab32433f2393.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyT8n-SA4Vy6CVhRvwdSGAcgnTKKMGaKhz5Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeYxkrri6lBiVpePWp6Sqm237SsatTkwSQg&s",
  "https://preview.redd.it/malayalam-actors-who-does-comedy-and-their-iconic-your-v0-qnok35pbgppf1.jpg?width=554&format=pjpg&auto=webp&s=005eca093cee8d1997c449754f5c524ed9c97044",
  "https://i.redd.it/e22i5zmhd7hb1.jpg",
  "https://i.ytimg.com/vi/wBZciSHYSZM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD_IjZ06qrGlKSfW-W5YDuJWzAuzg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYlxA1jtP63nS5o7as4BCDCwVrF-2fBEOQA&s",
  "https://i.pinimg.com/1200x/78/02/9c/78029c0b83f6791d758c773771a32f62.jpg",
  "https://i.pinimg.com/236x/65/f9/fe/65f9fe8807063ae091f5ab32433f2393.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyT8n-SA4Vy6CVhRvwdSGAcgnTKKMGaKhz5Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeYxkrri6lBiVpePWp6Sqm237SsatTkwSQg&s",
  "https://preview.redd.it/malayalam-actors-who-does-comedy-and-their-iconic-your-v0-qnok35pbgppf1.jpg?width=554&format=pjpg&auto=webp&s=005eca093cee8d1997c449754f5c524ed9c97044",
  "https://i.redd.it/e22i5zmhd7hb1.jpg",
  "https://i.ytimg.com/vi/wBZciSHYSZM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD_IjZ06qrGlKSfW-W5YDuJWzAuzg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYlxA1jtP63nS5o7as4BCDCwVrF-2fBEOQA&s",
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
      <img src="" alt="" />
    </div>
  );
}

export default App;
