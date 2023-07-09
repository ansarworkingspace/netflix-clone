import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {useHistory} from 'react-router-dom'
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext'
function Navbar() {
const {user} = useContext(AuthContext)
const {firebase} = useContext(FirebaseContext)
const history = useHistory()
  return (
    <div className='navbar'>
      
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetFlix Logo" />
        {user ? (
    <Link to='/posterview' className='signup-link'>
      <button className='signup-button'>{user.displayName}</button>
    </Link>
  ) : (
    <Link to='/signup' className='signup-link'>
      <button className='signup-button'>Sign up</button>
    </Link>
  )}
     { user && <button onClick={()=>{
      firebase.auth().signOut();
      history.push('/login')
      }} className='logout-button'>Logout</button>}
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}

export default Navbar
