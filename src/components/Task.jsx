const Task = ({ task, taskname, handleEdit, handleDelete }) => {
  return (
    <div className="task">
      <input value={taskname} disabled />
      <a onClick={(e) => handleEdit(task)}>
        <i className="fas fa-edit"></i>
      </a>
      <a onClick={(e) => handleDelete(task)}>
        <i className="fas fa-trash"></i>
      </a>
    </div>
  );
};

export default Task;
