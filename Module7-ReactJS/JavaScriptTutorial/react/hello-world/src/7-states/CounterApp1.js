import { useState } from 'react';

const CounterApp1 = () => {
    // Define state — counter starts at 0
    const [counter, setCounter] = useState(0);

    // Event handler functions
    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    return (
        <>
            <header>
                <h1>Counter</h1>
            </header>
            <main className="counter-container">
                <p className={counter < 0 ? 'counter-red' : 'counter-green'}>{counter}</p>
                <div>
                    <button type="button" onClick={decrement}>-</button>
                    <button type="button" onClick={increment}>+</button>
                </div>
            </main>
        </>
    );
};

export default CounterApp1;