import React from 'react'

export default function Button({title, value, handleClick}) {
  return (
    <button value={value} className='px-4 py-1 border text-base hover:bg-blue hover:text-white' onClick={handleClick}>
        {title}
    </button>
  )
}
