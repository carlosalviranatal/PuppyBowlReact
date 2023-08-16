import { fetchAllPlayers } from '../API'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
        {playersToDisplay.map((player) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div>
              <h4 key={player.id}>{player.name}</h4>
              <button
                key={`button ${player.id}`}
                onClick={() => navigate(`/${player.id}`)}
              >
                See Details!
              </button>
            </div>
          )
        })}
      </div>

    </>
  )
}
