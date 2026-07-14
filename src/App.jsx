import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import "../src/index.css";
function App() {
  const [todos, setTodos] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.slice(0, 20));
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  let content;
  content = <TodoList todos={todos} />;
  return (
    <div className="todo-app pt-15">
      <Navbar />
      <main className="todo-app__content m-auto flex items-center justify-center mt-6">
        {content}
      </main>
    </div>
  );
}

export default App;
