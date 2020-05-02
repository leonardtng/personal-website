import { useState, useRef, useLayoutEffect } from 'react';

const isBrowser = typeof window !== `undefined`;

export interface ScrollPosition {
  element?: any;
  useWindow: boolean;
}

function getScrollPosition({ element, useWindow }: ScrollPosition) {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export function useScrollPosition(effect: any, element?: React.RefObject<HTMLDivElement>, useWindow: boolean = true, wait: number = 0) {
  const position = useRef(getScrollPosition({ useWindow }))

  const [throttleTimeout, setThrottleTimeout] = useState<any>(null)

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    setThrottleTimeout(null)
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait && throttleTimeout === null) {
        setThrottleTimeout(setTimeout(callBack, wait));
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })
}