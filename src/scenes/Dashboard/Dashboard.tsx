import { useState } from 'react'
import { TaskAddButton } from '../../components/Task/TaskAddButton'
import { TaskList } from '../../components/Task/TaskList'
import { TaskModalForm } from '../../components/Task/TaskModalForm'

export const Dashboard = () => {
  const [showAddModal, setShowAddModal] = useState(false)

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
