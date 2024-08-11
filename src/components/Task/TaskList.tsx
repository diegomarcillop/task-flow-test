import { TaskItem } from './TaskItem'

const tasks = [
  {
    id: '1',
    name: 'Comprar víveres',
    date: '2024-08-10',
    tags: ['Medium', 'Personal'],
    state: 'completed', // 'pending', 'in-progress', 'completed'
    description: 'Comprar pan, leche, y huevos en el supermercado.'
  },
  {
    id: '2',
    name: 'Llamar al cliente',
    tags: ['Aseo', 'Vida'],
    date: '2024-08-11',
    state: 'pending', // 'pending', 'in-progress', 'completed'
    description: 'Llamar al cliente para revisar los requisitos del proyecto.'
  },
  {
    id: '3',
    name: 'Revisar el informe',
    tags: ['Trabajo'],
    date: '2024-08-12',
    state: 'in-progress', // 'pending', 'in-progress', 'completed'
    description: 'Revisar y corregir errores en el informe financiero del trimestre.'
  },
  {
    id: '4',
    name: 'Enviar correo a equipo',
    tags: ['Trabajo', 'Vida'],
    date: '2024-08-13',
    state: 'pending', // 'pending', 'in-progress', 'completed'
    description: 'Enviar un correo electrónico a todo el equipo con la agenda de la reunión.'
  },
  {
    id: '5',
    name: 'Actualizar la aplicación',
    date: '2024-08-14',
    state: 'completed', // 'pending', 'in-progress', 'completed'
    description: 'Implementar las últimas actualizaciones y realizar pruebas antes del despliegue.'
  },
  {
    id: '6',
    name: 'Preparar presentación',
    date: '2024-08-15',
    state: 'in-progress', // 'pending', 'in-progress', 'completed'
    description: 'Preparar la presentación para la reunión del lunes con el equipo de marketing.'
  }
]

export const TaskList = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  )
}
