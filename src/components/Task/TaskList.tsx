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

  return (
    <div className="grid grid-cols-4 gap-4">
      {tasks.map((task: Task, index: number) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  )
}
