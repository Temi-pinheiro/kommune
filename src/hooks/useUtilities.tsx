/* eslint-disable @typescript-eslint/no-explicit-any */

import { useLayoutEffect, useRef } from 'react'

// TODO FIX THIS

export const useOutsideClick = <T extends HTMLElement>(
  handler: (event: any) => void,
) => {
  const ref = useRef<T>(null)
  useLayoutEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
  return ref
}

// TODO FIX THIS
// export const usePagination = () => {
//   const [searchParams, setSearchParams] = useSearchParams()
//   const limit: any = searchParams.get('limit') || 10
//   const page: any = searchParams.get('page') || 1

//   const handlePageChange = (e: { selected: number }) => {
//     setSearchParams(() => {
//       searchParams.set('page', (e.selected + 1).toString())
//       return searchParams
//     })
//   }
//   const handleLimitChange = (limit: any) => {
//     setSearchParams({ limit: limit })
//   }

//   return {
//     handlePageChange,
//     handleLimitChange,
//     limit,
//     page,
//   }
// }
