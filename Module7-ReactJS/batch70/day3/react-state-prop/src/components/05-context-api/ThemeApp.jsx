// App.jsx
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Dashboard from './Dashboard';

export default function ThemeApp() {
    const [theme, setTheme] = useState('dark');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Dashboard />  {/* All nested components can now access theme and setTheme */}
        </ThemeContext.Provider>
    );
}