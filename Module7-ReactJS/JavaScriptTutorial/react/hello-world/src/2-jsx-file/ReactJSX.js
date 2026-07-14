
const name = 'John';
const age = 25;
const active = true;
const inputType = 'range';


function ReactJSXApp() {
    return (
        <>
            <h1><u>Learning React JSX</u></h1>
            <p>My name is {name} and I am {age} years old.</p>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Status: {active ? 'Active' : 'Inactive'}</li>
                <li>Next year: {age + 1}</li>
                <li>Uppercase: {name.toUpperCase()}</li>
            </ul>
            <input type={inputType} min="0" max="100" />
        </>
    )
}

export default ReactJSXApp;
