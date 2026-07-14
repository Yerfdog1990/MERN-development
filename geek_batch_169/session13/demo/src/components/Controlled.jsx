import React,{useState} from 'react'

const Controlled = () => {
    const [state,setState]=useState({email:'',password:''})
    const handleChange=(event)=>{
       const {name,value}=event.target;//get name and value of the current input field
    //    console.log(name+"---"+value)
       setState({...state,[name]:value}) // update the value in the state in behalf of name
    }
    const handleSubmit=(event)=>{
       event.preventDefault();
       console.log(state)
    }
  return (
    <div>
        <h2> Controlled Component Example Form</h2>
        <form onSubmit={handleSubmit}>
            Email : <input type='text' name='email' onChange={handleChange}/> <br/>
            Password : <input type='password' name='password' onChange={handleChange}/><br/>
            <input type='submit' value="Submit"/>
        </form>
    </div>
  )
}

export default Controlled