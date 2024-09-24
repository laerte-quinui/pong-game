import { useEffect } from 'react'
import { UpdatePaddlePositionProps } from './types'

const useUpdatePaddlePosition = ({
  setLeftPosition,
  setRightPosition,
}: UpdatePaddlePositionProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const speed: number = 10
      switch (e.key) {
        case 'w':
          // Go up
          setLeftPosition((position) => position - speed)
          break
        case 's':
          // Go down
          setLeftPosition((position) => position + speed)
          break
        case 'ArrowUp':
          // Go up
          setRightPosition((position) => position - speed)
          break
        case 'ArrowDown':
          // Go down
          setRightPosition((position) => position + speed)
          break
      }

      setLeftPosition((position) => {
        if (position < 0) return 0
        if (position > 450) return 450
        return position
      })
      setRightPosition((position) => {
        if (position < 0) return 0
        if (position > 450) return 450
        return position
      })
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setLeftPosition, setRightPosition])
}

export default useUpdatePaddlePosition
