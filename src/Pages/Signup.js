import { useState } from 'react'
import { useSignup } from '../Hooks/useSignup'
export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const {error,signup} = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault()
    
    signup(email,password);
  }
  
  return (
    <div>
      <h2 className='welcome-title-pages'>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <div className='signup-form-content'>
        <label>
          <span>E mail adress : </span>
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
        <button className='btn'>Register</button>
        {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  )
}