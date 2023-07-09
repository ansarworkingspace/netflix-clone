
import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import  Home from './Pages/home'
import  Signup from './Pages/Signup'
import  Login from './Pages/Login'
import  PosterView  from './Pages/posterview'
import {AuthContext, FirebaseContext} from './store/FirebaseContext'
import './App.css';



function App() {
const {setUser} = useContext(AuthContext)
const {firebase} = useContext(FirebaseContext)
useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
})
  return (
    <div >
      <Router>
      <Route exact path='/'>
           <Home/>
        </Route>
        <Route path='/signup'>
           <Signup/>
        </Route>
        <Route path='/login'>
           <Login/>
        </Route>
        <Route path='/posterview'>
           <PosterView/>
        </Route>
       
      </Router>
    </div>
  );
}

export default App;
