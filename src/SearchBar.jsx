let nextId = 0

export default function SearchBar({
  todoItem,
  todo,
  onTodoItemChange,
  onTodoChange,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="add new todo"
        value={todoItem}
        onChange={(e) => {
          onTodoItemChange(e.target.value);
        }}
      />
      <button onClick={(() => {
        onTodoChange([
            ...todo,
            {id: nextId++, name: todoItem, isEdditing: false}
            
        ])
        onTodoItemChange('')
      })}>Add Task</button>
    </>
  );
}
