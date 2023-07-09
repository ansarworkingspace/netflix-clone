import React,{useState,useContext} from 'react'
import { FirebaseContext } from '../../store/FirebaseContext'
import './Login.css'
import {useHistory} from 'react-router-dom'
export default function Login() {
  const [email , setEmail ] = useState('')
  const [password , setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
       history.push('/posterview')
    }).catch((error)=>{
       alert(error.message)
    })
  }
  return (
    <div className='bgSignup'>
    <div className='signup-container'>
      <form onSubmit={handleLogin} className='signup-form'>
        <h2 style={{ color: 'white' }}>Login</h2>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        <button type='submit' className='login-btn'>Login</button>
      </form>
    </div>
  </div>
  )
}


