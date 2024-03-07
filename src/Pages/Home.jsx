import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'

export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [jobs, setJobs] = useState([])
  const [position, setPosition] = useState("")
  
  var handlePositionChange = (e) =>{
    setPosition(e.target.value)
    console.log(position)
  }

  useEffect(()=>{
    fetch("jobs.json").then(res=> res.json()).then(data=> setJobs(data))
  },[])
  

  const filterItems = jobs.filter(job=> job.jobTitle.toLowerCase().indexOf(position.toLowerCase()) != -1)

  // Radio Based Filtering
  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value)
  }

  // Button Based Filtering
  const handleClickCategory = (e) => {
    setSelectedCategory(e.target.value)
  }

  const filterData = (job, selected, query) =>{
    let filteredJobs = jobs

    if(query){
      filteredJobs = filterItems
    }

    if(selected){
      
    }
  }


  return (
    <Banner position={position} handlePositionChange={handlePositionChange}/>
  )
}
