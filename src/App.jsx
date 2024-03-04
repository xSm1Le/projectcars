import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/reusables/nav'
import { useAuth } from './components/global/checkStatus'

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App