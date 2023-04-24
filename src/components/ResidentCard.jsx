import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ResidentCard = ({ resident }) => {

  const [residentInfo, setResidentInfo] = useState()
  


  const residentsStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
  }


  useEffect(() => {

    axios.get(resident)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err))

  }, [])


  return (
    <article >
      <div className='relative'>
        <img className='w-full bg-cover' src={residentInfo?.image} alt="" />
        <div className='absolute bottom-4 left-1/2 -translate-x-1/3 p-1 px-2 bg-[#020A02]/80 text-white flex gap-1 items-center rounded-sm'>
          <div className={`w-3 h-3 rounded-full ${residentsStatus[residentInfo?.status]} `}></div>
          <span>{residentInfo?.status}</span>
        </div>
      </div>
      
      <section className='p-4 bg-[#060B06]/80 rounded-b-md border border-green-500 transition-colors'>
        <h3 className='text-lg font-bold text-white mb-4'>{residentInfo?.name}</h3>
        <ul className='text-white'>
          <li className='flex items-center mb-2'>
            <span className='mr-2'>Species:</span>
            <span>{residentInfo?.species}</span>
          </li>
          <li className='flex items-center mb-2'>
            <span className='mr-2'>Origin:</span>
            <span>{residentInfo?.origin.name}</span>
          </li>
          <li className='flex items-center'>
            <span className='mr-2'>Times Apear:</span>
            <span>{residentInfo?.episode.length}</span>
          </li>
        </ul>
      </section>


    </article>
  )
}

export default ResidentCard