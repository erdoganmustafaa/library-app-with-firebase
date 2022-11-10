import { useState } from 'react'
import { useLogin } from '../Hooks/useLogin'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {login,error} = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email,password);
  }
  
  return (
    <div>
      <h2 className='welcome-title-pages'>Sign In Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email Address :</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password :</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button className='btn'>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}