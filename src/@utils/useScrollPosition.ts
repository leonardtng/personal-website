import { useState, useRef, useLayoutEffect } from 'react';

const isBrowser = typeof window !== `undefined`;

export const vh = document.documentElement.clientHeight;
export const vw = document.documentElement.clientWidth;

interface ScrollPosition {
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

export function useScrollPosition(effect: any, element?: React.RefObject<HTMLElement>, useWindow: boolean = true, wait: number = 0, deps: any = null) {
  const position = useRef(getScrollPosition({ useWindow }))

  const [throttleTimeout, setThrottleTimeout] = useState<any>(null)

  useLayoutEffect(() => {
    const callBack = () => {
      const currPos = getScrollPosition({ element, useWindow })
      effect({ prevPos: position.current, currPos })
      position.current = currPos
      setThrottleTimeout(null)
    }

    const handleScroll = () => {
      if (wait && throttleTimeout === null) {
        setThrottleTimeout(setTimeout(callBack, wait));
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [throttleTimeout, wait, effect, element, useWindow, deps])
}