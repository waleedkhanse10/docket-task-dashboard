import { Search } from "lucide-react"

const Toolbar = ({
    search: { search, setSearch },
    statusFilter: { statusFilter, setStatusFilter },
    priorityFilter: { priorityFilter, setPriorityFilter },
    sortBy: { sortBy, setSortBy } }) => {

    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-2 bg-white py-2 px-3 rounded-lg shadow w-80 border border-gray-300 cursor-text focus-within:ring-2 focus-within:ring-indigo-600 transition-all duration-200">
                <Search size={'16px'} />
                <input
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                    className="outline-none text-sm w-full"
                    type="text"
                    placeholder="search task by title"
                />
            </div>

            <div className="flex items-center gap-2">
                <select
                    value={statusFilter}
                    onChange={(e) => {
                        setStatusFilter(e.target.value)
                    }}
                    className="bg-white py-1 px-2 cursor-pointer rounded shadow outline-none border border-gray-300 focus-within:ring focus-within:ring-indigo-600 transition-all duration-200"
                    id="status"
                >
                    <option value="All">Status: All</option>
                    <option value="Todo">Todo</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>

                <select
                    value={priorityFilter}
                    onChange={(e) => {
                        setPriorityFilter(e.target.value)
                    }}
                    className="bg-white py-1 px-2 cursor-pointer rounded shadow outline-none border border-gray-300 focus-within:ring focus-within:ring-indigo-600 transition-all duration-200"
                    id="priority"
                >
                    <option value="All">Priority: All</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <select
                    value={sortBy}
                    onChange={(e) => {
                        setSortBy(e.target.value)
                    }}
                    className="bg-white py-1 px-2 cursor-pointer rounded shadow outline-none border border-gray-300 focus-within:ring focus-within:ring-indigo-600 transition-all duration-200"
                    id="sort"
                >
                    <option value="">Sort by</option>
                    <option value="dueDate">Due Date</option>
                    <option value="priority">Priority</option>
                    <option value="newest">Newest</option>
                </select>
            </div>
        </div>
    )
}

export default Toolbar
