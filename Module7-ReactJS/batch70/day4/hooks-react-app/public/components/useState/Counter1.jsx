// Variables do not trigger re-renders — UI stays frozen
function Counter1() {
    let count = 0;

    const handleClick = () => {
        count++;
        console.log(count); // JS updates correctly, but UI never changes
    };

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Counter1;