
import TodoList3 from "./TodoList3";

const TodoListApp3 = () => {
    const todos = [
        { id: 1, title: 'Learn React',   completed: true  },
        { id: 2, title: 'Build an app',  completed: false },
        { id: 3, title: 'Deploy the app',completed: false },
    ];

    return (
        <main>
            <h1><u>Conditional Rendering Using If Statement</u></h1>
            <h3>Todo List</h3>
            <TodoList3 todos={todos} />
        </main>
    );
};

export default TodoListApp3;