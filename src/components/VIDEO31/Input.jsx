import React from 'react'
import { Field , ErrorMessage } from 'formik'

const Input = (props) => {
 return <>
    <label for={props.name}>{props.label}</label><br />
    <Field type={props.type} name={props.name} id={props.name} /><br />
    <ErrorMessage name={props.name} /><br />
 </>
}

export default Input