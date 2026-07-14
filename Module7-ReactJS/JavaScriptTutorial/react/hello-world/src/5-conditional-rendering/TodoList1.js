const TodoList1 = ({ todos }) => {
    const renderedTodos = todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
    });

    return <section>{renderedTodos}</section>;
};

export default TodoList1;