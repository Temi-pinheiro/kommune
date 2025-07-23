import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/jobs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/jobs/"!</div>
}
