import React from "react"
import { useForm } from "react-hook-form"

export default function CreateJob() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

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

          <input type="submit" className="mt-12 border text-white bg-blue cursor-pointer rounded-md py-2 px-8 font-semibold" />
        </form>
      </div>
    </div>
  )
}
