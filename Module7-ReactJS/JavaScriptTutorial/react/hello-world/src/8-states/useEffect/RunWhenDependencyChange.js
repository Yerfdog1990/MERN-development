import { useState, useEffect } from 'react';

const CounterTitle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]); // Runs when 'count' changes

    return (
        <div>
            <h1>Current count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
export default CounterTitle;