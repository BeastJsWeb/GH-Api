import React, {FC} from 'react'

export enum ButtonVariant {
  add = 'hover:bg-yellow-300',
  remove = 'hover:bg-red-500'
}

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  variant?: ButtonVariant,
  children?: JSX.Element | string
}

export const Button: FC<ButtonProps> = 
  ({
    onClick, 
    variant, 
    children
  }) => {
  return (
    <button 
      onClick={onClick}
      className={`${variant} shadow-md p-2 bg-slate-300 text-white hover:text-black`} 
    >{children}</button>
  )
}
