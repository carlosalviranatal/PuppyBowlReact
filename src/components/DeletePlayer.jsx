import { deletePlayerById } from '../API/delete-player'

export default function DeletePlayer({ playerId, onDelete }) {
  const handleDelete = async () => {
    try {
      const response = await deletePlayerById(playerId)
      if (response.success) {
        onDelete(playerId)
      } else {
        console.error('Error deleting player:', response.error.message)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  return (
    <button className="deleteButton" onClick={handleDelete}>
      Delete
    </button>
  )
}
