import React from 'react'
import Button from '../Components/Button'
import RadioInput from '../Components/RadioInput'

export default function Salary({handleClickCategory, handleChangeCategory}) {
  return (
    <div>
        <div className='mb-4'>
        <h4 className="text-lg font-medium mb-2">Salary</h4>
        <Button handleClick={handleClickCategory} title="Yearly" value="Yearly"/>
        <Button handleClick={handleClickCategory} title="Monthly" value="Monthly"/>
        <Button handleClick={handleClickCategory} title="Weekly" value="Weekly"/>
        </div>
        
        <div>
        <label className="sidebar-label-container">
          <input type="radio" name="salary" value="" onChange={handleChangeCategory} />
          <span className="checkmark"></span> All
        </label>
        <RadioInput handleChangeCategory={handleChangeCategory} title={"< 30000K"} value={"30"} name={"salary"} />
        <RadioInput handleChangeCategory={handleChangeCategory} title={"< 50000K"} value={"50"} name={"salary"} />
        <RadioInput handleChangeCategory={handleChangeCategory} title={"< 70000K"} value={"70"} name={"salary"} />
        <RadioInput handleChangeCategory={handleChangeCategory} title={"< 100000K"} value={"100"} name={"salary"} />
      </div>
    </div>
  )
}
