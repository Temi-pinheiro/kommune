import { Link } from '@tanstack/react-router'
import { Group } from '../Group'
import { CommunityIcon } from '../icons'
import { Kebab } from '../Kebab'
import { CommentButton } from './components/CommentButton'
import { DislikeButton } from './components/DislikeButton'
import { LikeButton } from './components/LikeButton'
import { SaveButton } from './components/SaveButton'

export const Post = ({
  post,
  showCommunity = true,
}: {
  post: Post
  showCommunity?: boolean
}) => {
  return (
    <div className="flex flex-col w-full text-black pb-5 border-b border-b-[#00000010]">
      {showCommunity && (
        <Group key="community">
          <Link
            to="/app/community/$id"
            search={{ active: 'posts' }}
            params={{ id: post.community.id }}
            className="flex items-center gap-x-2 text-xs"
          >
            <CommunityIcon />
            {post.community.name}
          </Link>
        </Group>
      )}

      <Group key="user info and option">
        <div className="flex items-center justify-between mt-3">
          <Group key="user info">
            <div className="flex items-center gap-x-1">
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="w-[28px] h-[28px] rounded-full"
              />
              <span className="text-sm font-semibold">@{post.user.handle}</span>
              <span className="font-semibold text-sm flex items-center justify-center py-2">
                .
              </span>
              <span className="font-semibold text-sm">1d</span>
              {/* TODO turn to date */}
            </div>
          </Group>
          <Kebab>
            <div className="flex flex-col w-[100px]">
              <button className="kebab-button">View Account</button>
            </div>
          </Kebab>
        </div>
      </Group>
      <Group key="post body">
        <p className="mt-3 text-sm font-medium leading-[150%]">{post.post}</p>
        {post.pictures && post.pictures.length > 0 && (
          <img
            src={post.pictures[0]}
            alt={'test'}
            className="w-full max-h-[402px] h-full rounded-2xl mt-3"
          />
        )}
      </Group>
      <Group key="interactions">
        <div className="flex items-center w-full justify-between mt-3">
          <Group key="likes and dislikes">
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-xs">2.1k likes</span>
              <div className="flex items-center gap-x-[10px]">
                <LikeButton />
                <DislikeButton />
              </div>
            </div>
          </Group>
          <Group key="comments">
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-xs">120 comments</span>
              <CommentButton />
            </div>
          </Group>
          <Group key="saved">
            <div className="flex flex-col items-center gap-y-2">
              <span className="text-xs">80 saves</span>
              <SaveButton />
            </div>
          </Group>
        </div>
      </Group>
    </div>
  )
}
