import { useNavigate } from '@tanstack/react-router'
import { Route } from '..'
import { myTasks } from '../../-data/Tasks'
import type { TaskStatusOptions } from '..'
import { TaskCard, TextPanes } from '@/components'

export const Tasks = () => {
  const navigate = useNavigate({ from: Route.fullPath })
  const { status } = Route.useSearch()
  const panes = [
    {
      id: 'all',
      label: 'All',
      show: true,
    },
    {
      id: 'open',
      label: 'Open',
      show: true,
    },
    {
      id: 'assigned',
      label: 'Assigned',
      show: true,
    },
    {
      id: 'completed',
      label: 'Completed',
      show: true,
    },
  ]
  const handleSwitch = (newActive: TaskStatusOptions) => {
    navigate({
      search: (prev) => ({ ...prev, status: newActive }),
    })
  }
  return (
    <div className="p-6 w-full h-full overflow-y-scroll gap-y-6 flex flex-col">
      <TextPanes panes={panes} active={status} handleChange={handleSwitch} />
      {myTasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  )
}
