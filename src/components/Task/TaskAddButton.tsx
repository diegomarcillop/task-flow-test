interface Props {
  onClick: any
}

export const TaskAddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      data-modal-target="default-modal"
      data-modal-toggle="default-modal"
      className="bg-fuchsia-300	 rounded-2xl w-16 h-16"
      type="button"
    >
      <span className="material-icons text-4xl" onClick={onClick}>
        add
      </span>
    </button>
  )
}
