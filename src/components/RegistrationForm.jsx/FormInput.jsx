import { ErrorMessage , Field} from 'formik'
import React from 'react'
import RegTextError from './RegTextError'

const FormInput = (props) => {
  return <>
    <label for={props.name}>{props.label}</label><br />
    <Field name={props.name} id={props.name} type={props.type} />
    <ErrorMessage name={props.name} component={RegTextError} /><br />
  </>
}

export default FormInput