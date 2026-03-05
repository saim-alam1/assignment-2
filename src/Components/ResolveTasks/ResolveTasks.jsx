import ResolvedTaskCard from "../ResolvedTaskCard/ResolvedTaskCard";

const ResolveTasks = ({ resolved }) => {
  console.log(resolved);

  return (
    <div className="pl-2 w-full pr-1.5">
      <h1 className="text-2xl font-semibold text-[#34485A]">Resolved Task</h1>
      {resolved.length === 0 && (
        <p className="text-[16px] text-[#627382] my-4">
          No resolved tasks yet.
        </p>
      )}

      <div>
        {resolved.map((resolvedTask) => (
          <ResolvedTaskCard key={resolvedTask.id} resolvedTask={resolvedTask} />
        ))}
      </div>
    </div>
  );
};

export default ResolveTasks;
