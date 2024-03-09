import React from 'react'

export default function RadioInput({title, name, value, handleChangeCategory}) {

  return (
    <label className='sidebar-label-container'>
    <input type="radio" name={name} value={value} onChange={handleChangeCategory} />
    <span className='checkmark'></span> {title}
    </label>
  )
}
