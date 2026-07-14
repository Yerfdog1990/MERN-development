const TodoList4 = ({ todos }) => {
    const renderedTodos = todos.map((todo) => {
        return (
            <div key={todo.id}>
                {todo.completed && '✔'}
                {todo.title}
            </div>
        );
    });

    return <section>{renderedTodos}</section>;
};
export default TodoList4;