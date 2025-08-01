'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Group } from '..'

import { Button } from '@/components/Form'

export const Messages = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div
      animate={{
        height: !isOpen ? 'auto' : '96%',
        borderRadius: !isOpen ? '64px' : '24px',
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className=" bg-white text-[#1D1D1D] w-full max-w-[30%] rounded-full self-end mb-6 flex flex-col relative"
    >
      <Group key="title">
        <div
          className="hover:cursor-pointer flex gap-x-3 justify-between items-center p-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className="font-bold text-xl">Messages</h1>
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: isOpen ? 0 : 180 }}
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      </Group>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, display: 'absolute' }}
          animate={{ opacity: 1, display: 'relative' }}
          exit={{ opacity: 0 }}
          // transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex flex-col h-full p-6"
        >
          <Button primary label="New Message" />
        </motion.div>
      )}
    </motion.div>
  )
}
