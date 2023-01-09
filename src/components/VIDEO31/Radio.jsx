import React from 'react'
import {Field, ErrorMessage, FieldArray} from "formik"

const Radio = (props) => {
    const {radios} =props;
    return <>
    <label htmlFor={props.name}>{props.label}</label><br />
    <Field name={props.name} id={props.name}>
    {({field})=>{
        console.log(field)
        return radios.map((rad)=>{
        return (<>
           {/* <input type="radio" id={rad.key} value={rad.value} {...field} checked={field.value===rad.value}>{rad.value}</input> */}
           <label for={rad.key}>{rad.value}</label>
           </>
        )
    })}
    }
    </Field><br />
    <ErrorMessage name={props.name} /><br />
 </>
}

export default Radio;