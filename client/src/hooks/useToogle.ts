import {useState} from 'react'

export const useToogle = () => {
  const [isActive, setIsActive] = useState(false)
  const handleIsActive = () => setIsActive(!isActive)
  return {isActive, handleIsActive}
}
