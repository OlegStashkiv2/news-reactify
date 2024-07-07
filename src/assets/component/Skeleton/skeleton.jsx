import React from 'react'


export const Skeleton = ({count=1,type='banner'}) => {
  return (
   <>
   {count > 1 ? (
    <ul className=' flex flex-col gap-[12px]' >
      {[...Array(count)].map((_, index)=>(

        <li  key={index} className={type === 'banner' ?' bg-[length:400%_400%] w-full h-[300px] relative  animate-pulse  bg-gradient-to-r bg-slate-200 bg-gray-200'  
         : ' animate-pulse w-full h-[60px] bg-slate-200 bg-gray-200 bg-[length:400%_400%]' }>

        </li>

      ))}
    </ul>

   ): 
        <li  className={type === 'banner' ?  ' bg-[length:400%_400%] w-full  h-[300px]  relative  animate-pulse  bg-gradient-to-r bg-slate-200 bg-gray-200'  
         : ' animate-pulse w-full h-[60px]  bg-slate-200 bg-gray-200 bg-[length:400%_400%]' }>

        </li>}
   </>
  )
}
 