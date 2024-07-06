import React from 'react'
import { formatDate } from '../../helpers/formatDate'

export const Header = () => {
  return (
    <header className='  flex w-full px-3 py-6 bg-white border-b border-slate-20 flex-col  gap-3'>
        <h1 className='font-bold text-xl'>NEWS REACTIFY</h1>
        <p className='font-semibold text-xs'>{formatDate(new Date())}</p>
    </header>
  )
}
