const About=({myobj})=>{
    return (
        <div>
            <h3> About Page</h3>
            <p> {myobj.name} is {myobj.age} year old!</p>
        </div>
    )
}
export default About;