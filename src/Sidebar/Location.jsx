import React, { useEffect, useState } from "react"
import RadioInput from "../Components/RadioInput"

export default function Location({ handleChangeCategory }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" value="" onChange={handleChangeCategory} />
          <span className="checkmark"></span> All
        </label>
        
        <RadioInput handleChangeCategory={handleChangeCategory} title={"London"} value={"London"} name={"test"} />
        <RadioInput handleChangeCategory={handleChangeCategory} title={"Mumbai"} value={"Mumbai"} name={"test"} />
      </div>
    </div>
  )
}
