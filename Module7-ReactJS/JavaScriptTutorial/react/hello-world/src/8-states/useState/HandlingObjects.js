import {useState} from "react";

const Person = () => {
    const [person, setPerson] = useState({ name: 'John', age: 20 });

    const handleIncrement = () => {
        // ✅ Correct — creates a new object
        setPerson({ ...person, age: person.age + 1 });

        // ❌ Wrong — mutates the existing object
        //person.age += 1;
        //setPerson(person); // same object reference → no re-render
    };

    const handleDecrement = () => {
        setPerson({ ...person, age: person.age - 1 });
    };

    return (
        <div>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <button onClick={handleIncrement}>Increment Age</button>
            <button onClick={handleDecrement}>Decrement Age</button>
        </div>
    );
};

export default Person;