import React, { useEffect, useState } from "react"
import SalaryLandingBanner from "../Components/SalaryLandingBanner"

export default function SalaryEst() {
    const [searchText, setSearchText] = useState("sdf")
    const [salary, setSalary] = useState("")

    const handleSearch = () => {
        console.log("Text",searchText)
        const filterItems = salary.filter((job) => job.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1)
        setSalary(filterItems)
    }


    useEffect(()=>{
        fetch("salary.json").then((data)=>data.json()).then(result => setSalary(result)).then(()=> console.log(salary))
    },[])

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <SalaryLandingBanner />
      <div className="search-box p-2 text-center mb-2">
        <input type="text" onChange={(e) => setSearchText(e.target.value)} name="search" id="search" className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full" />
        <button onClick={(e) => handleSearch(e.target.value)} className="py-2 px-4 text-white bg-blue font-semibold rounded-sm mb-4">Search</button>
      </div>
      
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center">
           {
              salary.length > 0 ?  salary.map((item,index)=> (
                    <div key={index} className="shadow px-4 py-8">
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <p className="text-blue my-2 font-medium text-lg">{item.salary}</p>
                        <div className="flex flex-wrap gap-4">
                            <a  href="/" className="underline">{item.status}</a>
                            <a  href="/" className="underline">{item.skills}</a>
                        </div>
                        </div>
                )) : "Loading..."
            }
      </div>
    </div>
  )
}
