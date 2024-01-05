import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark, faPenToSquare} from '@fortawesome/free-solid-svg-icons'

export default function TodoList({task}) {
  return (
      <div>
        <p>{task.task}</p>
        <div>
      <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
}
