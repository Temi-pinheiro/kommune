import { jobReqs } from '../../-data/Jobs'
import { JobRequest } from '@/components'

export const Jobs = () => {
  return (
    <div className="p-6 w-full h-full overflow-y-scroll gap-y-6 flex flex-col">
      {jobReqs.map((jobReq) => (
        <JobRequest jobReq={jobReq} key={jobReq.id} />
      ))}
    </div>
  )
}
