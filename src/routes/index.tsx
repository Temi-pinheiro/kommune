import { createFileRoute, Navigate } from '@tanstack/react-router'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return <Navigate to="/app/home" />
}
