export default function InputComponent({ value, onTextChange }) {
    return (
        <div>
            <label>Type here: </label>
            <input
                type="text"
                value={value}
                onChange={(e) => onTextChange(e.target.value)} // loads value INTO parent's state
            />
        </div>
    );
}