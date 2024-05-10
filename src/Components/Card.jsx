import React from 'react'
import { Link } from 'react-router-dom'
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";

export default function Card({data}) {
  return (
    <section className='card'>
      <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={data.companyLogo} alt={data.companyName} />
        <div>
          <h4 className='text-primary mb-1'>{data.companyName}</h4>
          <h3 className='text-lg font-semibold mb-2'>{data.jobTitle}</h3>
          <div className='flex flex-wrap gap-2 mb-2 text-base text-primary/70'>
            <span className='flex items-center gap-1'><FiMapPin/>{data.jobLocation}</span>
            <span className='flex items-center gap-1'><FiClock/>{data.employmentType}</span>
            <span className='flex items-center gap-1'><FiDollarSign/>{data.minPrice}-{data.maxPrice} K</span>
            <span className='flex items-center gap-1'><FiCalendar/>{data.postingDate}</span>
          </div>

          <p className='text-base text-primary/70'>{data.description}</p>
        </div>
      </Link>
      <button className="border p-2 bg-green-500 text-white hover:bg-white hover:border-green-500 hover:text-green-500">Apply</button>
    </section>
  )
}
