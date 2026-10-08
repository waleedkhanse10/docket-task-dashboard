import { CalendarCheck } from "lucide-react"

const SummaryCard = ({taskType ,taskLength }) => {
    return (
        <div className="bg-white py-5 px-4 shadow-sm w-full rounded-xl border border-gray-200 hover:shadow-md transition-shadow" >
            <p className="mb-2 font-semibold text-sm text-gray-600">{taskType}</p>
            <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold">{taskLength}</h2>
                <CalendarCheck className="text-gray-400" size={28} />
            </div>
        </div>
    )
}

export default SummaryCard