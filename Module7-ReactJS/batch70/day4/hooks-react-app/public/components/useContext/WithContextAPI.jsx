
import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext({ count: 0, setCount: () => {} });

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
};

function GrandChildComponent() { // // GrandChildComponent — consume directly
    const { count, setCount } = useContext(CounterContext);

    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    );
}

// Small wrapper component demonstrating usage of the provider and consumer
function WithContextAPI() {
    return (
        <CounterProvider>
            <div>
                <GrandChildComponent />
            </div>
        </CounterProvider>
    );
}

// Export GrandChildComponent so it can be used elsewhere and to avoid unused-function lint warnings
export { CounterContext, CounterProvider, GrandChildComponent };
export default WithContextAPI;
