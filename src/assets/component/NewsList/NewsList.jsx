import React from 'react'
import { NewsBaner } from '../NewsItem/NewsItem'


export const NewsList = ({ news }) => {
  return (
    <ul

     className=' flex flex-col w-full gap-6
     '>


{ news.map(item => {
  return <NewsBaner   key={item.id} item={item} />
})}
    </ul>
  )
}
