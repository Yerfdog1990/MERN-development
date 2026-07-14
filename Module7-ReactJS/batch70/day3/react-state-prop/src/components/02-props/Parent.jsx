import { Person, Country } from './Child.jsx'

function Parent(){
    return (
        <>
            <h1>Person</h1>
            <Person name="John" age={30} />
            <h1>Country</h1>
            <Country name="Kenya" region="East Africa" />
        </>
    )
}

export default Parent
