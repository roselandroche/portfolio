import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import '../css/ContactForm.css';

function ContactForm(props) {
    return (
        <Form className='contact-form' method='POST' data-netlify="true">
            {props.touched.sender && props.errors.sender && <p className='error'>{props.errors.sender}</p>}
            <Field className='input' type='email' name='sender' placeholder='Sender Email' />
            {props.touched.reason && props.errors.reason && <p className='error'>{props.errors.reason}</p>}
            <Field className='input' component='select' name='reason'>
                <option value='' disabled>Select Reason for Message</option>
                <option value='Compliment'>Compliment</option>
                <option value='Constructive Criticism'>Constructive Criticism</option>
                <option value='Job Offer'>Job Offer</option>
            </Field>
            {props.touched.messageBody && props.errors.messageBody && <p className='error'>{props.errors.messageBody}</p>}
            <Field className='input' type='text' name='messageBody' placeholder='Message Body' />

            <button type='submit'>Send Message</button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: (props) => {
        return {
            sender: props.sender || '',
            reason: props.reason || '',
            messageBody: props.messageBody || ''
        }
    },
    validationSchema: yup.object().shape({
        sender: yup.string().email().required('Sender email is required!'),
        reason: yup.string().required('Reason for message is required!'),
        messageBody: yup.string().required('Actual message is required!')
    }),
    handleSubmit: (values) => {
        const value = {
            to: values.sender,
            from: 'r.landroche@gmail.com',
            subject: values.reason,
            text: values.messageBody
        }
        axios.post('https://rose-portfolio-be.herokuapp.com/api/mail', value)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(`Error:`, err.response)
            })
        console.log(value)
    }
})(ContactForm)
