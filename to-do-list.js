
// Import Components
import Todo from './to-do';

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-conntainer">
            <u1 className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text} 
                    />
                ))}
            </u1>
        </div>
    );
}

export default ToDoList;