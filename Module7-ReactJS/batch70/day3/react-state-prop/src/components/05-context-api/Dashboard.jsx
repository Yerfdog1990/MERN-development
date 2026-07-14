// Dashboard.jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeButton from './ThemeButton';

export default function Dashboard() {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ 
            padding: '20px', 
            backgroundColor: theme === 'dark' ? '#333' : '#f5f5f5',
            color: theme === 'dark' ? '#fff' : '#000',
            minHeight: '200px'
        }}>
            <h2>Dashboard Component</h2>
            <p>Current theme: {theme}</p>
            <ThemeButton />
        </div>
    );
}
