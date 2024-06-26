import React, { useEffect, useState } from "react"
import RadioInput from "../Components/RadioInput"

export default function WorkExperience({ handleChangeCategory }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="workexp" value="" onChange={handleChangeCategory} />
          <span className="checkmark"></span> All
        </label> 
        <RadioInput handleChangeCategory={handleChangeCategory} title={"Internship"} value={"Internship"} name={"workexp"} />
        <RadioInput handleChangeCategory={handleChangeCategory} title={"Intermediate"} value={"Intermediate"} name={"workexp"} />
        <RadioInput handleChangeCategory={handleChangeCategory} title={"Beginner"} value={"Beginner"} name={"workexp"} />
        <RadioInput handleChangeCategory={handleChangeCategory} title={"Expert"} value={"Expert"} name={"workexp"} />
      </div>
    </div>
  )
}
