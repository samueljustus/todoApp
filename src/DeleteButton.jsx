export default function DeleteButton({ onTodoChange, todo, id }) {
  return (
    <button
      onClick={() => {
        onTodoChange(
          todo.filter((item) => {
            return item.id !== id;
          })
        );
      }}
    >
      Delete
    </button>
  );
}
