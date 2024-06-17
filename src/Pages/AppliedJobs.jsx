import React, {useState, useEffect} from "react"
import Card from "../Components/Card"
import { useSelector } from "react-redux"

export const AppliedJobs = () => {
    const [jobs, setJobs] = useState([])
    const profileInfo = useSelector((state) => state.profileReducer.info)

    useEffect(() => {
      try {
        console.log("Bfore Job Applied", profileInfo.appliedJobs)
        fetch("https://job-posting-server-puce.vercel.app/Jobs/applied-jobs", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({jobData: profileInfo.appliedJobs}) })
          .then((data) => data.json())
          .then((result) => {
            setJobs(result)
            console.log("Applied Jobs Result:", result)
          })
      } catch (e) {
        alert("Internal Error Occurred.")
      }
      }, [])

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        {jobs.length && jobs.map( (data) => <Card data={data} apply={false} del={true}/>)}
      </div>
    </div>
  )
}
