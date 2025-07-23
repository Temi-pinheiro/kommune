import { Link } from '@tanstack/react-router'
import {
  CommunityNavIcon,
  HomeNavIcon,
  JobNavsIcon,
  ShopNavIcon,
} from '../icons'
import { Button } from '@/components/Form'

const linkClass =
  'flex items-center gap-x-3 [&.active]:text-[#121212] text-[#6C726F] font-semibold transition duration-500 ease-in-out hover:text-[#121212] fill-[#A5A5A5] hover:fill-[#121212] [&.active]:fill-[#121212] stroke-[#A5A5A5] hover:stroke-[#121212] [&.active]:stroke-[#121212]'

export const SideNav = () => {
  return (
    <div className="w-[266px] p-6 bg-white rounded-2xl h-full max-h-[90%] flex flex-col items-start gap-y-12">
      <nav className="flex flex-col gap-y-8">
        <Link className={`${linkClass}`} to="/app/home">
          <HomeNavIcon />
          Home
        </Link>
        <Link className={`${linkClass}`} to="/app/community">
          <CommunityNavIcon />
          Community
        </Link>
        <Link className={`${linkClass}`} to="/app/jobs">
          <JobNavsIcon />
          Jobs
        </Link>
        <Link className={`${linkClass}`} to="/app/shop">
          <ShopNavIcon />
          Shop
        </Link>
      </nav>
      <Button
        label="Create a Post"
        size="large"
        primary
        {...{ style: { width: '100%' } }}
      />
    </div>
  )
}
