import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import styles from './styles.module.css'
import type { ReactNode, UIEvent } from 'react'

const bgVariant = {
  enter: {
    opacity: 0,
  },
  animate: { opacity: 1 },
  exit: {
    opacity: 0,
  },
}

export const Modal = ({
  component,
  close,
  id,
}: {
  component?: ReactNode
  close: () => void
  id?: string
}) => {
  const [isOpen, setIsOpen] = useState(true)
  const [bgOpen, setBgOpen] = useState(true)
  // const handleClose = (...args: Array<unknown>) => {
  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => setBgOpen(false), 120)

    id && setTimeout(() => close(), 200)
    // if (React.isValidElement(component) && component.props.close) {
    //   component.props.close(...args)
    // }
  }
  const additionalProps = {
    close: handleClose,
  }
  return (
    <AnimatePresence key="modal background">
      {bgOpen && (
        <motion.div
          initial="enter"
          animate="animate"
          exit="exit"
          variants={bgVariant}
          className={styles.background}
        >
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                onClick={(e: UIEvent) => e.stopPropagation}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                // className='max-w-[1440px] w-auto'
                layout
              >
                <div
                  className={styles.container}
                  // ref={containerRef}
                  onClick={(e: UIEvent) => e.stopPropagation}
                >
                  {React.isValidElement(component)
                    ? React.cloneElement(component, additionalProps)
                    : component}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
