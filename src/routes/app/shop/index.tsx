/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'
import { shopItems } from '../-data/Shop'
import type { MotionValue } from 'motion/react'

import { Group, Panes, SearchBar, ShopCard, TextPanes } from '@/components'

export type ItemType = 'free' | 'borrow' | 'sale' | 'request'
export type ItemCategory = 'food' | 'clothing' | 'electronics'

type ShopSearch = {
  type: ItemType
  category?: ItemCategory
  search?: string
}

export const Route = createFileRoute('/app/shop/')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): ShopSearch => {
    // validate and parse the search params into a typed state
    return {
      type: (search.type as ItemType) || 'free',
      category: search.category as ItemCategory,
      search: undefined,
    }
  },
})

function RouteComponent() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ container: ref })
  const maskImage = useScrollOverflowMask(scrollYProgress)
  const navigate = useNavigate({ from: Route.fullPath })
  const { type, q, category } = Route.useSearch()
  const [search, setSearch] = useState(() => q || '')

  const categoryPanes = [
    {
      id: 'food',
      label: 'Food',
      show: true,
    },
    {
      id: 'clothing',
      label: 'Clothing & Accessories',
      show: true,
    },
    {
      id: 'electronics',
      label: 'Phones & Electronics',
      show: true,
    },
  ]

  const panes = [
    {
      id: 'free',
      label: 'Free',
      show: true,
    },
    {
      id: 'borrow',
      label: 'Borrow',
      show: true,
    },
    {
      id: 'sale',
      label: 'Sale',
      show: true,
    },
    {
      id: 'request',
      label: 'Requests',
      show: true,
    },
  ]

  const handleSwitch = (newActive: ItemType) => {
    navigate({
      search: (prev) => ({ ...prev, type: newActive }),
    })
  }
  const handleTextSwitch = (newActive: ItemCategory) => {
    navigate({
      search: (prev) => ({ ...prev, category: newActive }),
    })
  }

  return (
    <div className="bg-white rounded-2xl min-lg:min-w-[500px] min-lg:max-w-[46%] w-full h-full overflow-y-clip gap-y-6 flex flex-col text-black flex-1">
      <div className="px-6">
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <Group key="body">
        <div className="flex flex-col w-full h-full">
          <Panes active={type} handleChange={handleSwitch} panes={panes} />

          <div className="w-full p-6 min-lg:p-10 h-full bg-[#12121200]">
            <TextPanes
              panes={categoryPanes}
              active={category}
              handleChange={handleTextSwitch}
            />
            <motion.div
              ref={ref}
              style={{ maskImage }}
              className="flex flex-col lg:grid-cols-2 lg:grid gap-y-[30px] mt-4 h-full w-full overflow-y-scroll content-between pt-6 gap-x-6 pb-[200px] relative"
            >
              {shopItems.map((item) => (
                <ShopCard data={item} key={item.id} />
              ))}
            </motion.div>
          </div>
        </div>
      </Group>
    </div>
  )
}

const top = `0%`
const bottom = `100%`
const topInset = `15%`
const bottomInset = `85%`
const transparent = `#0000`
const opaque = `#111`

function useScrollOverflowMask(scrollYProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(180deg, ${opaque}, ${opaque} ${top}, ${opaque} ${bottomInset}, ${transparent})`,
  )

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(180deg, ${opaque}, ${opaque} ${top}, ${opaque} ${bottomInset}, ${transparent})`,
      )
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(180deg, ${transparent}, ${opaque} ${topInset}, ${opaque} ${bottom}, ${opaque})`,
      )
    } else if (
      scrollYProgress.getPrevious() === 0 ||
      scrollYProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(180deg, ${transparent}, ${opaque} ${topInset}, ${opaque} ${bottomInset}, ${transparent})`,
      )
    }
  })

  return maskImage
}
