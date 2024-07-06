import React from 'react'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import { Image } from '../Imag/image'


export const NewsBaner = ({item}) => {
  return (
    <div className='  flex w-full  flex-col gap-3'>
      <Image image={item ?.image} />
        <h3 className='font-bold text-[16px]'>{item.title}</h3>
        <p className='font-semibold text-[12px] 
        text-slate-700'>{formatTimeAgo(item.published)} by {item.author}</p>
    </div>
  )
}
