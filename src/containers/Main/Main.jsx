import React from 'react'


const Main = ({children}) => {
  return (
    <main  className='flex justify-center items-center min-h-screen bg-dark-900 px-3 sm:p-0'>
        {children}
    </main>
  )
}

export default Main