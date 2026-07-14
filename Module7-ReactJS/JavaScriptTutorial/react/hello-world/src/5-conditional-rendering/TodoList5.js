const TodoList5 = ({ todos }) => {
    const renderedTodos = todos.map(({ id, title, completed }) => {
        return (
            <div key={id}>
                {completed && '✔'}
                {completed || '✖'}
                {title}
            </div>
        );
    });

    return <section>{renderedTodos}</section>;
};
export default TodoList5;

