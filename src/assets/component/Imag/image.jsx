import React from 'react'



export const Image = ({image}) => {
  return (
    <div 
    className='  w-full h-auto relative pt-[80%] bg-slate-200'>

        {image ? <img src={image} alt='news' 
        className='absolute left-0 top-0 w-full h-full object-cover ' 
         /> : null}
    </div>
  )
}
