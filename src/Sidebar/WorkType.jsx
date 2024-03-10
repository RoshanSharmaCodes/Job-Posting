import React, { useEffect, useState } from "react"
import RadioInput from "../Components/RadioInput"

export default function WorkType({ handleChangeCategory }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of Employment</h4>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="worktype" value="" onChange={handleChangeCategory} />
          <span className="checkmark"></span> All
        </label> 
        <RadioInput handleChangeCategory={handleChangeCategory} title={"Full-time"} value={"Full-time"} name={"worktype"} />
        <RadioInput handleChangeCategory={handleChangeCategory} title={"Temporary"} value={"Temporary"} name={"worktype"} />
        <RadioInput handleChangeCategory={handleChangeCategory} title={"Part-time"} value={"Part-time"} name={"worktype"} />
      </div>
    </div>
  )
}
