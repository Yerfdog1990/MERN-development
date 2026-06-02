const Home=()=>{
    const title="My Home Page";
    const courses=["A","B","C","D","E","F"]
    return (
        <div>
            <h3> {title} </h3>
            <div>
                <h4> Courses </h4>
                <ul>
                    {
                        courses.map((course,index)=>
                            <li key={index}> {course} </li> )
                    }
                </ul>
            </div> </div> )
}
export default Home;