import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";
export default function TodoWrapper() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Get Things Done!</h1>
      <TodoForm
        value={value}
        setValue={setValue}
        todos={todos}
        setTodos={setTodos}
      />
      {todos.map((todo) => <TodoList task={todo} key={todo.id} />)}
    </div>
  );
}
