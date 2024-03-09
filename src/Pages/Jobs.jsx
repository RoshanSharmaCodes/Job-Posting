import React from 'react'

export default function Jobs({cardData}) {
  return (
    <div>
      <h1 className='text-2xl'>Found: {cardData.length}</h1>
        {cardData}
    </div>
  )
}
