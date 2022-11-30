import {FC} from 'react'

interface props {
  href: string, 
  src: string, 
  title: string,
  children?: JSX.Element | JSX.Element[] | string
}

export const FavouritesRepo: FC<props> = 
({
  href, 
  src, 
  title, 
  children
}) => {
  return (
    <li className="flex justify-between gap-1"> 
      <a 
        href={href} 
        target='blank' 
        className='flex h-11 gap-4 items-center bg-slate-100 hover:bg-slate-500
          hover:text-white w-full shadow-md leading-10' 
      >
        <img 
          src={src} 
          alt='' width={40} height={40} 
          className='w-auto h-full object-cover'
        />
        {title}
      </a>
      {children}
    </li>
  )
}
