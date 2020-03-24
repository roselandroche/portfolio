import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

function ContactForm(props) {
    const [message, setMessage] = useState([])
    return (
        <Form>
            <Field type='text' name='sender' placeholder='Sender Name' />
            <Field component='select' name='reason'>
                <option value='' disabled>Select Reason for Message</option>
                <option value='Compliment'>Compliment</option>
                <option value='Constructive Criticism'>Constructive Criticism</option>
                <option value='Job Offer'>Job Offer</option>
            </Field>
            <Field type='text' name='messageBody' placeholder='Message Body' />

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
    }
})(ContactForm)
