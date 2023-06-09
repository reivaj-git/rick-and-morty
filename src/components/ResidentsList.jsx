import React, { useState } from 'react'
import ResidentCard from './ResidentCard'
import { useEffect } from 'react'

const ResidentsList = ({ location }) => {

  const [currentPage, setCurrentPage] = useState(1)

  const RESIDENTS_PER_PAGE = 20

  const quantityPages = Math.ceil(location?.residents?.length / RESIDENTS_PER_PAGE)

  const arrayPages = []
  for (let i = 1; i <= quantityPages; i++){
    arrayPages.push(i)
  }

  const startCut = (currentPage * RESIDENTS_PER_PAGE ) - RESIDENTS_PER_PAGE;

  const endCut = currentPage * RESIDENTS_PER_PAGE

  const residents = location?.residents

  useEffect(() => {
    setCurrentPage(1)
  }, [location])

  return (
    <>
      <section className='p-4 grid auto-rows-auto gap-6 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1200px] mx-auto'>
        {
          residents?.slice(startCut, endCut).map((resident) => (<ResidentCard key={resident} resident={resident} />))
        }
      </section>
      
      <ul className='flex text-white gap-4 justify-center py-4 '>
        {arrayPages.map(page => <li onClick={() => setCurrentPage(page)} className={`p-3 rounded-md cursor-pointer ${page === currentPage && " bg-green-800 text-white font-bold" }`} key = { page } >{page}</li>)}
      </ul>
    </>
    
  )
}

export default ResidentsList