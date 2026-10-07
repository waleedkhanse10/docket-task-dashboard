import TaskCard from "./TaskCard"

const TasksGrid = ({ tasks, onEdit, onDelete}) => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default TasksGrid
