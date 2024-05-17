import { useState } from "react"

const Modal = ({ isOpen, onClose, onButtonClick }) => {
  const [buttonText, setButtonText] = useState("Checkout Our Blogs")

  const handleButtonClick = () => {
    // Implement your function here
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="fixed inset-0 transition-opacity" onClick={onClose}>
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          {/* Modal content */}
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full">
            <div className="px-4 py-5 sm:p-6">
              {/* Close button */}
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>
                  <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3.293 3.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10 3.293 4.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {/* Modal title */}
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-3xl leading-6 font-medium text-center leading-10 text-gray-900">Thanks for Subscribing! <br/>We'll Notify You Soon.</h3>
              </div>
              {/* Modal content */}
              <div className="text-center justify-center flex mb-10">
              <img
                  className="h-20 w-20"
                  src="https://www.pngall.com/wp-content/uploads/9/Green-Tick-Vector-PNG-Images.png"
                  alt="Success Icon"
                />
                </div>
              <div className="text-center">
                <button
                  onClick={handleButtonClick}
                  className="inline-block bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
