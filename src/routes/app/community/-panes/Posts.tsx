import { posts } from '../../-data/Posts'
import { Post } from '@/components'

export const Posts = () => {
  return (
    <div className="p-6 w-full h-full overflow-y-scroll gap-y-6 flex flex-col">
      {posts.map((post) => (
        <Post showCommunity={false} post={post} key={post.id} />
      ))}
    </div>
  )
}
