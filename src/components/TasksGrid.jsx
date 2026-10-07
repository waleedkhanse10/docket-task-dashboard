import TaskCard from "./TaskCard"

const TasksGrid = ({ tasks, onEdit, onDelete, allTasks, clearFilters }) => {
    return (
        <>
            {tasks.length === 0 ? (
                allTasks.length === 0 ? (
                    <p className="flex justify-center items-center w-full text-3xl font-bold mt-5 text-shadow">
                        No Tasks yet
                    </p>
                ) : (
                    <div className="flex flex-col items-center gap-3">
                        <p className="flex justify-center items-center w-full text-3xl font-bold mt-5 text-shadow">
                            No Tasks match your filters
                        </p>

                        <button
                            className="py-1.5 px-5 text-center text-white mt-6 bg-indigo-600 rounded-lg text-[13px] font-semibold cursor-pointer hover:bg-indigo-700 shadow"
                            onClick={clearFilters}
                        >
                            Clear Filter
                        </button>
                    </div>
                )
            ) : (
                <div className="grid grid-cols-3 gap-5">
                    {tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default TasksGrid
