import TaskCard from "./TaskCard"

const TasksGrid = ({tasks}) => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    )
}

export default TasksGrid
