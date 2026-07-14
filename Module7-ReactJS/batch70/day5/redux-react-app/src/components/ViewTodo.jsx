import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todoSlice';

const ViewTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <li className="empty-state">No todos yet. Add one above!</li>
      ) : (
        todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default ViewTodo;
