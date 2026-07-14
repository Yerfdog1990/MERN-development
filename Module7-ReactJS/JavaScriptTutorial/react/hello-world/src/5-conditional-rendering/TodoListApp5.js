import TodoList5 from './TodoList5';

const TodoListApp5 = () => {
    const todos = [
        { id: 1, title: 'Learn React',   completed: true  },
        { id: 2, title: 'Build an app',  completed: false },
        { id: 3, title: 'Deploy the app',completed: false },
    ];

    return (
        <main>
            <h1><u>Conditional Rendering using Logical OR Operator</u></h1>
            <h3>Todo List</h3>
            <TodoList5 todos={todos} />
        </main>
    );
};

export default TodoListApp5;