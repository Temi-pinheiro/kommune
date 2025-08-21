/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import { Link } from '@tanstack/react-router'
import { Group } from '../Group'

import Loader from '../Loader'

import { getFullMoney } from '@/utils/numberFormatter'

export const ShopCard = ({ data }: { data: ShopItem }) => {
  const isPending = false
  return (
    <div className="flex flex-col w-full pb-2 rounded-lg min-lg:max-w-[250px] min-lg:nth-of-type-[2n+2]:place-self-end">
      <Group key="image">
        <div className="relative rounded-lg h-[250px] min-lg:h-[190px] overflow-clip shrink-0">
          <Group key="background">
            <img
              src={data.image}
              className="object-cover w-full h-full"
              alt={data.name}
            />
            <button
              onClick={() => null}
              // disabled={isPending}
              className="absolute w-[30px] z-[20] h-[30px] rounded-full hover:fill-[#F47175] flex items-center justify-center top-3 right-3 cursor-pointer"
            >
              {isPending ? (
                <Loader bgColor="#F47175" />
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="inherit"
                  className="transition-colors duration-200 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00001 14.4331C7.79334 14.4331 7.59334 14.4064 7.42668 14.3464C4.88001 13.4731 0.833344 10.3731 0.833344 5.79307C0.833344 3.45974 2.72001 1.56641 5.04001 1.56641C6.16668 1.56641 7.22001 2.00641 8.00001 2.79307C8.78001 2.00641 9.83334 1.56641 10.96 1.56641C13.28 1.56641 15.1667 3.46641 15.1667 5.79307C15.1667 10.3797 11.12 13.4731 8.57334 14.3464C8.40668 14.4064 8.20668 14.4331 8.00001 14.4331ZM5.04001 2.56641C3.27334 2.56641 1.83334 4.01307 1.83334 5.79307C1.83334 10.3464 6.21334 12.8797 7.75334 13.4064C7.87334 13.4464 8.13334 13.4464 8.25334 13.4064C9.78668 12.8797 14.1733 10.3531 14.1733 5.79307C14.1733 4.01307 12.7333 2.56641 10.9667 2.56641C9.95334 2.56641 9.01334 3.03974 8.40668 3.85974C8.22001 4.11307 7.79334 4.11307 7.60668 3.85974C6.98668 3.03307 6.05334 2.56641 5.04001 2.56641Z"
                    fill="#1D1D1D"
                    stroke="#263238"
                    strokeWidth="0.3"
                  />
                </svg>
              )}
            </button>
          </Group>
        </div>
      </Group>
      <div className="flex flex-col gap-y-1 mt-3 leading-[120%]">
        <Link
          className="hover:underline text-sm text-[#121212]"
          params={{ id: data.id.toString() }}
          to="/app/shop/$id"
        >
          {data.name}
        </Link>
        <p
          title={data.description}
          className="text-sm text-[#939393] leading-[120%] line-clamp-2"
        >
          {data.description}
        </p>
        <h2 className="text-sm text-[#121212] font-bold">
          {getFullMoney(data.price)}
        </h2>
      </div>

      {/* <div className="flex flex-col justify-between w-full mt-5">
        <span className="flex items-center w-full justify-between">
          <Link
            className="hover:underline text-lg md:text-xl"
            params={{ id: '87090' }}
            to="/app/shop/$id"
          >
            {data.name}
          </Link>
          <span className="text-black/50 text-sm md:text-lg">0 reviews</span>
        </span>
        <span className="text-black/70 md:text-lg">
          {getFullMoney(data.price)}
        </span>
      </div> */}
    </div>
  )
}
