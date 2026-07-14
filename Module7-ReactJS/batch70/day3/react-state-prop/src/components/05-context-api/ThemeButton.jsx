// ThemeButton.jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext); // grabs data directly

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            style={{ backgroundColor: theme === 'dark' ? '#000' : '#fff' }}
        >
            Toggle to {theme === 'light' ? 'dark' : 'light'} Mode
        </button>
    );
}