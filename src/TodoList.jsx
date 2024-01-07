import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function TodoList({ task, toggleIsCompleted, setTodos, todos }) {
  return (
    <div className="flexRow">
      <div>
        <p
          onClick={() => {
            toggleIsCompleted(task.id);
          }}
          className={`${task.isCompleted ? "completed" : ""}`}
        >
          {task.task}
        </p>
      </div>
      <div className="icon">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => {
            setTodos(
              todos.map((todo) =>
                todo.id === task.id
                  ? { ...todo, isEditing: !todo.isEditing }
                  : todo
              )
            );
          }}
        />
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => {
            setTodos(todos.filter((todo) => todo.id !== task.id));
          }}
        />
      </div>
    </div>
  );
}

// onClick i want to set task.isCompleted to be true
// onClick again i want to set task.isCompleted to be false
// kind of like toggling

// then when task.isCompleted is true i want to add a className of completed
// when it is false i want to remove completed
