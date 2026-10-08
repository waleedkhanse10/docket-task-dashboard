const StatusBadge = ({status}) => {    
    const statusStyles = {
        Todo:"bg-slate-100 text-slate-700 border-slate-300",
        "In Progress": "bg-blue-100 text-blue-700 border-blue-300",
        Done: "bg-green-100 text-green-700 border-green-300"
    }

    return (
        <span className={`py-1 px-3 rounded font-semibold text-xs border ${statusStyles[status]}`}>
            {status}
        </span>
    )
}

export default StatusBadge
