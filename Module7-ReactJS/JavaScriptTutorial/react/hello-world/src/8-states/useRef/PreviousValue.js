import { useRef, useState, useEffect } from 'react';

const PreviousValue = () => {
    const [name, setName] = useState('');
    const prevNameRef = useRef('');

    useEffect(() => {
        prevNameRef.current = name; // store current name after every render
    }, [name]);

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name"
            />
            <p>Current name: {name}</p>
            <p>Previous name: {prevNameRef.current}</p>
        </div>
    );
};

export default PreviousValue;