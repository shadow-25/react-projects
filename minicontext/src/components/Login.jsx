import React, { useContext , useState } from 'react'
import UserContext from '../context/UserContext'
import '../App.css'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser}=useContext(UserContext)
    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <h1>Login</h1>
      <input className='gap' type="text" name="username" id="username"  value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input className='gap' type="text" name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <input className='gap' type="button" value="submit" onClick={handleSubmit} />
    </div>
  )
}
