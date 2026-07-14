import React, { useEffect, useState } from 'react'

const UserDetails = ({userId}) => {
    const [user,setUser]=useState(null)
    useEffect(()=>{
      let isMounted=true;
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res=> res.json())
      .then(data=>{
         if(isMounted){
            setUser(data)
         }
      })
      .catch(err=> console.log(err))
      return ()=>{
         isMounted=false;
      }
    },[userId])
    if(!user) return <p> Loading.....</p>
  return (
    <div>
        <h2> User Details</h2>
        <div>
            <p> 
                Id : {user.id} <br/>
                Name : {user.name} <br/>
                Email : {user.email} <br/>
                Mobile : {user.phone}
            </p>
        </div>
    </div>
  )
}

export default UserDetails