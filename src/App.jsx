import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/reusables/nav'

function App() {

  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default App