import React, { useState } from 'react'
import { ErrorMessage, Field, FieldArray, Form, Formik, useFormik } from 'formik'
import * as Yup from "yup"
import TextErrorFormik from './TextErrorFormik'

const SimplifiedFormik = () => {
  
    const validationSchema= Yup.object({
        name:Yup.string().required("Required!"),
        email:Yup.string().email("Invalid email format").required("Required!"),
        channel:Yup.string().required("Required!")
    })

    const validatePractice= values=>{ //Field level validation , here values will auto. get the value whre it is used as a props
        let err; 
        if(!values)
        err="Text is required";
        return err;
    }
    
    const initialValues={
        name:'',
        email:'',
        channel:'',
        practice:'',
        phoneNumbers:['']
    }
    const savedValues = {
        name:'Aman',
        email:'aman12@gmail.com',
        channel:'Aman Dhattarwal',
        practice:'Practicing Redux',
        phoneNumbers:['']
    }

    const onSubmit=(values,onSubmitprops)=>{
        console.log("Form on submit", values)
        console.log("on submit props",onSubmitprops)
        onSubmitprops.setSubmitting(false);
    }
const [formValues , setFormValues] = useState({});
 return <>
 <br /><br /><br /><br /><br />
 <Formik initialValues={initialValues || formValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize> 
 {/* validateOnMount makes the submit button initially disabled */}
 {formik=>{
    console.log(formik);
    return ( <Form>
    <label for="name">Name</label><br />
    <Field type="text" 
    id="name" 
    name="name" 
    />
    {/* <ErrorMessage name="name" component={TextErrorFormik}/><br /> */}
    <label for="email">Email</label><br />
    <Field type="email" 
    id="email" 
    name="email" 
     />
   <ErrorMessage name="email">
   {(errorMsg=>
    <div className='error' style={{color:"red"}}>{errorMsg}</div>
   )}
   </ErrorMessage><br />
    <label for="channel">Channel</label><br />
    <Field 
    id="channel" 
    name="channel" 
    />
      <ErrorMessage name="channel" /><br />
      <label for="testing">Practice</label><br />
      <Field id="testing" name="practice" placeholder="you can pass additional props in field too" as="textarea" validate={validatePractice} />
        <ErrorMessage name="practice" />
      <br/>
      <label for="phone">List of phone numbers</label><br />
      <FieldArray name="phoneNumbers">
      {(phoneNum)=>{
        console.log(phoneNum) // autom renders the complete object
        const {form, push, remove} = phoneNum // need values , to push , to remove
        return (<div>
            {form.values.phoneNumbers.map((phoneNumber , index)=>(
                 <div key={index}>
                 <Field name={`phoneNumber[${index}]`} />
                 <button type="button" onClick={()=>remove({index})}>-</button>
                 <button type="button" onClick={()=>push("")}>+</button>
                 </div>
        ))}

        </div>)
      }}
      </FieldArray><br />
       <button type="button" name="name" onClick={()=>{formik.validateField("name")}}>Validate name</button>
      {/* validation does not render since isTouched is false  */}
      <button type="button" onClick={()=>{formik.validate()}}>Validate all</button>
      <button type="button" onClick={()=>{formik.setFieldTouched("name")}}>Visited name</button> 
      {/* so setTouched to true */}
      <button type="button" onClick={()=>{formik.setTouched({
        name:"true",
        channel:"true",
        email:"true",
        practice:"true"
      })}}>Visited all</button> 
    <button type="submit" disabled={!formik.isValid}>Submit</button>
    {/* initially button is not disabled since error object is empty since isValid checks for error object */}
    {/* to disable the submit button when the validations are invalid */}
    <button onClick={()=>setFormValues(savedValues)}>Load saved data</button>
    <button type="submit" disabled={formik.isSubmitting}>Submit</button> 
    {/* isSubmitting will set to false if there are errors only (*) */}
    </Form>)
 }}
    </Formik>
 </>
}

export default SimplifiedFormik

/* Formik component in replacement of useFormik , wrap the complete form in it , pass the objects as props */
/* Form component in replacement of forms , no need of onSubmit since it automatically link the onSubmit of Formik */
/*  <input type="text" 
    id="channel" 
    name="channel" 
    {... formik.getFieldProps("channel")}/> GET FIELD PROPS */
/* Field component in replacement of input , [uses name attribute to match the formik state] ,[ by default field renders an input html element]
[hooks up handleChange values handleBlur] [as props to decide element (by default text) ]*/
/* Error Message component will checks for validation by name attribute and invokes when either the field is visited or validation fails , to style pass props  */
/* Fieldarray to collecct multiple information of same kind */
/* FastField for more than 30 fields or complex validation (*) */

// video 29 ,30?