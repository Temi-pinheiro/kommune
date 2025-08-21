import { Link } from '@tanstack/react-router'
import {
  ChatIcon,
  CommunityNavIcon,
  HomeNavIcon,
  JobNavsIcon,
  ShopNavIcon,
} from '../icons'

const linkClass =
  'flex flex-col items-center [&.active]:text-[#121212] text-[#6C726F] font-semibold transition duration-500 ease-in-out hover:text-[#121212] fill-[#A5A5A5] hover:fill-[#121212] [&.active]:fill-[#121212] stroke-[#A5A5A5] hover:stroke-[#121212] [&.active]:stroke-[#121212] text-xs w-full'

export const MobileNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[90px] bg-white min-lg:hidden">
      <nav className="flex items-center justify-between pt-4">
        <Link className={`${linkClass}`} to="/app/home">
          <HomeNavIcon />
          Home
        </Link>
        <Link className={`${linkClass}`} to="/app/community">
          <CommunityNavIcon />
          Community
        </Link>
        <Link
          className={`${linkClass}`}
          to="/app/jobs"
          activeOptions={{ includeSearch: false }}
          search={{ active: 'jobs', status: 'all' }}
        >
          <JobNavsIcon />
          Jobs
        </Link>
        <Link
          className={`${linkClass}`}
          to="/app/shop"
          activeOptions={{ includeSearch: false }}
          search={{ type: 'free' }}
        >
          <ShopNavIcon />
          Shop
        </Link>
        <Link
          className={`${linkClass}`}
          to="/app/shop"
          activeOptions={{ includeSearch: false }}
          search={{ type: 'free' }}
        >
          <ChatIcon />
          Chat
        </Link>
      </nav>
    </div>
  )
}
