import { useState } from "react";

export default function EditTodo({ todos, setTodos, id }) {
  const [value, setValue] = useState(todos[id].task);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setTodos(
          todos.map((todo) =>
            todo.id === id
              ? { ...todo, task: value, isEditing: !todo.isEditing }
              : todo
          )
        );
      }}
    >
      <input
        className="editInput"
        type="text"
        placeholder="update task"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="btn">Update task</button>
    </form>
  );
}
