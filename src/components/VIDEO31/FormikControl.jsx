import React from 'react'
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import TextArea from './TextArea';
import Datepicker from './Datepicker';

const FormikControl = (props) => {
const {control} =props;
switch(control){
    case "input":
        return (<Input name={props.name} type={props.type} label={props.label} />) ;
    case "textarea":
        return (<TextArea name={props.name} type={props.type} label={props.label} />) ;
    case "select":
        return (<Select name={props.name} type={props.type} label={props.label} options={props.options}/>) ;
    case "checkbox":;
    case "radio":
        return (<Radio name={props.name} type={props.type} label={props.label} radios={props.radios}/>) ;;
    case "date":
        return (<Datepicker name={props.name} type={props.type} label={props.label} />) ;;
    default:return null;
}
}

export default FormikControl