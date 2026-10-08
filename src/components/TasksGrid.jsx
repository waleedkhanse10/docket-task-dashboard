import { ClipboardList, SearchX } from "lucide-react"
import TaskCard from "./TaskCard"

const TasksGrid = ({ tasks, onEdit, onDelete, allTasks, clearFilters }) => {
    return (
        <>
            {tasks.length === 0 ? (
                allTasks.length === 0 ? (
                    <div className="flex flex-col items-center gap-3 mt-5">
                        <ClipboardList size={48} className="text-gray-300" />
                        <p className="text-2xl font-bold text-gray-500">No Tasks yet</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex flex-col items-center gap-3 mt-5">
                        <SearchX size={48} className="text-gray-300" />
                        <p className="text-2xl font-bold text-gray-500">No Tasks match your filters</p>
                    </div>

                        <button
                            className="py-1.5 px-5 text-center text-white mt-6 bg-indigo-600 rounded-lg text-sm font-semibold cursor-pointer hover:bg-indigo-700 shadow"
                            onClick={clearFilters}
                        >
                            Clear Filter
                        </button>
                    </div>
                )
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
