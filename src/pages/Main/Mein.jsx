import React, { useEffect, useState } from 'react'
import { NewsBaner } from '../../assets/component/NewBaner/NewBaner'
import { getNews } from '../../assets/api/apinews'
import { NewsList } from '../../assets/component/NewsList/NewsList'



export const Mein = () => {
      const[news ,setNews] = useState  ([]) 
    useEffect(() => {
        const fetchNews = async () => {
          try {
             const response= await getNews()
            setNews(response.news)
          } catch (error) {
              console.log(error)
          }

        }
       fetchNews()
    },[])
  return (
    <main className='flex w-full flex-col gap-8'>
    { news.length > 0 ? <NewsBaner item={news[0]}/> :null}


    < NewsList news={news}/>
    </main>

  )
}
