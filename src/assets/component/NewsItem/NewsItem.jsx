import React from 'react'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'



export const NewsBaner = ({item}) => {
  return (
    <li className='  flex w-full w-full  gap-3'>

        
        <div  className='w-[64px] h-[64px] bg-[#f2f4f5] bg-center bg-cover  shrink-0 ' style={{backgroundImage:`url(${item.image})`}}>

        </div>
       <div  className='flex flex-col gap-2'>

        <h3 className='font-bold text-[14px]'>{item.title}</h3>
        <p className='font-semibold text-[12px] 
        text-slate-700'>{formatTimeAgo(item.published)} by {item.author}</p>
       </div>
        
    </li>
  )
}
