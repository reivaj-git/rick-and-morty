
import { useEffect, useState } from 'react'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentsList from './components/ResidentsList'

function App() {
  //Estados
  const [location, setLocation] = useState()

  // Funciones
  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.locationId.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {

    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`

    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [])


  return (
    <div className='app '>
      
      <header className="flex flex-col items-center justify-center h-[40vh] relative">
        
        <div className='w-full h-full bg-cover bg-no-repeat bg-center absolute' style={{ backgroundImage: "url('/images/bg-header.png')" }}>
        </div>

        <div className="flex flex-col items-center justify-center absolute w-full h-full">
          <img src="/images/Ellipse.png" alt="Ellipse" className="h-[600px] w-[600px] object-contain absolute -top-[200px]" />
          <img src="/images/portal.png" alt="Portal" className="h-[320px] w-[320px] object-contain absolute -top-16" />
          <img src="/images/logo.png" alt="Logo" className="h-[240px] w-[240px] object-contain absolute -top-10" />
        </div>

        <form onSubmit={handleSubmit} className='absolute bottom-0 w-full' >
          <div className="flex items-center justify-center">
            <input
              id='locationId'
              placeholder='Type a location id...'
              className='border-2 border-green-900 border-opacity-50 bg-gray-900 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-lg'
              type="text"
            />
            <button
              className="bg-green-900 text-white py-2 px-4 ml-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-lg"
            >
              Search <i className='bx bx-search'></i>
            </button>
          </div>

          <h2 className=' text-center text-white'>Welcome to the crazy universe!</h2>
        </form>

      </header>

      <div className='bg-[url(/images/bg-body.png)] w-full h-auto bg-cover bg-no-repeat'>
        <Location location={location} />
        <ResidentsList location={location} />
      </div>
      
    </div>
  )
}

export default App
