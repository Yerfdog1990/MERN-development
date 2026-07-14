import { useState } from 'react';

function getTheme() {
    console.log('Getting theme from localStorage'); // only logs once
    return localStorage.getItem('theme') || 'light';
}

const Theme = () => {
    // lazy initialization — getTheme() runs only once
    const [theme, setTheme] = useState(() => getTheme());

    const handleClick = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={handleClick}>Switch Theme</button>
        </div>
    );
};

export default Theme;

