import ReactDOM from "react-dom";

function Portal({ children, targetId }) {
    const target = document.getElementById(targetId);
    return target ? ReactDOM.createPortal(children, target) : null;
}

function PortalDemo() {
    return (
        <div style={{ padding: '20px', border: '2px solid blue', margin: '20px' }}>
            <h2>Parent Component (renders in #root)</h2>
            <p>This component is rendered inside the normal React tree in the #root div.</p>
            
            <Portal targetId="modal-root">
                <div style={{
                    padding: '20px',
                    backgroundColor: '#ff6b6b',
                    color: 'white',
                    marginTop: '20px',
                    border: '3px solid red'
                }}>
                    <h3>Portal Content (renders in #modal-root)</h3>
                    <p>This content is rendered via Portal to the #modal-root div, which is OUTSIDE the parent DOM tree!</p>
                    <p>Check the browser DevTools Elements panel to see this div is a sibling of #root, not a child.</p>
                </div>
            </Portal>
        </div>
    );
}

export default PortalDemo;

