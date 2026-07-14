function ComponentComposition() {
    const user = { name: "Alex" };
    return (
        <MiddleComponent>
            <DeepChild1 user={user} />  {/* passed directly — no drilling */}
            <DeepChild2 user={user} />  {/* passed directly — no drilling */}
        </MiddleComponent>
    );
}

function MiddleComponent({ children }) {
    return (
        <div>
            <h3>Using component composition to solve prop drilling</h3>
            {children}  {/* renders DeepChild without knowing about 'user' */}
        </div>
    );
}

function DeepChild1({ user }) {
    return <p>Hello, {user.name} from DeepChild 1!</p>;
}

function DeepChild2({ user }) {
    return <p>Hello, {user.name} from DeepChild 2!</p>;
}

export default ComponentComposition;

