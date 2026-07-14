import { useState } from 'react';

const CounterApp2 = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <header>
                <h1>Counter</h1>
            </header>
            <main className="counter-container">
                <p className={counter < 0 ? 'counter-red' : 'counter-green'}>{counter}</p>
                <div>
                    <button type="button" onClick={() => setCounter(counter - 1)}>-</button>
                    <button type="button" onClick={() => setCounter(counter + 1)}>+</button>
                </div>
            </main>
        </>
    );
};

export default CounterApp2;