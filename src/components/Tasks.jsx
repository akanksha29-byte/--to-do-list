import Task from "./Task";
const Tasks = ({ tasks, handleDelete, handleEdit }) => {
  return (
    <div>
      {tasks.map((t) => {
        return (
          <Task
            task={t}
            key={t.id}
            taskname={t.task}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
