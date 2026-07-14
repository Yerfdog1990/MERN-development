
const TodoList2 = ({ todos }) => {
    const renderedTodos = todos.map(({ id, title, completed }) => {
        return (
            <div key={id}>
                {completed ? '✔' : ''}
                {title}
            </div>
        );
    });

    return <section>{renderedTodos}</section>;
};

export default TodoList2;
