import { CalendarCheck } from "lucide-react"

const SummaryCard = ({taskType ,taskLength }) => {
    return (
        <div className="bg-white py-5 px-4 shadow w-full rounded-lg min-h-30 border border-gray-300 hover:shadow-md" >
            <p className="mb-1 font-semibold">{taskType}</p>
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">{taskLength}</h2>
                <CalendarCheck />
            </div>
        </div>
    )
}

export default SummaryCard