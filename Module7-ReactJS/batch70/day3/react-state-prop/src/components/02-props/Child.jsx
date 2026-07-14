
// Using props object
function Person(props){
    return <p>My name is {props.name} and I am {props.age} years old.</p>
}

// Destructured — cleaner and recommended
function Country({name, region}){
    return <p>{name} is located in {region}.</p>
}

export { Person, Country }
