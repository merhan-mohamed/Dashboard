import React from 'react'

const Header = ({title, category}) => {
  return (
    <div className='mb-10'>
      <p className='text-lg text-gray-400'>{category}</p>


      <p className='text-3xl font-extrabold text-slate-900 tracking-tight'>{title}</p>
    </div>
  )
}

export default Header
