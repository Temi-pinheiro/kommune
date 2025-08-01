import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Header, Messages, SideNav } from '@/components'

export const Route = createFileRoute('/app')({
  component: AppLayoutComponent,
})

function AppLayoutComponent() {
  return (
    <div className="w-full h-full max-h-svh flex flex-col font-display relative">
      <Header />
      <div
        // style={{ maxHeight: 'calc(100vh - 90px)' }}
        className="bg-[#F9F9F9] w-full h-full  px-16 pt-6"
      >
        <div
          style={{ maxHeight: 'calc(100vh - 90px)' }}
          className="flex items-start gap-x-6 w-full h-full  overflow-clip max-w-[1440px] mx-auto"
        >
          <SideNav />
          <Outlet />
          <Messages />
        </div>
      </div>
    </div>
  )
}
