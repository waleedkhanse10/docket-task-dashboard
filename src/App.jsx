import { useEffect, useReducer, useState } from "react"
import Navbar from "./components/Navbar"
import Summary from "./components/Summary"
import TasksGrid from "./components/TasksGrid"
import Toolbar from "./components/Toolbar"
import AddTask from "./components/AddTask"

function reducer(state, action) {
    if (action.type === 'ADD_TASK') {
        return [...state, action.payload]
    }

    if (action.type === 'UPDATE_TASK') {
        return state.map((task) => {
            if (task.id !== action.payload.id) {
                return task;
            }
            return action.payload
        })
    }

    if (action.type === 'DELETE_TASK') {
        return state.filter((task) => (
            task.id !== action.payload.id
        ))
    }

    if (action.type === 'CHANGE_STATUS') {
        return state.map((task) => {
            if (task.id !== action.payload.id) {
                return task
            }
            return {
                ...task,
                status: action.payload.status
            }
        })
    }

    return state;
}

const App = () => {

    const getInitialTasks = () => {
        return JSON.parse(localStorage.getItem('tasks')) || []
    }

    const [state, dispatch] = useReducer(
        reducer,
        undefined,
        getInitialTasks
    )

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state))
    }, [state])

    const [search, setSearch] = useState("")
    const [statusFilter, setStatusFilter] = useState("All")
    const [priorityFilter, setPriorityFilter] = useState("All")
    const [sortBy, setSortBy] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [editingTask, setEditingTask] = useState(null)

    const normalizedSearch = search.trim().toLowerCase()

    const filteredTasks = state.filter((task) => {
        const taskStatusFilter = statusFilter === "All" || task.status === statusFilter
        const priorityStatusFilter = priorityFilter === "All" || task.priority === priorityFilter
        const searchMatch = normalizedSearch === "" || (task.title.trim().toLowerCase().includes(normalizedSearch))

        return taskStatusFilter && priorityStatusFilter && searchMatch;
    })

    const finalTasks = [...filteredTasks]

    if (sortBy === "dueDate") {
        finalTasks.sort((a, b) => (
            new Date(a.dueDate) - new Date(b.dueDate)
        ))
    }

    if (sortBy === "priority") {
        const priorityOrder = {
            High: 1,
            Medium: 2,
            Low: 3,
        }
        finalTasks.sort((a, b) => (
            priorityOrder[a.priority] - priorityOrder[b.priority]
        ))
    }

    if (sortBy === "newest") {
        finalTasks.sort((a, b) => (
            new Date(b.createdAt) - new Date(a.createdAt))
        )
    }

    const onEdit = (task) => {
        setEditingTask(task)
        setShowForm(true)
    }

    const onAdd = () => {
        setEditingTask(null)
        setShowForm(true)
    }

    const onDelete = (task) => {
        const confirmed = window.confirm(`Are you sure to delete ${task.title}`)

        if (!confirmed) return

        dispatch({
            type: "DELETE_TASK",
            payload: task
        })
    }

    const clearFilter = () => {
        setSearch("")
        setStatusFilter("All")
        setPriorityFilter("All")
        setSortBy("")
    }

    return (
        <div className="bg-[#F8F9FF] w-full min-h-screen">
            <Navbar showForm={{ showForm, setShowForm }} onAdd={onAdd} />
            <div className="px-15 py-4 flex flex-col gap-8">
                <Summary tasks={state} />
                <Toolbar
                    search={{ search, setSearch }}
                    statusFilter={{ statusFilter, setStatusFilter }}
                    priorityFilter={{ priorityFilter, setPriorityFilter }}
                    sortBy={{ sortBy, setSortBy }}
                />
                <TasksGrid
                    onDelete={onDelete}
                    tasks={finalTasks}
                    onEdit={onEdit}
                    allTasks={state}
                    clearFilters={clearFilter}
                />
            </div>
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[10px] py-8">
                    <AddTask
                        dispatch={dispatch}
                        setShowForm={setShowForm}
                        editingTask={editingTask}
                    />
                </div>
            )}
        </div>
    )
}

export default App
