/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { dropdown } from '../../../constants/animations'
import { useOutsideClick } from '../../../hooks'

export const Kebab = ({
  children,
}: {
  children: React.ReactNode
  rightAlign?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const containerRef = useOutsideClick<HTMLDivElement>(handleClickOutside)

  function handleClickOutside(e: any) {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }
  return (
    <div
      className="relative "
      role="presentation"
      tabIndex={0}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.stopPropagation()
        }
      }}
    >
      <button
        className="peer shrink-0 grid place-items-center w-full"
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(true)
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99984 8.66671C8.36803 8.66671 8.6665 8.36823 8.6665 8.00004C8.6665 7.63185 8.36803 7.33337 7.99984 7.33337C7.63165 7.33337 7.33317 7.63185 7.33317 8.00004C7.33317 8.36823 7.63165 8.66671 7.99984 8.66671Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6665 8.66671C13.0347 8.66671 13.3332 8.36823 13.3332 8.00004C13.3332 7.63185 13.0347 7.33337 12.6665 7.33337C12.2983 7.33337 11.9998 7.63185 11.9998 8.00004C11.9998 8.36823 12.2983 8.66671 12.6665 8.66671Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.33317 8.66671C3.70136 8.66671 3.99984 8.36823 3.99984 8.00004C3.99984 7.63185 3.70136 7.33337 3.33317 7.33337C2.96498 7.33337 2.6665 7.63185 2.6665 8.00004C2.6665 8.36823 2.96498 8.66671 3.33317 8.66671Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={dropdown}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute bg-white shadow-md w-fit rounded right-5 z-10 border border-[#E2E4E9]"
            ref={containerRef}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
