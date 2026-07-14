// App → MiddleComponent → DeepChild
// MiddleComponent does nothing with 'user' — just forwards it

function PropDrilling() {
    const user = { name: "Alex" };
    return <MiddleComponent user={user} />;
}

function MiddleComponent({ user }) {
    // Doesn't use 'user' — only passes it down
    return (
        <div>
            <h3>Middle Component in Prop Drilling</h3>
            <DeepChild user={user} />
        </div>
    );
}

function DeepChild({ user }) {
    return <p>Welcome back, {user.name}!</p>;
}

export default PropDrilling