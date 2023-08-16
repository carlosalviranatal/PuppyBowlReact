import NavBar from './components/NavBar'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import { Routes, Route,} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <nav><NavBar/></nav>
    <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path="/:id" element={<SinglePlayer/>}/>
    </Routes>
    </>
  )
}

export default App
