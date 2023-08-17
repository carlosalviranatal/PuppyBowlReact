import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const cohortName = '2305-FTB-ET-WEB-PT'
const baseURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`

export default function NewPlayerForm() {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null)
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [status, setStatus] = useState('')
  const [imageURL, setImageURL] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const APIresponse = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, breed, status, imageURL }),
      })

      const result = await APIresponse.json()
      console.log(result)
      if (result.success) {
        navigate('/')
      }
    } catch (error) {
      setError(error)
    }
  }

  return (
    <>
      <h2>Add New Player</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            placeholder="Bolt"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Breed: </label>
          <input
            type="text"
            value={breed}
            placeholder="German Shepherd"
            onChange={(e) => setBreed(e.target.value)}
          />
          <label>Status: </label>
          <input
            type="text"
            value={status.toLowerCase()}
            placeholder="**Can only be bench or field**"
            onChange={(e) => setStatus(e.target.value)}
          />
          <label>imageURL: </label>
          <input
            type="text"
            value={imageURL}
            placeholder="http://www.pupPic.com/"
            onChange={(e) => setImageURL(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
