import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { task as TaskActions } from '../../services/Task/TaskActions'

interface Props {
  visible: Boolean
  onClose: any
  type?: string
  values?: any
}

interface PropsForm {
  value: any
  key: string
}

const initialState = {
  name: undefined,
  description: undefined,
  date: undefined,
  state: undefined,
  tags: []
}

export const TaskModalForm: React.FC<Props> = ({ visible, onClose, type, values }) => {
  const { success, loading } = useSelector((state: any) => state.task)

  const dispatch = useDispatch()
  const isEdit = type === 'edit'

  const [form, setForm] = useState(initialState)
  const isValid = form.name && form.description && form.date

  useEffect(() => {
    if (success.create || success.update) {
      onClose()
      setForm(initialState)
    }
  }, [success.create, success.update])

  useEffect(() => {
    if (isEdit && visible) {
      setForm(values)
    }
  }, [visible])

  const onSubmit = async ({ status }: any) => {
    if (isEdit) {
      dispatch(TaskActions.update({ ...form, status }))
      return
    }
    dispatch(TaskActions.create(form))
  }

  const handleForm = ({ value, key }: PropsForm) => {
    setForm({ ...form, [key]: value })
  }

  if (!visible) return null

  return (
    <div className="font-poppins relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="flex flex-col gap-4 p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                {isEdit ? 'Update' : 'New'} task
              </h3>
              <input
                className="font-light border p-4 rounded-xl h-12"
                placeholder="Name*"
                value={form.name}
                onChange={({ target: { value } }) => handleForm({ value, key: 'name' })}
              />
              <textarea
                rows={5}
                className="font-light border p-4 rounded-xl"
                placeholder="Description*"
                value={form.description}
                onChange={({ target: { value } }) => handleForm({ value, key: 'description' })}
              />
              <input
                className="font-light border p-4 rounded-xl h-12"
                type="date"
                placeholder="Date"
                value={form.date}
                onChange={({ target: { value } }) => handleForm({ value, key: 'date' })}
              />
              {isEdit && (
                <div className="flex fle-row gap-4 items-center">
                  <h3 className="font-bold">Done</h3>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      id="switch-3"
                      type="checkbox"
                      className="peer sr-only"
                      onClick={() => handleForm({ value: 'DONE', key: 'state' })}
                    />
                    <label htmlFor="switch-3" className="hidden"></label>
                    <div className="peer h-4 w-11 rounded border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-md after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
                  </label>
                </div>
              )}
              <input className="font-light border p-4 rounded-xl h-12" placeholder="Tags" />
            </div>
            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {isEdit && (
                <button
                  type="button"
                  className={`w-full rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto ${
                    !isValid && 'opacity-35'
                  }`}
                  onClick={() => onSubmit({ status: 'DELETE' })}
                  disabled={!isValid || loading.create || loading.update}
                >
                  x
                </button>
              )}
              <button
                type="button"
                className={`w-full rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 ${
                  !isValid && 'opacity-35'
                }`}
                onClick={() => onSubmit({ status: 'ACTIVE' })}
                disabled={!isValid || loading.create || loading.update}
              >
                {isEdit ? 'Update' : 'Add'}
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
