import Head from 'next/head'
import NavBar from '../comps/NavBar'
import Footer from '../comps/Footer'
import { useAuth } from '../comps/AuthContext'

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>
  )  
}
