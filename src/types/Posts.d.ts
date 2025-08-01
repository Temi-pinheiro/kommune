type Post = {
  id: string
  community: {
    id: string
    name: string
  }
  user: {
    name: string
    handle: string
    avatar: string
    id: string
  }
  dateCreated: string
  post: string
  interactions: {
    saves: number
    kudos: number
    comments: number
  }
  hasLiked: boolean
  hasCommented: boolean
  hasSaved: boolean
  pictures?: Array<string> | null
}
