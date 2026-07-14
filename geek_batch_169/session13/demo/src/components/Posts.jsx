import React, { useEffect,useState } from 'react'

const Posts = () => {
    const API="https://jsonplaceholder.typicode.com/posts";
    //define state for posts data 
    const [postData,setPostData]=useState([]);
    //use useEffect as mounting
    useEffect(()=>{
           //call api and store data in state 
           fetch(API)
           .then(res=> res.json())
           .then(data=> setPostData(data))
           .catch(err=> console.log(err))
    },[])
  return (
    <div>
        <h2> Load all jsonplaceholder posts</h2>
        {postData.map(post=>
            <div key={post.id}>
                <h4> {post.title}</h4>
                <p> {post.body} </p>
                <hr/>
            </div>
        )}
    </div>
  )
}

export default Posts