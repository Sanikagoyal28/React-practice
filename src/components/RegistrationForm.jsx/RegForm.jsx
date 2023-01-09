import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from "yup"
import FormInput from './FormInput'

const RegForm = () => {
    const initialValues={
        email:'',
        password:'',
        confirmPass:'',
        contact:'',
        phone:''
    }

    const validationSchema =Yup.object({
        email:Yup.string().email("Invalid email format").required("Required"),
        password:Yup.string().required("Required !"),
        confirmPass:Yup.string().required("Required !")
    })
    const validateConfPass=values=>{
        
    }

    const onSubmit = values=>{
        console.log(values);
    }
return <>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
        {formik=>{
            return (
                <Form>
                <FormInput name="email" type="email" label="Enter Email" />
                <FormInput name="password" type="password" label="Password" />
                <FormInput name="confirmPass" type="password" label="Confirm Password" />
                <FormInput name="phone" type="number" label="Phone Number" />

                <button type="submit">Submit</button>
                </Form>
            )
        }}
    </Formik>
</>
}

export default RegForm