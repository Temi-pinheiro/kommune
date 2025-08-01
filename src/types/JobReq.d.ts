type JobReq = {
  id: string
  title: string
  description: string
  location: string
  budget: string
  startDate: string
  owner: {
    name: string
    handle: string
    avatar: string
    id: string
  }
}
