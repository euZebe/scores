import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useGames } from "../game"
import { Game } from "../game.model"

const Home = () => {
  const { games, removeGame } = useGames()
  const navigate = useNavigate()
  return (
    <div className="App">
      {games.length === 0
        ? "No game yet"
        : games.map((game: Game) => (
            <div key={game.id}>
              <a href={`/play/${game.id}`}>
                <div>{new Date(game.createdAt).toLocaleDateString()}</div>
                {game.gameName}
              </a>
              <div>
                <button onClick={() => navigate(`/edit-game/${game.id}`)}>
                  ✏️
                </button>
                <button onClick={() => removeGame(game.id)}>🗑</button>
              </div>
              {game.players.map((player) => (
                <div key={player.playerName}>🧑🏻‍🦰{player.playerName}</div>
              ))}
            </div>
          ))}

      <Link to="/new-game">New game</Link>
    </div>
  )
}

export default Home
