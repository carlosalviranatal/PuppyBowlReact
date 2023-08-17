const COHORT = '2305-FTB-ET-WEB-PT'
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`

export async function deletePlayerById(playerId) {
  try {
    const response = await fetch(`${baseUrl}/${playerId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return { success: false, error: { message: error.message } }
  }
}
