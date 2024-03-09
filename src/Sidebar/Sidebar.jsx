import React, { useEffect, useState } from 'react'
import Location from './Location'

export default function Sidebar({handleChangeCategory, handleClickCategory}) {
    

  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-21'>Filters</h3>
        <Location handleChangeCategory={handleChangeCategory} />
    </div>
  )
}
