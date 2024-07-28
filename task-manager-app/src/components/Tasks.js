import Task from "./task.js";

function Tasks(props) {
  const { tasks, onDelete, onEdit } = props;

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </>
  );
}
export default Tasks;
