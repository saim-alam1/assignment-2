const ResolvedTaskCard = ({ resolvedTask }) => {
  return (
    <div className="card bg-base-100 my-4 shadow-sm w-full">
      <div className="card-body">
        <h2 className="card-title">{resolvedTask.title}</h2>
        <button className="btn bg-[#02A53B] text-[16px] font-semibold text-white">
          Resolved
        </button>
      </div>
    </div>
  );
};

export default ResolvedTaskCard;
