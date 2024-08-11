import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TaskAddButton } from '../../components/Task/TaskAddButton'
import { TaskList } from '../../components/Task/TaskList'
import { TaskModalForm } from '../../components/Task/TaskModalForm'
import { task as TaskActions } from '../../services/Task/TaskActions'

export const Dashboard = () => {
  const dispatch = useDispatch()
  const { success } = useSelector((state: any) => state.task)

  const [showAddModal, setShowAddModal] = useState(false)

  useEffect(() => {
    dispatch(TaskActions.getAll())
    if (success.create) {
      dispatch(TaskActions.setSuccess('create', false))
    }
  }, [success.create])

  return (
    <div className="container mx-auto px-8 py-8 relative h-screen">
      <div>
        <div className="mb-8">
          <div className="flex flex-row gap-3 items-center">
            <div className="bg-fuchsia-300 rounded-xl w-10 h-10 flex justify-center items-center">
              <span className="material-icons text-3xl">sort</span>
            </div>
            <h1 className="font-poppins font-bold text-3xl">Task List</h1>
          </div>
        </div>
        <TaskList />
        <div className="absolute bottom-5 right-5">
          <TaskAddButton onClick={() => setShowAddModal(!showAddModal)} />
        </div>
      </div>
      <TaskModalForm visible={showAddModal} onClose={() => setShowAddModal(false)} />
    </div>
  )
}
