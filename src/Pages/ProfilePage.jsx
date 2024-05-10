import React from "react";
import { useForm } from "react-hook-form";

function ProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Profile Data", data);
    // You can send the data to backend or handle it as needed
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* First Name & Last Name */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">First Name</label>
              <input placeholder="John" type="text" {...register("firstName")} className="create-job-input" />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Last Name</label>
              <input placeholder="Maxwell" type="text" {...register("lastName")} className="create-job-input" />
            </div>
          </div>

          {/* Phone Number & Email */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Phone Number</label>
              <input placeholder="9876543210" type="tel" {...register("phoneNumber")} className="create-job-input" />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Email</label>
              <input placeholder="john@gmail.com" type="email" {...register("email")} className="create-job-input" />
            </div>
          </div>

          {/* Highest Education & Year of Passing */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Highest Education</label>
              <select {...register("highestEducation")} className="create-job-input">
                <option value="High School">High School</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Year of Passing</label>
              <select {...register("yearOfPassing")} className="create-job-input">
                {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Linkedin URL & Portfolio URL */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Linkedin URL</label>
              <input placeholder="https://www.linkedin.com/in/johncodes/" type="url" {...register("linkedinUrl")} className="create-job-input" />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Portfolio URL</label>
              <input placeholder="www.johnportfolio.com" type="url" {...register("portfolioUrl")} className="create-job-input" />
            </div>
          </div>

          {/* Upload CV */}
          <div>
            <label className="block mb-2 text-lg">Upload CV</label>
            <input type="file" accept=".pdf, .doc, .docx" {...register("cv")} className="create-job-input" />
          </div>

          {/* Pitch */}
          <div>
            <label className="block mb-2 text-lg">What makes you a good fit?</label>
            <textarea placeholder="Write it like your wedding vows..." rows={6} {...register("pitch")} className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-400"></textarea>
          </div>

          <input value="Save Profile" type="submit" className="mt-12 border text-white bg-blue cursor-pointer rounded-md py-2 px-8 font-semibold" />
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
