import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../Hooks/useLogout'
import { useAuthContext } from '../Hooks/useAuthContext';
export default function Navbar() {
  const {logout} = useLogout();
  const {user} = useAuthContext();
  return (
    <nav>
      <h1>Library App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!user && <li><Link to="/login">Signup</Link></li>}
        {!user && <li><Link to="/signup">Register</Link></li>}
        {user && <li onClick={logout}>Logout</li>}
      </ul>
      
    </nav>
  )
}
