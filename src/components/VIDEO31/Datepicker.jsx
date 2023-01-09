import React from 'react'
import { Field , ErrorMessage } from 'formik'
import "react-datepicker/dist/react-datepicker.css"
import DateView from "react-datepicker"
const Datepicker = (props) => {
  return <>
    <label for={props.name}>{props.label}</label>
    <Field name={props.name} id={props.name} type={props.type}>
        {
    ({form,field})=>{
        const {setFieldValue} = form;
        const {value} = field;
        return <DateView id={props.name} name={props.name} {...field} selected={value} onChange={(val)=>setFieldValue(props.name, val)} />
    }
        }
    </Field>
    <ErrorMessage name={props.name} />
  </>
}

export default Datepicker