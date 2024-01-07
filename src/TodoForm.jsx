let nextId = 0;
export default function TodoForm({ value, setValue, todos, setTodos }) {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setValue("");
      }}
    >
      <input
        className="input"
        type="text"
        placeholder="add new task"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        className="btn"
        onClick={() => {
          if (value === "") {
            return;
          }
          setTodos([
            ...todos,
            { id: nextId++, task: value, isCompleted: false, isEditing: false },
          ]);
        }}
      >
        Add task
      </button>
    </form>
  );
}
