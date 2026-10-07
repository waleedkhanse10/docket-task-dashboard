import { useReducer, useState } from "react"
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
    const tasks = [
        {
            id: crypto.randomUUID(),
            title: "Design landing page",
            description: "Create the initial landing page design",
            priority: "High",
            status: "In Progress",
            dueDate: new Date("2026-10-08"),
            createdAt: new Date("2026-10-01").getTime(),
        },
        {
            id: crypto.randomUUID(),
            title: "Fix login bug",
            description: "Investigate and fix the login issue",
            priority: "High",
            status: "Todo",
            dueDate: new Date("2026-10-06"),
            createdAt: new Date("2026-10-03").getTime(),
        },
        {
            id: crypto.randomUUID(),
            title: "Update documentation",
            description: "Update project documentation",
            priority: "Low",
            status: "Done",
            dueDate: new Date("2026-10-05"),
            createdAt: new Date("2026-09-28").getTime(),
        },
        {
            id: crypto.randomUUID(),
            title: "Build task form",
            description: "Create the task creation form",
            priority: "Medium",
            status: "Todo",
            dueDate: new Date("2026-10-10"),
            createdAt: new Date("2026-10-04").getTime(),
        },
        {
            id: crypto.randomUUID(),
            title: "Test responsive layout",
            description: "Check dashboard on different screen sizes",
            priority: "Medium",
            status: "In Progress",
            dueDate: new Date("2026-10-12"),
            createdAt: new Date("2026-10-05").getTime(),
        },
    ]

    const [state, dispatch] = useReducer(reducer, tasks)

    const [search, setSearch] = useState("")
    const [statusFilter, setStatusFilter] = useState("All")
    const [priorityFilter, setPriorityFilter] = useState("All")
    const [sortBy, setSortBy] = useState("")
    const [showForm, setShowForm] = useState(false)

    const filteredTasks = state.filter((task) => {
        const taskStatusFilter = statusFilter === "All" || task.status === statusFilter
        const priorityStatusFilter = priorityFilter === "All" || task.priority === priorityFilter
        const searchMatch = search.trim().toLowerCase() === "" || (task.title.trim().toLowerCase().includes(search.trim().toLowerCase()))

        return taskStatusFilter && priorityStatusFilter && searchMatch;
    })

    const finalTasks = [...filteredTasks]

    if (sortBy === "dueDate") {
        finalTasks.sort((a, b) => (
            a.dueDate - b.dueDate
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
        finalTasks.sort((b, a) => (
            b.createdAt - a.createdAt
        ))
    }

    return (
        <div className="bg-[#F8F9FF] w-full min-h-screen">
            <Navbar showForm={{ showForm, setShowForm }} />
            <div className="px-15 py-4 flex flex-col gap-8">
                <Summary tasks={state} />
                <Toolbar
                    search={{ search, setSearch }}
                    statusFilter={{ statusFilter, setStatusFilter }}
                    priorityFilter={{ priorityFilter, setPriorityFilter }}
                    sortBy={{ sortBy, setSortBy }}
                />
                <TasksGrid tasks={finalTasks} />
            </div>
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[10px] py-8">
                    <AddTask dispatch={dispatch} setShowForm={setShowForm} />
                </div>
            )}
        </div>
    )
}

export default App
