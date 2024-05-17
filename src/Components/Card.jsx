import React, { useState, useTransition } from "react"
import { Link } from "react-router-dom"
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi"
import JobApplyModal from "./JobApplyModal"
import { useDispatch, useSelector } from "react-redux"

export default function Card({ data, apply = false, del = false }) {
  const [jobApplyModal, setJobApplyModal] = useState(false)
  const profileInfo = useSelector((state) => state.profileReducer)
  const [applyBtn, setApplyBtn] = useState({
    text: "Apply",
    styles: "border mr-2 pr-6 pl-6 pt-2 pb-2 rounded-lg bg-green-500 text-white hover:bg-white hover:border-green-500 hover:text-green-500",
  })

  const handleApplyJob = () => {
    setJobApplyModal(true)
  }

  const handleCloseJobApply = () => {
    setJobApplyModal(false)
  }

  const onSubmit = async (pitch) => {
    var jobId = data.jobId
    var applicantInfo = {name: profileInfo.info.firstName +" "+ profileInfo.info.lastName, pitch: pitch, applicantId: profileInfo.info.userId }
    try {
      fetch(`http://localhost:3000/Jobs/apply-job/${jobId}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(applicantInfo) })
        .then((data) => data.json())
        .then((result) => {
          console.log("Result:", result)
        })
    } catch (e) {
      alert("Internal Error Occurred.")
    }
    setJobApplyModal(false)
    setApplyBtn({ text: "Applied", styles: "border mr-2 pr-6 pl-6 pt-2 pb-2 rounded-lg bg-white border-green-500 text-green-500" })
  }

  return (
    <section className="card">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img className="w-20" src={data.companyLogo} alt={data.companyName} />
        <div>
          <h4 className="text-primary mb-1">{data.companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{data.jobTitle}</h3>
          <div className="flex flex-wrap gap-2 mb-2 text-base text-primary/70">
            <span className="flex items-center gap-1">
              <FiMapPin />
              {data.jobLocation}
            </span>
            <span className="flex items-center gap-1">
              <FiClock />
              {data.employmentType}
            </span>
            <span className="flex items-center gap-1">
              <FiDollarSign />
              {data.minPrice}-{data.maxPrice} K
            </span>
            <span className="flex items-center gap-1">
              <FiCalendar />
              {data.postingDate}
            </span>
          </div>

          <p className="text-base text-primary/70">{data.description}</p>
          <div className="mt-5">
            {apply && (
              <button onClick={handleApplyJob} className={applyBtn.styles}>
                {applyBtn.text}
              </button>
            )}
            {del && (
              <button className="border rounded-lg p-2 bg-red-500 text-white hover:bg-white hover:border-red-500 hover:text-red-500">Delete</button>
            )}
          </div>
        </div>
      </Link>
      <JobApplyModal isOpen={jobApplyModal} onClose={handleCloseJobApply} onSubmit={onSubmit} />
    </section>
  )
}
