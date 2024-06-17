import React, { useState } from "react"
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"
import SuccessModal from "./SuccessModal"

export default function Newsletter() {
  const [newsLetterEmail, setNewLetterEmail] = useState("")
  const [courseEmail, setCourseEmail] = useState("")
  const [successModal, setSuccessModal] = useState(false)
  const handleSubscribeNewletter = async () => {
    try {
      const res = await fetch("https://job-posting-server.vercel.app/Subscribe/Newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailId: newsLetterEmail }),
      })

      if (res.ok) {
        const data = await res.json()
        setSuccessModal(true)
        console.log("Subscribed", data)
      } else {
        const errorData = await res.json()
        console.error("Failed to subscribe:", errorData.message)
      }
    } catch (error) {
      console.error("Failed to subscribe:", error.message)
    }
  }
  const handleCourseList = async () => {
    try {
      const res = await fetch("https://job-posting-server.vercel.app/Subscribe/Newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailId: courseEmail }),
      })

      if (res.ok) {
        const data = await res.json()
        setSuccessModal(true)
        console.log("Subscribed", data)
      } else {
        const errorData = await res.json()
        console.error("Failed to subscribe:", errorData.message)
      }
    } catch (error) {
      console.error("Failed to subscribe:", error.message)
    }
  }

  return (
    <div>
      <div className="mb-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Get latest Updates!
        </h3>
        <p className="text-primary/75 text-base mb-4">
          I know it's quite frustrating to find a perfect job. But this newsletter will give you edge over 80% Job Finders.
        </p>
        <div className="w-full space-y-4">
          <input
            onChange={(e) => setNewLetterEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            onClick={handleSubscribeNewletter}
            value="Subscribe"
            className="w-full block py-2 pl-3 border text-center focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Unlock Your Potential!
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Soon, We'll be launching an extensive program to create fleet of elite Sr. Devs. Hop on to this waiting list and be the early bird.
        </p>
        <div className="w-full space-y-4">
          <input
            onChange={(e) => setCourseEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            onClick={handleCourseList}
            value="Notify Me"
            className="w-full block py-2 pl-3 text-center border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
      <SuccessModal isOpen={successModal} onClose={() => setSuccessModal(false)} />
    </div>
  )
}
