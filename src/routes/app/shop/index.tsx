import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/shop/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/shop/"!</div>
}
