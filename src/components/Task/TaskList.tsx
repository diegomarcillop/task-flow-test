import { useSelector } from 'react-redux'

import Lottie from 'lottie-react'
import { useState } from 'react'
import loaderData from '../../assets/lottie/loader.json'
import { TaskItem } from './TaskItem'
import { TaskModalForm } from './TaskModalForm'
interface Task {
  name: string
  description: string
  date: string
  tags?: string[]
}

export const TaskList = () => {
  const { tasks, loading } = useSelector((state: any) => state.task)

  const [showEdit, setShowEdit] = useState(false)
  const [selectedTask, setSelectedTask] = useState({})

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
        <p className="text-lg text-slate-500">Oops, you don't have any homework, add one! </p>
      </div>
    )
  }

  const handleSelectedTask = (values: any) => {
    setSelectedTask(values)
    setShowEdit(!showEdit)
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {tasks.map((task: Task, index: number) => (
        <span key={index} onClick={() => handleSelectedTask(task)}>
          <TaskItem task={task} />
        </span>
      ))}

      <TaskModalForm visible={showEdit} onClose={() => setShowEdit(false)} type="edit" values={selectedTask} />
    </div>
  )
}
