import { useNavigate } from '@tanstack/react-router'
import { jobReqs } from '../../-data/Jobs'
import { Route } from '..'
import type { JobStatusOptions } from '..'
import { JobRequest, TextPanes } from '@/components'

export const Jobs = () => {
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
      id: 'accepted',
      label: 'Accepted',
      show: true,
    },
    {
      id: 'completed',
      label: 'Completed',
      show: true,
    },
  ]
  const handleSwitch = (newActive: JobStatusOptions) => {
    navigate({
      search: (prev) => ({ ...prev, status: newActive }),
    })
  }
  return (
    <div className="p-6 w-full h-full overflow-y-scroll gap-y-6 flex flex-col">
      <TextPanes panes={panes} active={status} handleChange={handleSwitch} />
      {jobReqs.map((jobReq) => (
        <JobRequest jobReq={jobReq} key={jobReq.id} />
      ))}
    </div>
  )
}
