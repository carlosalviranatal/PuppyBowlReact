const COHORT = "2305-FTB-ET-PT"
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`

export async function fetchAllPlayers() {
    try {
        const response = await fetch(`${baseUrl}/players`)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}