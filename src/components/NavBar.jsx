import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <div id="navbar">
        <Link to="/" className='navLink'>Home</Link>
        <Link to="/NewPlayer" className='navLink'> Add New Player!</Link>
      </div>
    </>
  )
}
