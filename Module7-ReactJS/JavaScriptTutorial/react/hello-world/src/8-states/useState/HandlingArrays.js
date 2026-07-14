import {useState} from "react";

const FruitList = () => {
    const [fruits, setFruits] = useState([]);

    // Add item
    const addFruit = () => {
        const newFruit = '🍎 apple';

        // ✅ Correct — creates a new array
        setFruits([...fruits, newFruit]);

        // ❌ Wrong — mutates the existing array, React won't re-render
        // fruits.push(newFruit);
        // setFruits(fruits); // same array reference → no re-render
    };

    // Remove item
    const removeFruit = () => {
        setFruits(prevFruits => prevFruits.filter(f => f !== '🍎 apple'));
    };

    // Update item
    const updateFruit = () => {
        setFruits(prevFruits => prevFruits.map(f => f === '🍎 apple' ? 'apricot' : f));
    };

    // Clear all
    const clearAll = () => {
        setFruits([]);
    };
    return (
        <div>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <button onClick={addFruit}>Add Fruit</button>
            <button onClick={removeFruit}>Remove Fruit</button>
            <button onClick={updateFruit}>Update Fruit</button>
            <button onClick={clearAll}>Clear All</button>
        </div>
    );
};

export default FruitList;