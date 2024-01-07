import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
import EditTodo from "./EditTodo.jsx";
import { useState } from "react";
import "./app.css";
export default function TodoWrapper() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  function toggleIsCompleted(id) {
    let toggled = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      } else {
        return todo;
      }
    });
    setTodos(toggled);
  }

  return (
    <div className="wrapper">
      <h1 className="hero">Get Things Done!</h1>
      <TodoForm
        value={value}
        setValue={setValue}
        todos={todos}
        setTodos={setTodos}
      />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodo
            key={index}
            todos={todos}
            setTodos={setTodos}
            id={todo.id}
          />
        ) : (
          <TodoList
            task={todo}
            key={index}
            toggleIsCompleted={toggleIsCompleted}
            setTodos={setTodos}
            todos={todos}
          />
        )
      )}
    </div>
  );
}
