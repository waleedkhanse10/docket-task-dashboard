import { X } from "lucide-react"
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
        <div className="w-full max-w-lg mx-4 max-h-[90vh] flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
                <h1 className="text-lg font-semibold text-gray-800">Add Task</h1>
                <button
                    onClick={() => setShowForm(false)}
                    className="cursor-pointer p-1 rounded-md hover:bg-gray-100 transition-colors"
                    aria-label="Close"
                >
                    <X size={20} />
                </button>
            </div>

            <form
                id="task-form"
                onSubmit={formHandler}
                className="flex flex-col gap-5 px-6 py-6 overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
                <div>
                    <label className="text-[13px] font-medium text-gray-700" htmlFor="title">Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full outline-none py-2.5 px-4 bg-[#EFF4FF] rounded-lg mt-1.5 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        type="text"
                        placeholder="Add title"
                        id="title"
                        required
                    />
                </div>

                <div>
                    <label className="text-[13px] font-medium text-gray-700" htmlFor="description">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-[#EFF4FF] py-3 px-4 resize-none rounded-lg outline-none mt-1.5 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        name="description" id="description" placeholder="Add detail of the task" rows={2}></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="w-full">
                        <label className="text-[13px] font-medium text-gray-700" htmlFor="priority">Priority Level</label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="w-full bg-white py-2.5 px-4 cursor-pointer rounded-lg outline-none border border-gray-200 focus:border-indigo-500 transition-all duration-200 mt-1.5"
                            id="priority"
                        >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="text-[13px] font-medium text-gray-700" htmlFor="status">Workflow Status</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full bg-white py-2.5 px-4 cursor-pointer rounded-lg outline-none border border-gray-200 focus:border-indigo-500 transition-all duration-200 mt-1.5"
                            id="status"
                        >
                            <option value="Todo">Todo</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="text-[13px] font-medium text-gray-700" htmlFor="dueDate">Target Due Date</label>
                    <input
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="w-full py-2.5 px-4 outline-none bg-[#EFF4FF] rounded-lg mt-1.5 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        type="date" name="dueDate" id="dueDate" />
                </div>
            </form>

            <div className="flex items-center justify-end gap-3 bg-[#EFF4FF] px-6 py-5 mt-auto">
                <button
                    onClick={() => setShowForm(false)}
                    type="button"
                    className="bg-white py-2 px-5 rounded-lg cursor-pointer hover:bg-gray-100 active:scale-95 shadow-sm text-sm font-medium transition-all"
                >Cancel</button>
                <button
                    type="submit"
                    form="task-form"
                    className="bg-indigo-600 py-2 px-5 rounded-lg text-white hover:bg-indigo-700 active:scale-95 cursor-pointer shadow-sm text-sm font-medium transition-all"
                >Save Task</button>
            </div>
        </div>
    )
}

export default AddTask
