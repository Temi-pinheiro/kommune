import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Header, Messages, MobileNav, SideNav } from '@/components'

export const Route = createFileRoute('/app')({
  component: AppLayoutComponent,
})

function AppLayoutComponent() {
  return (
    <div className="w-full h-full max-h-svh flex flex-col font-display relative">
      <Header />
      <div
        // style={{ maxHeight: 'calc(100vh - 90px)' }}
        className="bg-[#F9F9F9] w-full h-full  min-lg:px-16 min-lg:pt-6"
      >
        <div
          style={{ maxHeight: 'calc(100vh - 90px)' }}
          className="min-lg:flex items-start gap-x-6 max-lg:max-h-0 w-full h-full overflow-clip min-lg:max-w-[1440px] min-lg:mx-auto max-lg:pb-[90px]"
        >
          <SideNav />
          <Outlet />
          <Messages />
          <MobileNav />
        </div>
      </div>
    </div>
  )
}
