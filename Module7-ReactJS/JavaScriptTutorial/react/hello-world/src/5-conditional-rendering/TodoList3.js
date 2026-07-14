
const TodoList3 = ({ todos }) => {
    const renderedTodos = todos.map(({ id, title, completed }) => {
        if (completed) {
            return <div key={id}>✔ {title}</div>;   // completed todo
        }
        return <div key={id}>{title}</div>;        // incomplete todo
    });

    return <section>{renderedTodos}</section>;
};

export default TodoList3;
