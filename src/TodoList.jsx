import EditButton from "./EditButton.jsx";
import DeleteButton from "./DeleteButton.jsx";

export default function TodoList({ todoItem, todo, onTodoItemChange, onTodoChange }) {
  return (
    <ul>
      {todo.map((item) => (
        <li key={item.id}>
          {item.name} <EditButton />{" "}
          <DeleteButton
            onTodoChange={onTodoChange}
            todo={todo}
            id={item.id}
          />
        </li>
      ))}
    </ul>
  );
}
