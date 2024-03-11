import React, { useEffect, useState } from "react"

export default function GetJob() {
  const email = "abc@hr.com"
  const [job, setJobs] = useState([])
  const [searchText, setSearchText] = useState("")
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:3000/my-jobs/${email}`, {method: "GET"})
      .then((data) => data.json())
      .then((result) => setJobs(result))
  }, [])

  return(
    <div>
      {job[0].jobTitle}
    </div>
  )
}
