import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx'

import type { QueryClient } from '@tanstack/react-query'
import { ModalProvider } from '@/providers/index.ts'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <ModalProvider>
        <Outlet />
      </ModalProvider>
      {/* <TanStackRouterDevtools />

      <TanStackQueryLayout /> */}
    </>
  ),
  validateSearch: (search: Record<string, unknown>): { q?: string } => {
    // validate and parse the search params into a typed state
    return {
      q: search.q as string,
    }
  },
})
