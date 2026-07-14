import React, { useState } from 'react'
import Counter from './components/Counter'
import Posts from './components/Posts'
import UserDetails from './components/UserDetails'
import Myref from './components/Myref'
import Controlled from './components/Controlled'
import Uncontrolled from './components/Uncontrolled'

const App = () => {
  const [userId,setUserId]=useState(1)
  const sendUserId=()=>{
      if(userId==10){
        setUserId(1)
      }
      else{
      setUserId(val=> val+1)
      }
  }
  return (
    <div>
        <h2> React Hooks</h2>
        <Controlled /> 
        <hr/>
        <Uncontrolled />
        {/* <Myref /> */}
        {/* <button onClick={sendUserId}> User Id</button> */}
        {/* <Counter />
        <hr/>
        <Posts />
        <hr/> */}
        {/* <UserDetails userId={userId} /> */}
    </div>
  )
}

export default App