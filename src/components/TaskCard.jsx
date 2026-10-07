import { Calendar, Pencil, Trash } from 'lucide-react'
import PriorityBadge from './badges/PriorityBadge'
import StatusBadge from './badges/statusBadge'

const TaskCard = ({ task }) => {    
    return (
        <div className='flex flex-col gap-4 bg-white rounded-lg p-4 shadow border border-gray-300 hover:border hover:border-blue-500 hover:shadow-md'>
            <article className='flex flex-col justify-between gap-5'>
                <div className='flex flex-col gap-1 border-b border-gray-300'>
                    <div className='flex justify-between items-center mb-2'>
                        <div className='flex gap-1 items-center'>
                            <PriorityBadge priority={task.priority}/>
                            <StatusBadge status={task.status}/>
                        </div>
                        <div className='flex gap-2'>
                            <button aria-label='edit task' className='cursor-pointer'>
                                <Pencil
                                    className='hover:text-[#2658b6]'
                                    size={'18px'}
                                />
                            </button>
                            <button aria-label='delete task' className='cursor-pointer'>
                                <Trash
                                    className='hover:text-red-500'
                                    size={'18px'}
                                />
                            </button>
                        </div>
                    </div>
                    <h3 className='font-bold'>{task.title}</h3>
                    <p className='text-sm mb-4'>{task.description}</p>
                </div>
                <div className='flex gap-1 items-center '>
                    <Calendar size={'18px'} />
                    <span className='text-sm'>{new Date(task.dueDate).toLocaleDateString('en-US', {
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
