import { Calendar, Pencil, Trash } from 'lucide-react'
import PriorityBadge from './badges/PriorityBadge'
import StatusBadge from './badges/statusBadge'

const TaskCard = ({ task, onEdit, onDelete }) => {
    return (
        <div className='flex flex-col gap-4 bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full'>
            <article className='flex flex-col justify-between gap-5'>
                <div className='flex flex-col gap-1 border-b border-gray-300'>
                    <div className='flex justify-between items-center mb-3'>
                        <div className='flex gap-1 items-center'>
                            <PriorityBadge priority={task.priority} />
                            <StatusBadge status={task.status} />
                        </div>
                        <div className='flex gap-2'>
                            <button
                                onClick={() => {
                                    onEdit(task)
                                }}
                                aria-label='edit task'
                                className='cursor-pointer p-1.5 rounded-md hover:bg-blue-50 hover:text-[#2658b6] transition-colors'
                            >
                                <Pencil size={'18px'} />
                            </button>
                            <button aria-label='delete task' className='cursor-pointer p-1.5 rounded-md hover:bg-red-50 hover:text-red-500 transition-colors'>
                                <Trash
                                    onClick={() => {
                                        onDelete(task)
                                    }}
                                    size={'18px'}
                                />
                            </button>
                        </div>
                    </div>
                    <h3 className='text-lg font-bold'>{task.title}</h3>
                    <p className='text-[15px] mb-4 text-gray-600'>{task.description}</p>
                </div>
                <div className='flex gap-1.5 items-center mt-auto pt-3 border-t border-gray-100'>
                    <Calendar size={'18px'} />
                    <span className='text-[13px]'>{new Date(task.dueDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })}</span>
                </div>
            </article>
        </div>
    )
}

export default TaskCard
