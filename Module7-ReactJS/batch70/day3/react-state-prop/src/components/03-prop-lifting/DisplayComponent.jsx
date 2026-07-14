export default function DisplayComponent({ message }) {
    return (
        <div style={{ color: 'blue' }}>
            <strong>Live Preview:</strong> {message || "Nothing typed yet..."}
        </div>
    );
}