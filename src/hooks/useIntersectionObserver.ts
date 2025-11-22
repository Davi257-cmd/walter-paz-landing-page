import React, { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
): [React.RefObject<T>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const elementRef = useRef<T>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Verificar se já está visível no carregamento inicial (sem delay)
    const checkInitialVisibility = () => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const isVisible = rect.top < viewportHeight + 100 && rect.bottom > -100
      
      if (isVisible && !hasIntersected) {
        setIsIntersecting(true)
        setHasIntersected(true)
        return true
      }
      return false
    }

    // Verificar imediatamente
    if (checkInitialVisibility()) {
      return // Se já está visível, não precisa do observer
    }

    // Criar observer apenas se não estiver visível
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsIntersecting(true)
          setHasIntersected(true)
          if (observerRef.current) {
            observerRef.current.disconnect()
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
        ...options,
      }
    )

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [elementRef, isIntersecting] as const
}

