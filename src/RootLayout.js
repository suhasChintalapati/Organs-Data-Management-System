import React from 'react'
import Nav from './components/nav/Nav'
import {useState} from 'react'
import Footer from './components/footer/Footer'
import {auth} from './firebase-cofig'
import {onAuthStateChanged} from 'firebase/auth'
import {Outlet} from 'react-router-dom'
import './RootLayout.css'

function RootLayout(props) {
  let [user,setUser]=useState({})
onAuthStateChanged(auth,(currentUser)=>{
  setUser(currentUser);
})

  return (
    <div>
      <Nav   user={user}/>
      <div className='out'>
      <Outlet/>
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout