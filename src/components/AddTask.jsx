import { Trash, X } from "lucide-react"
import { useEffect, useState } from "react"

const AddTask = ({ dispatch, setShowForm, editingTask }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState("Medium")
    const [status, setStatus] = useState("Todo")
    const [dueDate, setDueDate] = useState("")

    function formHandler(e) {
        e.preventDefault();

        if (title.trim() === "") return

        if (editingTask) {
            dispatch({
                type: 'UPDATE_TASK',
                payload: {
                    ...editingTask,
                    title: title.trim(),
                    description: description.trim(),
                    priority,
                    status,
                    dueDate
                }
            })

            setShowForm(false)
            return
        }

        const newTask = {
            id: crypto.randomUUID(),
            title: title.trim(),
            description: description.trim(),
            priority,
            status,
            dueDate,
            createdAt: Date.now()
        }

        dispatch({
            type: 'ADD_TASK',
            payload: newTask
        })

        setTitle("")
        setDescription("")
        setPriority("Medium")
        setStatus("Todo")
        setDueDate("")
        setShowForm(false)
    }

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title)
            setDescription(editingTask.description)
            setPriority(editingTask.priority)
            setStatus(editingTask.status)
            setDueDate(
                editingTask.dueDate
                    ? new Date(editingTask.dueDate).toISOString().split("T")[0]
                    : ""
            )
        }
    }, [editingTask])

    return (
        <div className="py-3 min-h-full">

            <div className="flex flex-col gap-5 bg-white py-8 rounded-lg max-w-[95vw] w-130 max-h-[90vh] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
                <div className="flex justify-between px-7">
                    <h1 className="text-2xl font-semibold">Add Task</h1>
                    <button
                        onClick={() => {
                            setShowForm(false)
                        }}
                        className="cursor-pointer"
                    >
                        <X />
                    </button>
                </div>

                <form
                    onSubmit={formHandler}
                    className="flex flex-col gap-5 px-7"
                >
                    <div>
                        <label className="text-sm font-medium text-gray-700" htmlFor="title">Title</label> <br />
                        <input
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            className="w-full outline-none py-2.5 px-4 bg-[#EFF4FF] rounded-md"
                            type="text"
                            placeholder="Add title"
                            id="title"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700" htmlFor="description">Description</label> <br />
                        <textarea
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            className="w-full bg-[#EFF4FF] py-3 px-4 resize-none rounded-md outline-none"
                            name="description" id="description" placeholder="Add detail of the task" rows={2}></textarea>
                    </div>

                    <div className="flex justify-between w-full grow gap-3">
                        <div className="w-full">
                            <label className="text-sm font-medium text-gray-700" htmlFor="priority">Priority Level</label>
                            <select
                                value={priority}
                                onChange={(e) => {
                                    setPriority(e.target.value)
                                }}
                                required
                                className="w-full bg-white py-2.5 px-4 cursor-pointer rounded shadow outline-none border border-gray-300 focus-within:ring focus-within:ring-indigo-600 transition-all duration-200"
                                id="priority"
                            >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <label className="text-sm font-medium text-gray-700" htmlFor="status">Workflow Status</label>
                            <select
                                value={status}
                                onChange={(e) => {
                                    setStatus(e.target.value)
                                }}
                                className="w-full bg-white py-2.5 px-4 cursor-pointer rounded shadow outline-none border border-gray-300 focus-within:ring focus-within:ring-indigo-600 transition-all duration-200"
                                id="status"
                            >
                                <option value="Todo">Todo</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="text-sm font-medium text-gray-700" htmlFor="dueDate">Target Due Date</label> <br />
                        <input
                            value={dueDate}
                            onChange={(e) => {
                                setDueDate(e.target.value)
                            }}
                            className="w-full py-2.5 px-4 outline-none bg-[#EFF4FF] rounded-md"
                            type="date" name="dueDate" id="dueDate" />
                    </div>

                    <div className="flex items-center justify-between bg-[#EFF4FF] py-5 px-8 -mx-7 -mb-8 rounded-b-lg">
                        <button
                            onClick={() => setShowForm(false)}
                            type="button"
                            className="bg-white py-2 px-5 rounded-lg cursor-pointer hover:bg-[#EFF4FF] shadow"
                        >Cancel</button>
                        <button
                            type="submit"
                            className="bg-indigo-600 py-2 px-5 rounded-lg text-white hover:bg-indigo-700 cursor-pointer shadow"
                        >Save Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTask
