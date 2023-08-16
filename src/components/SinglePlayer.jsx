import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchSinglePlayer } from '../API/player-id'

export default function SinglePlayer() {
  let { id } = useParams()
  const [player, setPlayer] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null)

  useEffect(() => {
    async function receiveSinglePlayer() {
      const APIData = await fetchSinglePlayer(id)
      if (APIData.success) {
        setPlayer(APIData.data.player)
      } else {
        setError(APIData.error.message)
      }
    }
    receiveSinglePlayer()
  }, [id])

  return (
    <>
      <h2>Player Details</h2>
      <div>
        {player && (
          <div>
            <h3>{player.name}</h3>
            <img src={player.imageUrl} alt={player.name} />
            <h4>Breed: {player.breed}</h4>
            <h4>Status: {player.status}</h4>
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </>
  )
}
