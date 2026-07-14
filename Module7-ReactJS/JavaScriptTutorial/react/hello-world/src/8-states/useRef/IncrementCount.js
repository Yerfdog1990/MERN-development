import { useRef } from 'react';

const Counter = () => {
    const countRef = useRef(0);

    const incrementCount = () => {
        countRef.current++;           // update the ref — no re-render
        alert(countRef.current);      // shows the updated count
    };

    return <button onClick={incrementCount}>Increment Count</button>;
};

export default Counter;