import { useReducer } from 'react';
import { produce } from 'immer';

const reducer = (state, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case 'INCREMENT':
                draft.count = draft.count + draft.step;
                break;
            case 'DECREMENT':
                draft.count = draft.count - draft.step;
                break;
            case 'CHANGE_STEP':
                draft.step = action.payload;
                break;
            default:
                throw new Error(`action type ${action.type} is unexpected.`);
        }
    });
};

const Counter3 = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });
    const handleChange = (e) =>
        dispatch({
            type: 'CHANGE_STEP',
            payload: parseInt(e.target.value),
        });

    return (
        <>
            <header><h1>Counter app using useReducer and Immer</h1></header>
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
export default Counter3;