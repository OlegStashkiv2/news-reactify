import React, { useEffect, useState } from 'react'
import { NewsBaner } from '../../assets/component/NewBaner/NewBaner'
import { getCategories, getNews } from '../../assets/api/apinews'
import { NewsList } from '../../assets/component/NewsList/NewsList'
import { Skeleton } from '../../assets/component/Skeleton/skeleton'
import { Pagination } from '../../assets/component/Pagination/Pagination'
import { Categories } from '../../assets/component/Header/Categories/categories'


export const Mein = () => {
   const [isLoading,setIsLoading] = useState(true)
   const [news ,setNews] = useState  ([]) 
   const [currentPage,setCurentPage] = useState(1)
   const [categories ,setCategories] = useState  ([]) 
   const [selectedCategory,setSelectedCategory] = useState('All');
   const totalPages = 10
   const pageSize = 10

           const fetchNews = async (currentPage ) => {
          try {
              setIsLoading (true)
             const response= await getNews({
              page_number:  currentPage,
              page_size:  pageSize,
              category: selectedCategory === 'All' ? null : selectedCategory 
             })
            setNews(response.news)
            setIsLoading(false)
          } catch (error) {
              console.log(error)
          }

        };
       
          const fetchCategories  = async () => {
          try {
          
             const response= await getCategories ()
           setCategories(["All", ...response.categories])
        
          } catch (error) {
              console.log(error)
          }

        };

        

        useEffect(() => {
          fetchCategories();
        },[]);


    useEffect(() => {
       fetchNews(currentPage)
    },[currentPage , selectedCategory])



  const handleNextPage = () => {
    if (currentPage < totalPages){
      setCurentPage(currentPage+1)
    }
  }
  const handlePreviousPage = () => {
    if (currentPage > 1){
      setCurentPage(currentPage - 1)
    }
  }
    const handlePageClick = (pageNumber) => {
      setCurentPage(pageNumber)
    }
 



  return (
    <main className='flex w-full flex-col gap-8'>
      <Categories categories={categories}
       setSelectedCategory={setSelectedCategory}
       selectedCategory = {selectedCategory}
       >
       
       </Categories>
    { news.length > 0 && !isLoading ? <NewsBaner item={news[0]}/> : <Skeleton type={'banner'} count={1}/>}

      <Pagination 
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage} 
      handlePageClick={handlePageClick} 
      totalPages={totalPages}
      currentPage = {currentPage}
      />

   {!isLoading ? < NewsList news={news}/> : <Skeleton type={'item'} count={10}/>}


      <Pagination 
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage} 
      handlePageClick={handlePageClick} 
      totalPages={totalPages}
      currentPage = {currentPage}
      />
    </main>






  )
  

}
