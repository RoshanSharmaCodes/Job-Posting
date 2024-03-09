import React, { useEffect, useState } from 'react'
import Location from './Location'
import Salary from './Salary'
import WorkType from './WorkType'
import WorkExperience from './WorkExperience'

export default function Sidebar({handleChangeCategory, handleClickCategory}) {
    

  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-21'>Filters</h3>
        <Location handleChangeCategory={handleChangeCategory} />
        <Salary handleClickCategory={handleClickCategory} handleChangeCategory={handleChangeCategory}/>
        <WorkType handleChangeCategory={handleChangeCategory}/>
        <WorkExperience handleChangeCategory={handleChangeCategory}/>
    </div>
  )
}
