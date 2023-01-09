/*
managing form data
form submission
error display and validation */

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"

const  Formik = () => {

    const validationSchema= Yup.object({
        name:Yup.string().required("Required!"),
        email:Yup.string().email("Invalid email format").required("Required!"),
        channel:Yup.string().required("Required!")
    })

    //validationSchema is to set validation simply from YUP LIBRARY and then pass it as a validate object in useFormik

    const validate=values=>{
        let errors={};

        if(!values.name)
        errors.name="Required";
        // else if(abcdef.test(values.name))
        // errors.name="Enter a valid name";

        if(!values.email)
        errors.email="Required";

        if(!values.channel)
        errors.channel="Required";

        return errors;
    }
const formik = useFormik({
    initialValues:{
        name:'',
        email:'',
        channel:''
    },
    onSubmit: values=>{
        console.log("Form data on submit", values);
    },
    validationSchema
});

console.log("Formik values:",formik.values)
console.log("Formik errors:",formik.errors)
console.log("visited fields:",formik.touched)
// MANAGING STATE -> takes an object as an input params and outputs an object having various properties and methods to manage state
// initialValues is an object iinside formik inside which the initial values of fields are passed which are stored
// in name attribute ( only name attribute values)
// further to dynamically track the values we passed ONCHANGE and VALUE attribute in input fields

// FORM SUBMISSION -> handleSubmit will trigger the onSubmit method of formik automatically
// onSubmit we will get the latest values of form by values as its argument

//VALIDATON -> validate method , takes values as an argument returns an object
// consider for errors , need to return an error object , this object must have keys same as that of values object
// handleBlur to keep track whether the field is visited or not by formik.touched
// onBlur invokes when u click outside that input fields
// touched object returns true if fields which are visited
const month = new Date;
console.log(month);

//TO GET THE USER CURRENT LOCATION
navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position)
},(err)=>{
    console.log(err)
    if(err.message!=" ")
    alert("User denied to share the location")
})
 return <>
 <br /><br /><br /><br /><br />
 <form onSubmit={formik.handleSubmit}>
    <label for="name">Name</label><br />
    <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
    { formik.touched.name && formik.errors.name?<p>{formik.errors.name}</p>:null}<br />
    <label for="email">Email</label><br />
    <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
    {  formik.touched.email && formik.errors.email?<p>{formik.errors.email}</p>:null}<br />
    <label for="channel">Channel</label><br />
    <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur}/>
    {  formik.touched.channel && formik.errors.channel?<p>{formik.errors.channel}</p>:null}<br />
    <button type="submit">Submit</button>
    </form>
 </>
}

export default Formik