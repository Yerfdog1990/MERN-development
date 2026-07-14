import { useState } from 'react';

const Counter1 = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => setCount(count + step);
    const decrement = () => setCount(count - step);
    const handleChange = (e) => setStep(parseInt(e.target.value));

    return (
        <>
            <header><h1>Counter app using useState</h1></header>
            <main>
                <section className="counter">
                    <p className="leading">{count}</p>
                    <div className="actions">
                        <button type="button" className="btn btn-circle" onClick={decrement}>-</button>
                        <button type="button" className="btn btn-circle" onClick={increment}>+</button>
                    </div>
                </section>
                <section className="counter-step">
                    <label htmlFor="step">Step</label>
                    <input id="step" type="range" min="1" max="10" value={step} onChange={handleChange} />
                    <label>{step}</label>
                </section>
            </main>
        </>
    );
};
export default Counter1;