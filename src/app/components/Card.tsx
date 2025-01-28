import React from 'react'

const card = () => {
  return (
    <div>
      
    <section className='flex justify-center w-full space-x-1 p-2 mb-8'>

      <div className='bg-orange-200  h-52 rounded w-1/3  p-4'>
        <h1 className='text-center text-blue-800'>FIRST CARD</h1>
        <p className='text-center'>This is the first card</p>
      </div>

      <div className='bg-slate-500 rounded  p-4 h-52  w-1/3 '>
        <h1 className='text-center text-lime-500'>SECOND CARD</h1>
        <p className='text-center'>This is the second card</p>
      </div>

      <div className='bg-lime-400 rounded h-52 w-1/3 p-4'>
        <h1 className='text-center text-red-800'>THIRD CARD</h1>
        <p className='text-center'>This is the third card</p>
      </div>
      </section>
      <section className='flex justify-center w-full space-x-1 p-2'>
      <div className='bg-pink-200 h-52 w-1/2'>
        <h1 className='text-red-700 text-center p-2 '>FOURTH CARD</h1>
        <p className='text-center text-gray-800'>This is the fourth card</p>

      </div>
      <div className='bg-purple-800 h-52 w-1/2'>
        <h1 className='text-center p-2'>FIFTH CARD</h1>
        <p className='text-center'>This is the fifth card</p>
      </div>

      

      </section>
      
      
    </div>
  )
}

export default card