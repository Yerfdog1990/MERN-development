import { useRef, useState } from 'react';

const Timer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const startTimer = () => {
        setIsRunning(true);
        timerRef.current = setInterval(() => {
            console.log('Tick...');
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerRef.current); // cancel using the stored ID
        timerRef.current = null;
        setIsRunning(false);
    };

    return (
        <div>
            <button onClick={startTimer} disabled={isRunning}>Start</button>
            <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
        </div>
    );
};

export default Timer;