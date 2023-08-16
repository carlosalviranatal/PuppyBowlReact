import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { fetchSinglePlayer } from "../API/player-id"


export default function SinglePlayer () {
    let { id } = useParams()
    const [player, setPlayer] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null)

        useEffect(() => {
          async function receiveSinglePlayer() {
            const APIData = await fetchSinglePlayer(id)
            if (APIData.success) {
              setPlayer(APIData.data.players)
            } else {
              setError(APIData.error.message)
            }
          }
          receiveSinglePlayer()
},[])

console.log(player)
    return(
    <>  
    <h2></h2>
    <div>
        {player.map((player) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div>
              <h4 key={player.id}>{player.breed}</h4>
              
            </div>
          )
        })}
      </div>
    </>  

    )
    }