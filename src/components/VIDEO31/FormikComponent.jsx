// vdo 31 onwards

import React from 'react'
import { Formik , Form } from 'formik';
import FormikControl from './FormikControl';
import * as Yup from "yup"

const FormikComponent = () => {
    const dropdownOptions=[
        {id:"Select an option",value:"Select an option"},
        {id:"CSE", value:"Computer Science"},
        {id:"ECE", value:"Electronics"},
    ]
const initialValues={
    name:"",
    address:'',
    interests:'',
    departments:'',
    birthdate:null
    // checkbox:['']
};
const validationSchema=Yup.object({
    name:Yup.string().required("Required !"),
    address:Yup.string().required("Required !"),
    birthdate:Yup.string().required("Required !").nullable()
});
const onSubmit = values=>{console.log(values)};

return <>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {formik=>{
            return (
                <Form>
                <FormikControl 
                    control="input"
                    name = "name"
                    type="name"
                    label="Enter your name"
                />
                <FormikControl 
                    control="textarea"
                    name = "address"
                    type="textarea"
                    label="Enter your address"
                />
                 <FormikControl 
                    control="select"
                    name = "interests"
                    type="select"
                    label="Enter your interested streams"
                    options={dropdownOptions}
                />
                 <FormikControl 
                    control="radio"
                    name = "departments"
                    type="radio"
                    label="Choose one among the following departments"
                    radios={dropdownOptions}
                />
                 <FormikControl 
                    control="date"
                    name = "birthdate"
                    type="date"
                    label="Select a date"
                />
                    <button type="submit">Submit</button>
                </Form> 
            )
        }}
    </Formik>
</>
}

export default FormikComponent