import { FaPencilAlt, FaTimes } from "react-icons/fa";

function Task(props) {
  const { task, onDelete, onEdit } = props;

  return (
    <div>
      <div className="task">
        <div>
          <p className="taskName">
            <span className="textBold">Task Name:</span> {task.text}
          </p>
          <p className="taskDate">
            <span className="textBold">Date of Completion:</span> {task.day}
          </p>
        </div>
        <div>
          <p>
            <FaTimes onClick={() => onDelete(task.id)} className="delIcon" />
          </p>
          <p>
            <FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Task;
