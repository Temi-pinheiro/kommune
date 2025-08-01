import { createFileRoute } from '@tanstack/react-router'
import { posts } from '../-data/Posts'
import { Post } from '@/components'

export const Route = createFileRoute('/app/home/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="page">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}
