import { fetchAllPlayers } from '../API'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DeletePlayer from './DeletePlayer'

export default function AllPlayers() {
  const [players, setPlayers] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null)
  const [searchParam, setSearchParam] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    async function receiveAllPlayers() {
      const APIData = await fetchAllPlayers()
      if (APIData.success) {
        setPlayers(APIData.data.players)
      } else {
        setError(APIData.error.message)
      }
    }
    receiveAllPlayers()
  }, [])

  const playersToDisplay = searchParam
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParam.toLowerCase())
      )
    : players

  const handlePlayerDelete = (playerId) => {
    setPlayers(players.filter((player) => player.id !== playerId))
  }
  return (
    <>
      <h1>All Players</h1>
      <div>
        <label>
          Search
          <input
            type="text"
            placeholder="search"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
        </label>
      </div>

      <div>
        {playersToDisplay.map((player) => (
          <div key={player.id}>
            <h4>{player.name}</h4>
            <button onClick={() => navigate(`/${player.id}`)}>
              See Details!
            </button>
            <DeletePlayer playerId={player.id} onDelete={handlePlayerDelete} />
          </div>
        ))}
      </div>
    </>
  )
}
