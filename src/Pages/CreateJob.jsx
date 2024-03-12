import React, { useState } from "react"
import { useForm } from "react-hook-form"
import CreatableSelect from "react-select/creatable"

export default function CreateJob() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm()

  const [selectedOption, setSelectedOption] = useState(null)

  const onSubmit = (data) => {
    data.skills = selectedOption
    console.log("Post Job", data)
    fetch("http://localhost:3000/post-job", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) })
      .then((data) => data.json())
      .then((result) => {
        console.log("Result:", result)
        if (result.acknowledged) {
          alert("Job Posted Successfully")
        } else {
          alert("Job Posting Failed. Try again later.")
        }
        reset()
      })
  }

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "CSS", label: "CSS" },
    { value: "HTML", label: "HTML" },
    { value: "ReactJS", label: "ReactJS" },
    { value: "NodeJS", label: "NodeJS" },
    { value: "ExpressJS", label: "ExpressJS" },
    { value: "NextJS", label: "NextJS" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "AWS", label: "AWS" },
    { value: "Azure", label: "Azure" },
    { value: "GCP", label: "GCP" },
  ]

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input type="text" placeholder={"Web Developer"} {...register("jobTitle")} className="create-job-input" />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company</label>
              <input type="text" placeholder="Ex: Microsoft" {...register("companyName")} className="create-job-input" />
            </div>
          </div>

          {/* 2nd Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input type="text" placeholder={"$20K"} {...register("minPrice")} className="create-job-input" />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input type="text" placeholder="$80K" {...register("maxPrice")} className="create-job-input" />
            </div>
          </div>

          {/* 3rd Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Frequency</label>
              <select {...register("salaryType", { required: true })} className="create-job-input">
                <option value="Hourly">Hourly</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input type="text" placeholder="Ex: London" {...register("jobLocation")} className="create-job-input" />
            </div>
          </div>

          {/* 4th Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select {...register("experienceLevel", { required: true })} className="create-job-input">
                <option value="No Experience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Experience">Experience</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Posting Date</label>
              <input type="date" placeholder="DD/MM/YYYY" {...register("postingDate")} className="create-job-input" />
            </div>
          </div>

          {/* 5th Row */}
          <div className="create-job-flex">
            <div className="w-full">
              <label className="block mb-2 text-lg">Skills</label>
              <CreatableSelect onChange={setSelectedOption} options={options} className="create-job-input" defaultValue={selectedOption} isMulti />
            </div>
          </div>

          {/* 6th Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select {...register("employmentType", { required: true })} className="create-job-input">
                <option value="Part-time">Part-time</option>
                <option value="Full-time">Full-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input type="url" placeholder="https://www.company.com/logo.png" {...register("companyLogo")} className="create-job-input" />
            </div>
          </div>

          {/* 7th Row */}
          <div className="create-job-flex">
            <div className="w-full">
              <label className="block mb-2 text-lg">Job Description</label>
              <textarea
                rows={6}
                type="email"
                placeholder={"Paste your Job description here..."}
                {...register("description")}
                className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-400"
              ></textarea>
            </div>
          </div>

          {/* 8th Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posted By</label>
              <input type="email" placeholder={"hr@domain.com"} {...register("jobPostedBy")} className="create-job-input" />
            </div>
          </div>

          <input type="submit" className="mt-12 border text-white bg-blue cursor-pointer rounded-md py-2 px-8 font-semibold" />
        </form>
      </div>
    </div>
  )
}
