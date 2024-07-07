import React, { useEffect, useState } from 'react'
import { NewsBaner } from '../../assets/component/NewBaner/NewBaner'
import { getNews } from '../../assets/api/apinews'
import { NewsList } from '../../assets/component/NewsList/NewsList'
import { Skeleton } from '../../assets/component/Skeleton/skeleton'



export const Mein = () => {

   const [isLoading,setIsLoading] = useState(true)

      const[news ,setNews] = useState  ([]) 
    useEffect(() => {
        const fetchNews = async () => {
          try {
            setIsLoading (true)
             const response= await getNews()
            setNews(response.news)
            setIsLoading(false)
          } catch (error) {
              console.log(error)
          }

        }
       fetchNews()
    },[])
  return (
    <main className='flex w-full flex-col gap-8'>
    { news.length > 0 && !isLoading ? <NewsBaner item={news[0]}/> : <Skeleton type={'banner'} count={1}/>}


   {!isLoading ? < NewsList news={news}/> : <Skeleton type={'item'} count={10}/>}
    </main>

  )
}
