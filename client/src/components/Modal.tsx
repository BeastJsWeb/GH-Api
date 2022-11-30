import {FC} from 'react'

interface props {
  isActive: boolean,
  handleIsActive: () => void,
  children: JSX.Element | JSX.Element[] | string
}

export const Modal: FC<props> = 
({
  isActive, 
  children, 
  handleIsActive
}) => {
  if (!isActive) return null
  
  return (
    <div 
      className='fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 backdrop-blur-sm' 
      onClick={handleIsActive}
    >
      <div className='flex flex-col justify-center gap-4 items-center bg-slate-500 w-full h-full 
        max-w-lg max-h-96 shadow-lg text-center' 
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
