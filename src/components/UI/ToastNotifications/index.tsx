/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import toast, { useToaster } from 'react-hot-toast'
import { AnimatePresence, motion } from 'framer-motion'

export const ToastNotifications = () => {
  const { toasts, handlers } = useToaster()
  const { startPause, endPause, calculateOffset, updateHeight } = handlers
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 200,
        bottom: 70,
        right: 0,
        left: 0,
      }}
      className="flex w-full justify-center"
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      <AnimatePresence>
        {toasts.map((t: any) => {
          const offset = calculateOffset(t, {
            gutter: 8,
          })
          const ref = (el: HTMLDivElement) => {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (el && typeof t.height !== 'number') {
              const height = el.getBoundingClientRect().height
              updateHeight(t.id, height)
            }
          }
          return (
            <motion.div
              key={t.id}
              ref={ref}
              style={{
                position: 'absolute',
                transformOrigin: 'center',
                background:
                  t.type == 'error'
                    ? '#DF1C41'
                    : t.type == 'success' && '#38C793',
              }}
              initial={{
                opacity: 0,
                y: 100 + offset,
              }}
              animate={{
                opacity: t.visible ? 1 : 0,
                y: 10 - offset,
                transition: {
                  y: {
                    type: 'tween',
                    ease: [0.4, 0.0, 0.2, 1],
                    duration: 0.3,
                  },
                  opacity: { delay: 0.2, duration: 0.2 },
                },
              }}
              exit={{ opacity: 0, y: '100%' }}
              className="bg-black py-2 px-[10px] rounded-xl gap-x-2 text-sm flex items-center w-auto max-w-[488px] break-words"
              {...t.ariaProps}
            >
              {t.type == 'success' ? (
                <SuccessIcon />
              ) : (
                t.type == 'error' && <ErrorIcon />
              )}
              <div className="flex flex-col gap-y-1">
                <span className="w-full text-sm text-white block">
                  {t.message}
                </span>
              </div>
              <button className="ml-auto" onClick={() => toast.dismiss(t.id)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99999 8.93955L13.7125 5.22705L14.773 6.28755L11.0605 10.0001L14.773 13.7126L13.7125 14.7731L9.99999 11.0606L6.28749 14.7731L5.22699 13.7126L8.93949 10.0001L5.22699 6.28755L6.28749 5.22705L9.99999 8.93955Z"
                    fill="white"
                  />
                </svg>
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

const SuccessIcon = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 17.5C6.35775 17.5 3 14.1423 3 10C3 5.85775 6.35775 2.5 10.5 2.5C14.6423 2.5 18 5.85775 18 10C18 14.1423 14.6423 17.5 10.5 17.5ZM9.75225 13L15.0548 7.69675L13.9943 6.63625L9.75225 10.879L7.6305 8.75725L6.57 9.81775L9.75225 13Z"
      fill="white"
    />
  </svg>
)

const ErrorIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 14C4.6862 14 2 11.3138 2 8C2 4.6862 4.6862 2 8 2C11.3138 2 14 4.6862 14 8C14 11.3138 11.3138 14 8 14ZM7.4 9.8V11H8.6V9.8H7.4ZM7.4 5V8.6H8.6V5H7.4Z"
      fill="white"
    />
  </svg>
)
