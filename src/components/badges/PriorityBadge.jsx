const PriorityBadge = ({ priority }) => {
    const priorityStyles = {
        High: "bg-red-100 text-[#93000A] border-[#ebb9b3]",
        Medium: "bg-yellow-100 text-yellow-800 border-yellow-300",
        Low: "bg-green-100 text-green-800 border-green-300",
    }
    return (
        <span className={`py-1 px-3 rounded text-sm font-semibold border ${priorityStyles[priority]}`}>{priority}</span>
    )
}

export default PriorityBadge
