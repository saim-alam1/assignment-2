const TaskStatusCard = ({ taskData }) => {
  return (
    <div className="card bg-base-100 my-4 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{taskData.title}</h2>
        <button className="btn bg-[#02A53B] text-[16px] font-semibold text-white">
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskStatusCard;
