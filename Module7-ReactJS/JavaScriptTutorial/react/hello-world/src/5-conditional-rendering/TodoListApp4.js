import TodoList4 from './TodoList4';

const TodoListApp4 = () => {
    const todos = [
        { id: 1, title: 'Learn React',   completed: true  },
        { id: 2, title: 'Build an app',  completed: false },
        { id: 3, title: 'Deploy the app',completed: false },
    ];

    return (
        <main>
            <h1><u>Conditional Rendering using Logical AND Operator</u></h1>
            <h3>Todo List</h3>
            <TodoList4 todos={todos} />
        </main>
    );
};

export default TodoListApp4;