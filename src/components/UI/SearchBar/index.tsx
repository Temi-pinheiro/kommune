import { useNavigate } from '@tanstack/react-router'
import type { FormEvent } from 'react'
import { Route } from '@/routes/__root'

export const SearchBar = ({
  search,
  setSearch,
}: {
  search: string
  setSearch: (v: any) => void
}) => {
  const navigate = useNavigate({ from: Route.fullPath })

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    navigate({
      search: (prev) => ({
        ...prev,
        q: search,
      }),
    })
  }
  return (
    <form
      onSubmit={handleSearch}
      className="mt-6 bg-[#F7F7F7] py-3 rounded-full flex items-center justify-center w-full"
    >
      <label id="form label" htmlFor="search">
        <span className="hidden">Search</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.95917 0.666504C9.14138 0.666504 11.7211 3.2462 11.7211 6.42841C11.7211 7.83095 11.22 9.11645 10.387 10.1156L14.7105 14.439C14.9151 14.6435 14.9151 14.9752 14.7105 15.1797C14.5287 15.3616 14.2464 15.3818 14.0423 15.2404L13.9697 15.1797L9.64639 10.8562C8.64721 11.6892 7.36171 12.1903 5.95917 12.1903C2.77696 12.1903 0.197266 9.61062 0.197266 6.42841C0.197266 3.2462 2.77696 0.666504 5.95917 0.666504ZM5.95917 1.71412C3.35554 1.71412 1.24488 3.82478 1.24488 6.42841C1.24488 9.03204 3.35554 11.1427 5.95917 11.1427C8.5628 11.1427 10.6735 9.03204 10.6735 6.42841C10.6735 3.82478 8.5628 1.71412 5.95917 1.71412Z"
            fill="#121212"
          />
        </svg>
      </label>
      <input
        id="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent outline-none text-sm text-center"
        style={{
          width: `${search && search.length > 0 ? search.length : 6}ch`,
        }}
        placeholder="Search"
      />
    </form>
  )
}
