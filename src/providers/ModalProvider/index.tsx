import { AnimatePresence } from 'framer-motion'
import React, { createContext, useCallback, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Modal } from '../../components'
import type { ReactNode } from 'react'

type ModalConfig = {
  id: string
  component: ReactNode
}

type ModalContextType = {
  open: (component: ReactNode) => string
  close: (id: string) => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modals, setModals] = useState<Array<ModalConfig>>([])

  const open = useCallback((component: ReactNode) => {
    const id = uuidv4()
    setModals((prev) => [...prev, { id, component }])
    return id
  }, [])

  const close = useCallback((id: string) => {
    setModals((prev) => prev.filter((m) => m.id !== id))
  }, [])

  return (
    <ModalContext.Provider value={{ open, close }}>
      {/** Render active modals */}
      <AnimatePresence>
        {modals.map(({ id, component }) => (
          <Modal
            component={component}
            key={id}
            id={id}
            close={() => close(id)}
          />
        ))}
      </AnimatePresence>
      {children}
    </ModalContext.Provider>
  )
}

/** Custom hook for consumers */
export const useModal = (): ModalContextType => {
  const ctx = useContext(ModalContext)
  if (!ctx) {
    throw new Error('useModal must be inside a ModalProvider')
  }
  return ctx
}
