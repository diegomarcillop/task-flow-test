import { getColor } from '../../common/helpers/getColor'
import { truncateText } from '../../common/helpers/truncateText'

const dayjs = require('dayjs')

interface Task {
  name: string
  description: string
  date: string
  tags?: string[]
}

interface Props {
  task: Task
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4 flex flex-col font-poppins border border-slate-500">
      <div className="tags flex gap-1 mb-1">
        {task?.tags?.map((tag, index) => (
          <button key={index} className={`font-normal text-slate-800 rounded-2xl bg-orange-300 px-4 text-sm h-6 ${getColor()}`}>
            {tag}
          </button>
        ))}
      </div>
      <h3 className={`font-semibold  text-sm`}>{task.name}</h3>
      <p className={`font-light text-sm`}>{truncateText(task.description, 40)}</p>
      <span className="border my-3" />
      <div className="flex flex-row gap-1">
        <span className="material-icons text-stone-400 text-sm">calendar_month</span>
        <p className="text-sm">{dayjs(task.date).format('DD MMMM YY')}</p>
      </div>
    </div>
  )
}
