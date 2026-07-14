function TodoItem({ title, completed }) {
  let Name = "todo-item";
  let simbol = "⭕";
  if (completed === true) {
    simbol = "☑️";
    Name = "todo-item done";
  }

  return (
    <li className={`${Name} text-blue-500 p-2 rounded-xl bg-purple-200`}>
      {simbol} {title}
    </li>
  );
}

export default TodoItem;
