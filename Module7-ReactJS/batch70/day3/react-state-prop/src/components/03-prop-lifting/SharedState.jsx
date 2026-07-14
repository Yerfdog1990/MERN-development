import { useState } from 'react';
import InputComponent from './InputComponent';
import DisplayComponent from './DisplayComponent';

export default function SharedState() {
    const [text, setText] = useState('');

    return (
        <div>
            <h2>Parent Component</h2>
            {/* Pass the setter function DOWN to the child */}
            <InputComponent onTextChange={setText} value={text} />

            {/* Pass the state value DOWN to the display child */}
            <DisplayComponent message={text} />
        </div>
    );
}


