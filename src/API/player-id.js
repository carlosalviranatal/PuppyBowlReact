const COHORT = "2305-FTB-ET-PT"
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`

export async function fetchSinglePlayer (playerId) {
    try {
      const response = await fetch(`${baseUrl}/${playerId}`)
      const player = await response.json()
      return player.data.players
    } catch (err) {
      console.error(`Oh no, trouble fetching player #${playerId}!`, err)
    }
  }

  