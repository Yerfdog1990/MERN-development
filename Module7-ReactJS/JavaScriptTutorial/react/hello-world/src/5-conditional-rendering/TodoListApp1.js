import TodoList1 from './TodoList1';

const TodoListApp1 = () => {
    const todos = [
        { id: 1, title: 'Learn React',   completed: true  },
        { id: 2, title: 'Build an app',  completed: false },
        { id: 3, title: 'Deploy the app',completed: false },
    ];

    return (
        <main>
            <h1><u>Conditional Rendering (NOTE YET APPLIED!)</u></h1>
            <h3>Todo List</h3>
            <TodoList1 todos={todos} />
        </main>
    );
};

export default TodoListApp1;