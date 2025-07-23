import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Header, SideNav } from '@/components'

export const Route = createFileRoute('/app')({
  component: AppLayoutComponent,
})

function AppLayoutComponent() {
  return (
    <div className="w-full h-full max-h-svh flex flex-col font-display">
      <Header />
      <div className="bg-[#F9F9F9] w-full h-full max-h-svh px-16 pt-6">
        <div className="flex items-start gap-x-6 w-full h-full max-w-[1440px] mx-auto">
          <SideNav />
          <Outlet />
        </div>
      </div>
    </div>
  )
}
