import React from 'react'
import {Field, ErrorMessage, FieldArray} from "formik"

const Select = (props) => {
    const {options} =props;
    return <>
    <label htmlFor={props.name}>{props.label}</label><br />
    <Field as="select" name={props.name} id={props.name}>
    {options.map((opt)=>{
        return (
            <option key={opt.id} value={opt.value}>{opt.value}</option>
        )
    })}
    </Field><br />
    <ErrorMessage name={props.name} /><br />
 </>
}

export default Select