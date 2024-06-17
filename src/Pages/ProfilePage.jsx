import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { FiMinus, FiPlus} from "react-icons/fi"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebaseApp from "../Firebase/firebase.config"

function ProfilePage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const profileInfo = useSelector((state) => state.profileReducer)
  const initialInfo = profileInfo.info || {}
  const [info, setProfileInfo] = useState(initialInfo)
  const [workExperience, setWorkExperience] = useState(initialInfo.workExperience || [{companyName: "", yearOfWork:"", jobDescription: ""}])
  var prefill = profileInfo.active ? true : false
  const [cvUrl, setCvUrl] = useState("")

  const onSubmit = (data) => {
    console.log("Profile Data", data)
    data.workExperience = workExperience
    data.cv = cvUrl
    try {
      fetch("https://job-posting-server-puce.vercel.app/User/Save", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) })
        .then((data) => data.json())
        .then((result) => {
          console.log("Result:", result)
          reset()
        })
    } catch (e) {
      alert("Internal Error Occurred.")
    }
  }

  const handleAddMoreWorkExp = () => {
    setWorkExperience([...workExperience, { companyName: "", yearOfWork: "", jobDescription: "" }]);
  }

  const handleRemoveWorkExperience = () => {
    if (workExperience.length > 0) {
      setWorkExperience(workExperience.slice(0, -1));
    }
  }

  const handleWorkExperienceChange = (index, event) => {
    const { name, value } = event.target
    console.log("Name and Value", name +" "+value)
    const updatedWorkExperience = [...workExperience]
    updatedWorkExperience[index][name] = value
    setWorkExperience(updatedWorkExperience)
  }

  const handleUploadCV = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, `${info.userId}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Upload failed", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setCvUrl(downloadURL);
        });
      }
    );
  };

  useEffect(()=>{
    console.log("Work Experience", workExperience)
  },[workExperience])

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* First Name & Last Name */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">First Name</label>
              {prefill == true ? (
                <input
                  defaultValue={info.firstName}
                  onChange={(e) => setProfileInfo((prev) => ({ ...prev, firstName: e.target.value }))}
                  name="firstName"
                  type="text"
                  {...register("firstName")}
                  className="create-job-input"
                />
              ) : (
                <input placeholder="John" type="text" {...register("firstName")} className="create-job-input" />
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Last Name</label>
              {prefill == true ? (
                <input
                  onChange={(e) => setProfileInfo((prev) => ({ ...prev, lastName: e.target.value }))}
                  defaultValue={info.lastName}
                  type="text"
                  {...register("lastName")}
                  className="create-job-input"
                />
              ) : (
                <input placeholder="Maxwell" type="text" {...register("lastName")} className="create-job-input" />
              )}
            </div>
          </div>

          {/* Phone Number & Email */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Phone Number</label>
              {prefill == true ? (
                <input
                  onChange={(e) => setProfileInfo((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                  defaultValue={info.phoneNumber}
                  type="tel"
                  {...register("phoneNumber")}
                  className="create-job-input"
                />
              ) : (
                <input placeholder="9876543210" type="tel" {...register("phoneNumber")} className="create-job-input" />
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Email</label>
              {prefill == true ? (
                <input
                  onChange={(e) => setProfileInfo((prev) => ({ ...prev, emailId: e.target.value }))}
                  defaultValue={info.emailId}
                  type="email"
                  {...register("emailId")}
                  className="create-job-input"
                />
              ) : (
                <input placeholder="john@gmail.com" type="email" {...register("emailId")} className="create-job-input" />
              )}
            </div>
          </div>

          {/* Highest Education & Year of Passing */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Highest Education</label>
              {prefill == true ? (
                <select defaultValue={info.highestEducation} {...register("highestEducation")} className="create-job-input">
                  <option value="High School">High School</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD">PhD</option>
                </select>
              ) : (
                <select {...register("highestEducation")} className="create-job-input">
                  <option value="High School">High School</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD">PhD</option>
                </select>
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Year of Passing</label>
              {prefill == true ? (
                <select defaultValue={info.yearOfPassing} {...register("yearOfPassing")} className="create-job-input">
                  {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              ) : (
                <select {...register("yearOfPassing")} className="create-job-input">
                  {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          {/* Linkedin URL & Portfolio URL */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Linkedin URL</label>
              {prefill == true ? (
                <input
                  onChange={(e) => setProfileInfo((prev) => ({ ...prev, linkedinUrl: e.target.value }))}
                  defaultValue={info.linkedinUrl}
                  type="url"
                  {...register("linkedinUrl")}
                  className="create-job-input"
                />
              ) : (
                <input placeholder="https://www.linkedin.com/in/johncodes/" type="url" {...register("linkedinUrl")} className="create-job-input" />
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Portfolio URL</label>
              {prefill == true ? (
                <input
                  onChange={(e) => setProfileInfo((prev) => ({ ...prev, portfolioUrl: e.target.value }))}
                  defaultValue={info.portfolioUrl}
                  type="url"
                  {...register("portfolioUrl")}
                  className="create-job-input"
                />
              ) : (
                <input placeholder="www.johnportfolio.com" type="url" {...register("portfolioUrl")} className="create-job-input" />
              )}
            </div>
          </div>

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Profile Image URL</label>
              {prefill == true ? (
                <input
                  onChange={(e) => setProfileInfo((prev) => ({ ...prev, profilePic: e.target.value }))}
                  defaultValue={info.profilePic}
                  type="url"
                  {...register("profilePic")}
                  className="create-job-input"
                />
              ) : (
                <input placeholder="https://www.linkedin.com/in/johncodes/" type="url" {...register("profilePic")} className="create-job-input" />
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Github URL</label>
              {prefill == true ? (
                <input
                  onChange={(e) => setProfileInfo((prev) => ({ ...prev, githubUrl: e.target.value }))}
                  defaultValue={info.githubUrl}
                  type="url"
                  {...register("githubUrl")}
                  className="create-job-input"
                />
              ) : (
                <input placeholder="www.johnportfolio.com" type="url" {...register("githubUrl")} className="create-job-input" />
              )}
            </div>
          </div>

          {/* Upload CV */}
          <div>
            <label className="block mb-2 text-lg">Upload CV</label>
            <input type="file" accept=".pdf, .doc, .docx" {...register("cv")} className="create-job-input" onChange={handleUploadCV}/>
            <label>Download Resume: <a href={info.cv} className="underline text-blue">Click Here</a></label>
          </div>

          {/* Pitch */}
          <div>
            <label className="block mb-2 text-lg">What makes you a good fit?</label>
            {prefill == true ? (
              <textarea
                defaultValue={info.pitch}
                onChange={(e) => setProfileInfo((prev) => ({ ...prev, pitch: e.target.value }))}
                rows={6}
                {...register("pitch")}
                className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-400"
              ></textarea>
            ) : (
              <textarea
                placeholder="Write it like your wedding vows..."
                rows={6}
                {...register("pitch")}
                className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-400"
              ></textarea>
            )}
          </div>
          <div className="w-full" id="workExp">
          <h1 className="font-bold text-2xl">Work Experience</h1>
          {workExperience.map((data, index) => {return <div className="w-full" key={index}>
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full sm:mb-0">
                <label className="block mb-2 text-lg sm:mb-0">Company Name</label>
                {prefill == true ? (
                  <input
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    defaultValue={workExperience[index]?.companyName}
                    type="text"
                    name="companyName"
                    className="create-job-input"
                    placeholder="Ex:Microsoft"
                  />
                ) : (
                  <input name="companyName" onChange={(e) => handleWorkExperienceChange(index, e)} placeholder="Ex:Microsoft" type="url" {...register("companyName")} className="create-job-input" />
                )}
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Year</label>
                {prefill == true ? (
                  <select defaultValue={workExperience[index]?.yearOfWork} name="yearOfWork" onChange={(e) => handleWorkExperienceChange(index, e)} className="create-job-input">
                    {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select name="yearOfWork" onChange={(e) => handleWorkExperienceChange(index, e)} className="create-job-input">
                    {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
            <div className="w-full">
                <label className="block mb-2 text-lg">Work Description</label>
                {prefill == true ? (
                  <input
                    onChange={(e) => handleWorkExperienceChange(index, e)}
                    defaultValue={workExperience[index]?.jobDescription}
                    type="text"
                    name="jobDescription"
                    className="create-job-input"
                    placeholder="Your role and work in the organization..."
                  />
                ) : (
                  <input name="jobDescription" onChange={(e) => handleWorkExperienceChange(index, e)} placeholder="Your role and work in the organization..." type="url"  className="create-job-input" />
                )}
              </div>
          </div>})}
          
          <button type="button" onClick={handleAddMoreWorkExp} className="border p-1 bg-green-500 text-white rounded-md"><FiPlus/></button>
          <button type="button" onClick={handleRemoveWorkExperience} className="border p-1 bg-red-500 text-white rounded-md"><FiMinus/></button>
          </div>
          <input value="Save Profile" type="submit" className="mt-12 border text-white bg-blue cursor-pointer rounded-md py-2 px-8 font-semibold" />
        </form>
      </div>
    </div>
  )
}

export default ProfilePage
