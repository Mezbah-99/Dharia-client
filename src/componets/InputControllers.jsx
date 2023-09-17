import React from 'react'

const InputControllers = ({ type, placeholder, value, name, id, inputClass, inputHandle }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name} 
        id={id}
        className={inputClass}
        onChange={inputHandle}
        value={value}
      />
    </>
  )
}

export default InputControllers