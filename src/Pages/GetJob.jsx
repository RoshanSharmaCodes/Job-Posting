import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

export default function GetJob() {
  const profileInfo = useSelector((state) => state.profileReducer)
  const userId = profileInfo.info.userId
  const [job, setJobs] = useState([])
  const [searchText, setSearchText] = useState("")
  const [isLoading, setLoading] = useState(false)

  const handleSearchJob = () => {
    const filter = job.filter((item) => item.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
    console.log(filter)
    setJobs(job)
    setLoading(false)
  }

  const handleDeleteJob = (jobId) => {
    setLoading(true)
    fetch(`http://localhost:3000/job/${jobId}`, { method: "DELETE" })
      .then((data) => data.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Job Delete Successfully")
        } else {
          alert("Job Deletion Failed. Try again later.")
        }
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:3000/Jobs/my-jobs/${userId}`, { method: "GET" })
      .then((data) => data.json())
      .then((result) => setJobs(result)).then(()=>{
        setLoading(false)
      })
  }, [])

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* Job Search Bar */}
      <div className="my-jobs-container">
        <h1 className="text-center p-4">All My Jobs</h1>
        <div className="search-box p-2 text-center mb-2">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
          />
          <button className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4" onClick={handleSearchJob}>
            Search
          </button>
        </div>
      </div>

      {/* Job Table */}

      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">All Jobs</h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to={"/Post-Job"}>
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Post Job
                  </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      No.
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Title
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Company
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Salary
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Edit
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      View
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Delete
                    </th>
                  </tr>
                </thead>
                {isLoading? <span>Loading...</span>: <tbody>
                  {job.map((data, index) => (
                    <tr key={index}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {index + 1}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">{data.jobTitle}</td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.companyName}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        ${data.minPrice}K - ${data.maxPrice}K
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button className="bg-yellow-300 py-2 px-3.5">
                          <Link to={`/edit-job/${data._id}`}>Edit</Link>
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <a target="_blank" href={`/JobProfile/${data.jobId}`} className="bg-blue py-2 px-2.5 text-white">
                          View
                        </a>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button onClick={() => handleDeleteJob(data._id)} className="bg-red-500 py-2 px-2.5 text-white">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>}
                
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
