let nextId = 0;
export default function TodoForm({value, setValue, todos, setTodos}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="add new task" value={value} onChange={((e) => {
        setValue(e.target.value)
      })} />
      <button onClick={() => {
        setTodos([...todos, {id: nextId++, task: value, isCompleted: false, isEditing: false}]) 
      }}>Add task</button>
    </form>
  );
}
