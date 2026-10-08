import AddTask from "./AddTask"
import { SquareCheckBig } from "lucide-react"

const Navbar = ({ showForm: { showForm, setShowForm }, onAdd }) => {    
    return (
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 bg-white border-b border-gray-200">
            <div className="flex items-center gap-3">
                <SquareCheckBig />
                <h2 className="text-base md:text-lg font-semibold text-gray-800">Docket</h2>
            </div>
            <button
                onClick={onAdd}
                className="py-1.5 px-5 text-center text-white bg-indigo-600 rounded-lg text-sm font-semibold cursor-pointer hover:bg-indigo-700 hover:shadow-md active:scale-95 transition-all duration-200"
            >+ Add Task</button>
        </div>
    )
}

export default Navbar
