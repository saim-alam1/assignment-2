import TaskStatusCard from "../TaskStatusCard/TaskStatusCard";

const TaskStatus = ({ taskInProgress }) => {
  return (
    <div className="pl-2">
      <h1 className="text-2xl font-semibold text-[#34485A]">Task Status</h1>
      {taskInProgress.length === 0 && (
        <p className="text-[16px] text-[#627382] my-4">
          Select a ticket to add to Task Status
        </p>
      )}

      <div>
        {taskInProgress.map((taskData) => (
          <TaskStatusCard key={taskData.id} taskData={taskData} />
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
