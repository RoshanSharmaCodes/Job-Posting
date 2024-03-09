import React, { useEffect, useState } from "react"
import Banner from "../Components/Banner"
import Card from "../Components/Card"
import Jobs from "./Jobs"
import Sidebar from "../Sidebar/Sidebar"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [jobs, setJobs] = useState([])
  const [position, setPosition] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  var handlePositionChange = (e) => {
    setPosition(e.target.value)
  }

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data))
  }, [])

  const filterItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(position.toLowerCase()) != -1)

  // Radio Based Filtering
  const handleChangeCategory = (e) => {
    console.log("Handle Change Category Called")
    setSelectedCategory(e.target.value)
  }

  // Button Based Filtering
  const handleClickCategory = (e) => {
    setSelectedCategory(e.target.value)
  }

  const filterData = (job, selected, query) => {
    console.log("Filter Data Function Called")
    let filteredJobs = jobs

    if (query) {
      filteredJobs = filterItems
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) === parseInt(selected) ||
          employmentType.toLowerCase() === selected.toLowerCase()
      )
    }

    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
  }

  const results = filterData(jobs, selectedCategory, position)

  return (
    <div>
      <Banner position={position} handlePositionChange={handlePositionChange} />

      {/* Main Content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded"><Sidebar handleChangeCategory={handleChangeCategory} handleClickCategory={handleClickCategory} /></div>
        <div className="bg-white col-span-2 p-4 rounded-sm"><Jobs cardData={results} /></div>
        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  )
}
