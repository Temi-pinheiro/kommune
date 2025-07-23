import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/community/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/community/"!</div>
}
