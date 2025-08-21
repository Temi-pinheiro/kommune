import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/shop/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="page">
      <div className="w-full h-full text-center flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-[#121212]">In Progress</span>
        <span className="text-xl text-[#6C726F]">
          This page is being built please stand by
        </span>
      </div>
    </div>
  )
}
