import { useSelector } from 'react-redux'

import Lottie from 'lottie-react'
import loaderData from '../../assets/lottie/loader.json'
import { TaskItem } from './TaskItem'
interface Task {
  name: string
  description: string
  date: string
  tags?: string[]
}

export const TaskList = () => {
  const { tasks, loading } = useSelector((state: any) => state.task)

  if (loading.getAll) {
    return (
      <div className="w-full flex justify-center items-center">
        <Lottie animationData={loaderData} loop={true} />
      </div>
    )
  }

  if (tasks.length === 0) {
    return (
      <div className="font-poppins w-full flex justify-center items-center">
        <p className='text-lg text-slate-500'>Oops, you don't have any homework, add one! </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {tasks.map((task: Task, index: number) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  )
}
