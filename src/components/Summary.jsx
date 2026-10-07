import SummaryCard from './SummaryCard'

const Summary = ({ tasks }) => {
    const counts = tasks.reduce((acc, curr) => {
        if (curr.status === 'Done') {
            acc.done += 1;
        } else if (curr.status === 'In Progress') {
            acc.inProgress += 1;
        } else if (curr.status === 'Todo') {
            acc.todo += 1;
        }

        return acc;
    }, {
        todo: 0,
        inProgress: 0,
        done: 0,
    })

    return (
        <div>
            <h1 className='text-2xl font-bold mb-3'>Dashboard</h1>
            <div className='grid grid-cols-4 gap-5'>
                <SummaryCard taskType={'Total Tasks'} taskLength={tasks.length} />
                <SummaryCard taskType={'To Do'} taskLength={counts.todo} />
                <SummaryCard taskType={'In Progress'} taskLength={counts.inProgress} />
                <SummaryCard taskType={'Done'} taskLength={counts.done} />
            </div>
        </div>
    )
}

export default Summary