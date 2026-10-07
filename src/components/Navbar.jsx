import AddTask from "./AddTask"
import { SquareCheckBig } from "lucide-react"

const Navbar = ({ showForm: { showForm, setShowForm } }) => {
    return (
        <div className="flex justify-between items-center py-4 px-15 bg-white border-b border-gray-200">
            <div className="flex items-center gap-3">
                <SquareCheckBig />
                <h2 className="text-xl font-semibold">Docket</h2>
            </div>
            <button
                onClick={() => {
                    setShowForm(true)
                }}
                className="py-1.5 px-5 text-center text-white bg-indigo-600 rounded-lg text-[13px] font-semibold cursor-pointer hover:bg-indigo-700 shadow"
            >+ Add Task</button>
        </div>
    )
}

export default Navbar
