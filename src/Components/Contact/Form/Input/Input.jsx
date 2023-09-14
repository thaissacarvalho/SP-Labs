import React from 'react'

export default function Input({type, placeholder, onChange, name}) {
  return (
    <input type={type} placeholder={placeholder} name={name} className="form__input box--change" onChange={onChange} required/>
  )
}
