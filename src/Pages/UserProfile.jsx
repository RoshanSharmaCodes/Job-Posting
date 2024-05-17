import React, {useState, useEffect} from "react"
import { Link, useParams } from "react-router-dom"

export const UserProfile = () => {
  // const candidate = {
  //   emailId: "roshan@codemyapp.com",
  //   createAt: "2024-05-13T10:16:43.508+00:00",
  //   userId: "UiATRWe28ZSN7YY6Smt3bSd",
  //   cv: "www.google.com",
  //   email: "roshan@codemyapp.com",
  //   firstName: "Roshan",
  //   highestEducation: "Master's Degree",
  //   lastName: "Sharma",
  //   linkedinUrl: "https://www.iciciprulife.com/testing/term-insurance-plans/iPS_preprod_…",
  //   phoneNumber: "7007558706",
  //   pitch:
  //     "I am good dflkgh  ihsd  hsduh asd fasdu fhsadu fhadsi aasgifsdgfg  sjdfsuf hsdifu sfusd fousdf sdf sdfuysd fiusdyf sdiuyf sdifsd fiuhe  dfu sdfiu duf sduifydffd f sdfdud fd fd f  df usdgfusdf sdfyusd fisfbisdufy sdfyi  boy",
  //   portfolioUrl: "https://www.iciciprulife.com/testing/term-insurance-plans/iPS_preprod_…",
  //   yearOfPassing: "2021",
  //   profilePic: "https://shotkit.com/wp-content/uploads/2023/08/classic-headshot-andrea-piacquadio.jpeg",
  //   workExperience: [
  //     {
  //       companyName: "Microsoft",
  //       yearOfWork: "2015",
  //       jobDescription:
  //         "I was a developer who mostly does the deployement and production level debugging to identify the problem and provide the solution to the compay in the most optimal way.",
  //     },
  //     {
  //       companyName: "Amazon",
  //       yearOfWork: "2013",
  //       jobDescription:
  //         "I was a developer who mostly does the deployement and production level debugging to identify the problem and provide the solution to the compay in the most optimal way.",
  //     },
  //   ],
  // }
  const userId = useParams()
  const [job, setJob] = useState(false)
  const [candidate, setCandidate] = useState(false)

  useEffect(()=>{
    try {
      fetch(`http://localhost:3000/User/get-user/${userId.id}`, { method: "GET", headers: { "content-type": "application/json" }})
        .then((data) => data.json())
        .then((result) => {
          setCandidate(result.user)
          console.log(result.user)
        })
    } catch (e) {
      alert("Internal Error Occurred.")
    }
  },[])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="flex flex-col items-center">
            <img
              src={candidate.profilePic || "https://via.placeholder.com/150"}
              alt="Candidate"
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-gray-200"
            />
            <h1 className="text-2xl font-bold text-gray-900 mt-4">{`${candidate.firstName} ${candidate.lastName}`}</h1>
            <h2 className="text-xl text-gray-700">{candidate.highestEducation}</h2>
            <p className="text-gray-500">{candidate.emailId}</p>
            <p className="text-gray-500">{candidate.phoneNumber}</p>
            <div className="mt-6">
              <p className="mt-2 text-gray-700">
                <a href={candidate.cv} target="_blank" rel="noopener noreferrer" className="border bg-blue text-white p-2 rounded-md">
                  Download CV
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 w-full">
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="leading-9">
                    <strong>Email:</strong> {candidate.email}
                  </p>
                  <p className="leading-9">
                    <strong>Phone Number:</strong> {candidate.phoneNumber}
                  </p>
                  <p className="leading-9">
                    <strong>Highest Education:</strong> {candidate.highestEducation}
                  </p>
                  <p className="leading-9">
                    <strong>Year of Passing:</strong> {candidate.yearOfPassing}
                  </p>
                </div>
                <div>
                <p className="leading-9">
                    <strong>User ID:</strong> {candidate.userId}
                  </p>
                  <p className="leading-9">
                    <strong>LinkedIn:</strong>{" "}
                    <a href={candidate.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      View Profile
                    </a>
                  </p>
                  <p className="leading-9">
                    <strong>Portfolio:</strong>{" "}
                    <a href={candidate.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      View Portfolio
                    </a>
                  </p>
                  <p className="leading-9">
                  <strong>Github:</strong>{" "}
                    <a href={candidate.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      View Work
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900">About Me</h3>
              <p className="mt-2 text-gray-700">{candidate.pitch}</p>
            </div>
             {candidate.workExperience && <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900">Work Experience</h3>
              <div className="mt-4">
                {candidate.workExperience && candidate.workExperience.length > 0 ? (
                  candidate.workExperience.map((experience, index) => (
                    <div key={index} className="mb-4">
                      <span>
                        <span className="text-lg font-semibold text-gray-800">{experience.companyName}</span> | Year {experience.yearOfWork}
                      </span>
                      <p className="text-gray-700">{experience.jobDescription}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-700">No work experience listed.</p>
                )}
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}
