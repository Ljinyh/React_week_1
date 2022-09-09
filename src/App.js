import { useState } from "react";
import "./App.css";

function Todo() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={title}
        onChange={(event) => { setTitle(event.target.value); }} />
      <button onClick={() => {
        setTodos([...todos, { id: todos.length + 1, title: title }]);
      }}>
        추가
      </button>

      <div className="todos-container">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Todo />
    </div>
  );
}

export default App;