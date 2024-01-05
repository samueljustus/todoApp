import SearchBar from "./SearchBar.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";

export default function TodoApp() {
  const [todoItem, setTodoItem] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <h1>Get Things Done!</h1>
      <SearchBar
        todoItem={todoItem}
        todo={todo}
        onTodoItemChange={setTodoItem}
        onTodoChange={setTodo}
      />
      <TodoList
        todoItem={todoItem}
        todo={todo}
        onTodoItemChange={setTodoItem}
        onTodoChange={setTodo}
      />
    </div>
  );
}
