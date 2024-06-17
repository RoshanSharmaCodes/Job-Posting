import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export const JobProfile = () => {

  const jobId = useParams()
  const [job, setJob] = useState(false)

  useEffect(()=>{
    try {
      fetch(`https://job-posting-server-puce.vercel.app/Jobs/get-job/${jobId.id}`, { method: "GET", headers: { "content-type": "application/json" }})
        .then((data) => data.json())
        .then((result) => {
          setJob(result.job)
          console.log(result.job)
        })
    } catch (e) {
      alert("Internal Error Occurred.")
    }
  },[])
  
  // var job = {
  //   jobTitle: "UI/UX Designer",
  //   companyName: "DePronto Infotech",
  //   minPrice: "1000",
  //   maxPrice: "2000",
  //   salaryType: "Monthly",
  //   jobLocation: "Pune",
  //   experienceLevel: "Expert",
  //   postingDate: "2024-05-12",
  //   employmentType: "Contractual",
  //   companyLogo: "https://www.thepixelfreak.co.uk/wp-content/uploads/2019/05/Entwined-M-Logo.png",
  //   description: "Wants a developer who can understand the legacy code and can start dev…",
  //   jobPostedBy: "shivani.hr@depronto.com",
  //   skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS"],
  //   createAt: "2024-05-14T17:22:18.232+00:00",
  //   jobId: "JvPFzq5wvdUjjA3NP2rP97G",
  //   applications: [
  //     {
  //       name: "Roshan Sharma",
  //       pitch: "Delivered Major Projects.",
  //       applicantId: "UiATRWe28ZSN7YY6Smt3bSd",
  //     },
  //     {
  //       name: "Vikas Sharma",
  //       pitch: "Delivered Major Projects.",
  //       applicantId: "UiATsdfe28ZSN7YY6Smt3bSd",
  //     },
  //   ],
  // }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img src={job.companyLogo} alt={job.companyName} className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-sm border-4 border-gray-200" />
          <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-2xl font-bold text-gray-900">{job.jobTitle}</h1>
            <h2 className="text-xl text-gray-700">{job.companyName}</h2>
            <p className="text-gray-500">Location: {job.jobLocation}</p>
            <p className="text-gray-500">Posted on: {new Date(job.createAt).toDateString()}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Job Details:</h3>
          <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-4 border p-2">
            <div>
              <p>
                <strong>Job ID:</strong> {job.jobId}
              </p>
              <p>
                <strong>Employment Type:</strong> {job.employmentType}
              </p>
              <p>
                <strong>Salary:</strong> ${job.minPrice} - ${job.maxPrice} {job.salaryType}
              </p>
              <p>
                <strong>Job Location:</strong> {job.jobLocation}
              </p>
            </div>
            <div>
              <p>
                <strong>Experience Level:</strong> {job.experienceLevel}
              </p>
              <p>
                <strong>Posted By:</strong> {job.jobPostedBy}
              </p>
              <p>
                <strong>Created At:</strong> {new Date(job.postingDate).toDateString()}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Description:</h3>
          <p className="mt-2 text-gray-700">{job.description}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Skills Required:</h3>
          <ul className="mt-2 list-disc list-inside flex">
            {job.skills && job.skills.map((skill, index) => (
              <li key={index} className="text-white bg-blue m-1 pl-2 pr-2 rounded-md">
                {skill.label}
              </li>
            ))}
          </ul>
        </div>
        {job.applications && job.applications.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900">Applicant:</h3>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicant ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pitch
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {job.applications.map((application, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><a target="_blank" href={`/Resume/${application.applicantId}`}>{application.name}</a></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.applicantId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.pitch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
