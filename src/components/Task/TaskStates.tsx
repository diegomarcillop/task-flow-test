import { useSelector } from 'react-redux'

const states = [
  {
    key: 'DONE',
    name: 'Done',
    color: 'bg-green-400'
  },
  {
    key: 'PENDING',
    name: 'Pending',
    color: 'bg-gray-300'
  }
]

export const TaskStates = () => {
  const { tasks } = useSelector((state: any) => state.task)

  if (tasks.length === 0) return null

  return (
    <div className="flex flex-row gap-4 py-6 font-poppins">
      {states.map((state, index) => (
        <button
          key={index}
          className={`font-light text-slate-800 rounded-2xl bg-orange-300 px-6 text-sm h-8 ${state.color}`}
        >
          {state.name} <span className="font-bold">({tasks.filter((e: any) => e.state === state.key).length})</span>
        </button>
      ))}
    </div>
  )
}
