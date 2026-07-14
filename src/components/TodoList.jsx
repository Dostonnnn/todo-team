import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <ul className="todo-list flex flex-col gap-5">
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
}

export default TodoList;
