import React, { useState , useContext } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../store/FirebaseContext';
import {useHistory} from 'react-router-dom'
export default function Signup() {
const [username,setUsername] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const {firebase} = useContext(FirebaseContext)
const history = useHistory()
const handleSubmit=(e)=>{
  e.preventDefault()
  firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:username}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        email:email
      }).then(()=>{
          history.push('/login')
      })

    })
  })
}

  return (
    <div className='bgSignup'>
    <div className='signup-container'>
      <form onSubmit={handleSubmit} className='signup-form'>
        <h2 style={{ color: 'white' }}>Sign Up</h2>
        <input type='text'value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' />
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        <button type='submit'  className='signup-btn'>Sign Up</button>
      </form>
      <p className='signup-text-small'>You Have Already a Account ? Please</p>
      <Link to='/login' className='login-link'>
          <button className='login-button'>Login</button>
        </Link>
    </div>
  </div>
  )
}


