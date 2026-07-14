import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + state.step };
        case 'DECREMENT':
            return { ...state, count: state.count - state.step };
        case 'CHANGE_STEP':
            return { ...state, step: action.payload };
        default:
            throw new Error(`action type ${action.type} is unexpected.`);
    }
};

const Counter2 = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

    // add ts-ignore to suppress incorrect TS/IDE inference that `dispatch` takes no args
    const increment = () => {
        // @ts-ignore
        dispatch({ type: 'INCREMENT' });
    };

    const decrement = () => {
        // @ts-ignore
        dispatch({ type: 'DECREMENT' });
    };

    const handleChange = (e) => {
        // @ts-ignore
        dispatch({
            type: 'CHANGE_STEP',
            payload: parseInt(e.target.value, 10),
        });
    };

    return (
        <>
            <header><h1>Counter app using useReducer</h1></header>
            <main>
                <section className="counter">
                    <p className="leading">{state.count}</p>
                    <div className="actions">
                        <button type="button" className="btn btn-circle" onClick={decrement}>-</button>
                        <button type="button" className="btn btn-circle" onClick={increment}>+</button>
                    </div>
                </section>

                <section className="counter-step">
                    <label htmlFor="step">Step</label>
                    <input id="step" type="range" min="1" max="10" value={state.step} onChange={handleChange} />
                    <label>{state.step}</label>
                </section>
            </main>
        </>
    );
};
export default Counter2;