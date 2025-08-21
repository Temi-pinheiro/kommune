import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Posts } from './-panes/Posts'
import { Jobs } from './-panes/Jobs'
import { returnCompactNumber } from '@/utils/numberFormatter'
import { Button, Group, Panes } from '@/components'

type CommunityPageOptions = 'posts' | 'jobs'

type CommunitySearch = {
  active: CommunityPageOptions
}

export const Route = createFileRoute('/app/community/$id')({
  component: CommunityPage,
  validateSearch: (search: Record<string, unknown>): CommunitySearch => {
    // validate and parse the search params into a typed state
    return {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      active: (search.active as CommunityPageOptions) || 'posts',
    }
  },
})

const kommunne: Community = {
  id: 'kjakjk',
  name: 'Japanese Woodwork',
  dateCreated: '2025/07/13',
  joined: true,
  members: 1234,
  description:
    'A community for people who love Japanese woodwork and want to learn more about it',
  coverImage:
    'https://images.unsplash.com/photo-1752937878411-84d3c68ccb76?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

function CommunityPage() {
  const navigate = useNavigate({ from: Route.fullPath })
  const { active } = Route.useSearch()

  const panes = [
    {
      id: 'posts',
      label: 'Posts',
      show: true,
    },
    {
      id: 'jobs',
      label: 'Job Requests',
      show: true,
    },
  ]

  const handleSwitch = (newActive: CommunityPageOptions) => {
    console.log(newActive)
    navigate({
      search: (prev) => ({ ...prev, active: newActive }),
    })
  }
  return (
    <div className="bg-white min-lg:rounded-2xl min-lg:min-w-[500px] min-lg:max-w-[46%] w-full h-full overflow-y-scroll gap-y-6 flex flex-col text-black">
      <Group key="header">
        <motion.div className="min-lg:rounded-t-2xl h-[200px] min-lg:max-h-[286px] w-full min-lg:h-full overflow-clip shrink-0">
          <img
            alt="cover-image"
            src={kommunne.coverImage}
            className="w-full h-full object-cover outline-0"
          />
        </motion.div>
      </Group>
      <Group key="community info">
        <div className="flex p-6 flex-col gap-y-5">
          <h1 className="font-bold text-2xl min-xl:text-4xl leading-[120%]">
            {kommunne.name}
          </h1>
          <Group key="tid bits">
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center gap-x-3">
                <div className="flex items-center">
                  {/* four photos avatar style with negative margins into each other */}
                  <img
                    src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBmYWNlc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="avatar"
                    className="w-6 h-6 min-xl:w-9 min-xl:h-9 rounded-lg min-xl:rounded-xl object-cover "
                  />
                  <img
                    src="https://images.unsplash.com/photo-1560856218-0da41ac7c66a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBmYWNlc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="avatar"
                    className="w-6 h-6 min-xl:w-9 min-xl:h-9 rounded-lg min-xl:rounded-xl object-cover -ml-2"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1643570920472-9801b0764852?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D"
                    alt="avatar"
                    className="w-6 h-6 min-xl:w-9 min-xl:h-9 rounded-lg min-xl:rounded-xl object-cover -ml-2"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1612861635753-2170a0a4c218?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D"
                    alt="avatar"
                    className="w-6 h-6 min-xl:w-9 min-xl:h-9 rounded-lg min-xl:rounded-xl object-cover -ml-2"
                  />
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.65625 4.0477C3.65625 2.73274 4.72224 1.66675 6.0372 1.66675C7.35217 1.66675 8.41815 2.73274 8.41815 4.0477C8.41815 4.81527 8.05494 5.49801 7.49101 5.93341C7.47405 5.94593 7.45719 5.95859 7.44045 5.97139C7.04695 6.25893 6.56189 6.42865 6.0372 6.42865C4.72224 6.42865 3.65625 5.36266 3.65625 4.0477Z"
                    fill="#121212"
                  />
                  <path
                    d="M11.726 5.93341C11.7429 5.94593 11.7598 5.95859 11.7765 5.9714C12.17 6.25894 12.6551 6.42865 13.1798 6.42865C14.4948 6.42865 15.5607 5.36266 15.5607 4.0477C15.5607 2.73274 14.4948 1.66675 13.1798 1.66675C11.8648 1.66675 10.7988 2.73274 10.7988 4.0477C10.7988 4.81527 11.162 5.49801 11.726 5.93341Z"
                    fill="#121212"
                  />
                  <path
                    d="M7.54606 7.61919C7.95774 6.90752 8.72721 6.42871 9.60849 6.42871C10.4898 6.42871 11.2592 6.90752 11.6709 7.61919C11.8735 7.96939 11.9894 8.37598 11.9894 8.80966C11.9894 10.1246 10.9235 11.1906 9.60849 11.1906C8.29353 11.1906 7.22754 10.1246 7.22754 8.80966C7.22754 8.37598 7.34348 7.96939 7.54606 7.61919Z"
                    fill="#121212"
                  />
                  <path
                    d="M3.06108 7.61914H6.24052C6.1089 7.9915 6.0373 8.39219 6.0373 8.80962C6.0373 9.72432 6.38116 10.5587 6.94669 11.1906H6.63251C5.34068 11.1906 4.2411 12.0137 3.82952 13.1639C3.42481 12.9993 3.05037 12.7841 2.71843 12.5177C1.82178 11.798 1.27539 10.7335 1.27539 9.40485C1.27539 8.41868 2.07487 7.61914 3.06108 7.61914Z"
                    fill="#121212"
                  />
                  <path
                    d="M12.5847 11.1906C13.8765 11.1906 14.9761 12.0136 15.3876 13.1639C15.7924 12.9993 16.1668 12.7841 16.4988 12.5177C17.3954 11.798 17.9418 10.7335 17.9418 9.40485C17.9418 8.41863 17.1423 7.61914 16.1561 7.61914H12.9767C13.1082 7.9915 13.1799 8.39219 13.1799 8.80962C13.1799 9.72432 12.836 10.5587 12.2705 11.1906H12.5847Z"
                    fill="#121212"
                  />
                  <path
                    d="M14.2361 13.4856C14.3226 13.6955 14.3705 13.9255 14.3705 14.1666C14.3705 15.4953 13.8241 16.5598 12.9275 17.2794C12.045 17.9878 10.8623 18.3332 9.60858 18.3332C8.35492 18.3332 7.17218 17.9878 6.28972 17.2794C5.39307 16.5598 4.84668 15.4953 4.84668 14.1666C4.84668 13.9255 4.89448 13.6955 4.98111 13.4856C5.2488 12.8372 5.88729 12.3809 6.63237 12.3809H12.5848C13.3299 12.3809 13.9683 12.8372 14.2361 13.4856Z"
                    fill="#121212"
                  />
                </svg>
                <span className="text-sm">
                  {returnCompactNumber(kommunne.members!)} members
                </span>
              </div>
              <Button
                mono
                label={kommunne.joined ? 'Joined' : 'Join'}
                disabled={kommunne.joined}
              />
            </div>
          </Group>
          <p className="font-medium text-sm leading-[150%] min-xl:text-base text-[#6C726F]">
            {kommunne.description}
          </p>
        </div>
      </Group>
      <Group key="body">
        <div className=" flex flex-col w-full">
          <Panes active={active} handleChange={handleSwitch} panes={panes} />

          {active == 'jobs' && <Jobs />}
          {active == 'posts' && <Posts />}
        </div>
      </Group>
    </div>
  )
}
