import React from 'react'
import { ErrorMessage,useField } from 'formik'

const TextField = ({label,...props}) => {
    const [field,meta]=useField(props)
  return (
    <div>
        <p>{label}</p>
      <input {...field} {...props}/>
      <ErrorMessage name={field.name}/>
    </div>
  )
}

export default TextField
