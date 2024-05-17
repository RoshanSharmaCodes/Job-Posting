import React, {useState, useEffect} from "react"
import Card from "../Components/Card"

export const AppliedJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch("jobs.json")
          .then((res) => res.json())
          .then((data) => setJobs(data))
      }, [])
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        { jobs.map( (data) => <Card data={data} apply={false} del={true}/>)}
      </div>
    </div>
  )
}
