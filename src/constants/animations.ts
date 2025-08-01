export const slideshow = {
  enter: { opacity: 0, x: window.innerWidth },
  center: {
    opacity: 1,
    zIndex: 1,
    x: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  },
  exit: (imageWidth: number) => {
    return {
      zIndex: 0,
      x: -imageWidth,
      opacity: 0,
    }
  },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0 },
}

export const toggleHide = {
  initial: {
    display: 'none',
    opacity: 0,
  },
  exit: {
    display: 'none',
    opacity: 0,
    transition: { display: { delay: 0.2 } },
  },
  animate: (custom?: number) => ({
    display: 'block',
    opacity: 1,
    transition: { opacity: { delay: custom ? custom : 0.2 } },
  }),
}
export const dropdown = {
  initial: {
    display: 'none',
    opacity: 0,
    y: -80,
    scale: 0.6,
  },
  exit: {
    display: 'none',
    opacity: 0,
    y: -80,
    scale: 0.6,
    transition: { display: { delay: 0.1 } },
  },
  animate: (custom?: number) => ({
    display: 'block',
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      opacity: { delay: custom ? custom : 0.2 },
      y: { delay: custom ? custom : 0.2 },
      scale: { delay: custom ? custom : 0.2 },
    },
  }),
}

export const accordionVariants = {
  open: { opacity: 1, height: '100%', transition: { opacity: { delay: 0.3 } } },
  collapsed: { opacity: 0, height: 'auto' },
}
