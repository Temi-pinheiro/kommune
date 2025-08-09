/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { Jobs } from './-panes/Jobs'
import { Tasks } from './-panes/Tasks'
import { Group, Panes, SearchBar } from '@/components'

type JobsPageOptions = 'jobs' | 'tasks'
export type JobStatusOptions = 'all' | 'open' | 'accepted' | 'completed'
export type TaskStatusOptions = 'all' | 'open' | 'assigned' | 'completed'
type StatusOptions = JobStatusOptions | TaskStatusOptions

type JobsSearch = {
  active: 'jobs' | 'tasks'
  status: StatusOptions
}

export const Route = createFileRoute('/app/jobs/')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): JobsSearch => {
    // validate and parse the search params into a typed state
    return {
      active: (search.active as JobsPageOptions) || 'jobs',
      status: (search.status as StatusOptions) || 'all',
    }
  },
})

function RouteComponent() {
  const navigate = useNavigate({ from: Route.fullPath })
  const { active, q } = Route.useSearch()
  const [search, setSearch] = useState(() => q)

  const panes = [
    {
      id: 'jobs',
      label: 'Jobs',
      show: true,
    },
    {
      id: 'tasks',
      label: 'My Tasks',
      show: true,
    },
  ]

  const handleSwitch = (newActive: JobsPageOptions) => {
    navigate({
      search: (prev) => ({ ...prev, active: newActive, status: 'all' }),
    })
  }

  return (
    <div className="bg-white rounded-2xl min-lg:min-w-[500px] max-w-[46%] w-full h-full overflow-y-scroll gap-y-6 flex flex-col text-black">
      <div className="px-6">
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <Group key="body">
        <div className="flex flex-col w-full">
          <Panes active={active} handleChange={handleSwitch} panes={panes} />

          {active == 'jobs' && <Jobs />}
          {active == 'tasks' && <Tasks />}
        </div>
      </Group>
    </div>
  )
}
