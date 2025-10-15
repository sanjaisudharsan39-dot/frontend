import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';


////useformik package is npm formik yup 

const UseFormik = () => {
    const validationSchema = yup.object({
        userName : yup.string().max(10, "Max 10 characters").required('Mandatory field'),
        mail : yup.string().email('Invalid email format').required('Mandatory field')
     })

     const formik = useFormik({
        initialValues : {userName:"",mail:""},
        validationSchema,
        onSubmit : (values)=>console.log(values)
     })
  return (
    <div>
        <form onSubmit={formik.handleSubmit} noValidate >
            <input
                type = 'text'
                name = 'userName'
                onChange={formik.handleChange}
                value={formik.values.userName}
            />
            <div className='text-danger'>{formik.errors.userName}</div>
            <input
                type = 'text'
                name = 'mail'
                onChange = {formik.handleChange}
                value = {formik.values.mail}
            />
            <div className = 'text-danger'>{formik.errors.mail}</div>
            <button>SUBMIT USING FORMIK HOOK</button>
        </form>
      
    </div>
  )
}

export default UseFormik

