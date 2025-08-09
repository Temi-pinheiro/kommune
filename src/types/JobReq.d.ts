type JobReq = {
  id: string
  title: string
  description: string
  assignee?: {
    name: string
    handle: string
    avatar?: string
    id: string
  }
  location: string
  budget: string
  status: 'open' | 'accepted' | 'completed' | 'assigned'
  startDate: string
  owner: {
    name: string
    handle: string
    avatar?: string
    id: string
  }
}
