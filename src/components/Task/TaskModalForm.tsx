interface Props {
  visible: Boolean
  onClose: any
}

export const TaskModalForm: React.FC<Props> = ({ visible, onClose }) => {
  if (!visible) return null

  return (
    <div className="font-poppins relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="flex flex-col gap-4 p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                New task
              </h3>
              <input className="font-light border p-4 rounded-xl h-12" placeholder="Name" />
              <textarea rows={5} className="font-light border p-4 rounded-xl" placeholder="Description" />
              <input className="font-light border p-4 rounded-xl h-12" type="date" placeholder="Date" />
              <input className="font-light border p-4 rounded-xl h-12" placeholder="Tags" />
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
              >
                Add
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
